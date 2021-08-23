/* eslint-disable @typescript-eslint/no-unsafe-return */
import { COOKIE_NAME } from '@nyoomy/global';
import { compare, hash } from 'bcryptjs';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Args,
    Ctx,
    UseMiddleware,
    ID,
} from 'type-graphql';
import {
    CounterEntry,
    CounterMetric,
    TimerAttempt,
    TimerEntry,
    TimerMetric,
    User,
} from '../entities';
import { PUBLIC_URL } from '../env';
import { isAuthorized } from '../middleware/isAuthorized';
import { CounterMetricDailyEntry } from '../types/CounterMetricDailyEntry';
import { IContext } from '../types/IContext';
import { LoginResponse } from '../types/LoginResponse';
import { RegistrationResponse } from '../types/RegistrationResponse';
import { UserLoginInfo } from '../types/UserLoginInfo';
import { UserRegistrationInfo } from '../types/UserRegistrationInfo';
import sendEmail from '../utils/sendEmail';
import { validateRegistration } from '../utils/validateRegistration';
import type { FieldError } from '../types/FieldError';
import { UpdateCounterMetricInput } from '../types/UpdateCounterMetricInput';
import { GetMetricsResponse } from '../types/GetMetricsResponse';
import { TimerMetricPayload } from '../types/TimerMetricPayload';
import { IsNull, Not } from 'typeorm';
import { UpdateTimerMetricInput } from '../types/UpdateTimerMetricInput';

async function getUser(userId?: string): Promise<User | null> {
    if (typeof userId !== 'string' || userId.length === 0) return null;
    return (await User.findOne({ id: userId })) ?? null;
}

/**
 * GraphQL resolver for the user table.
 *
 * @exports
 * @class UserResolver
 */
@Resolver()
export class UserResolver {
    /**
     * Queries **all** users in the database.
     *
     * @async
     * @returns {Promise<User[]>} a list of all users in the database
     */
    @Query(() => [User])
    public getAllUsers(): Promise<User[]> {
        return User.find();
    }

    @Query(() => User, { nullable: true })
    public async currentUser(@Ctx() { req }: IContext): Promise<User | null> {
        const id = req?.session?.userId;
        if (typeof id !== 'string' || id.length === 0) return null;
        return (await User.findOne({ id })) ?? null;
    }

    /**
     * Attempts to add a user to the database,
     *
     * @param {UserRegistrationInfo} param0 { name, email, username, password }
     * @returns {Promise<RegistrationResponse>} the user
     */
    @Mutation(() => RegistrationResponse)
    public async registerUser(
        @Args() { displayName, email, username, password }: UserRegistrationInfo
    ): Promise<RegistrationResponse> {
        const hashedPassword: string = await hash(password, 12);

        const errors: FieldError[] = await validateRegistration({
            displayName,
            email,
            username,
            password,
        });

        if (errors.length > 0) return { user: null, errors };

        const user: User = await User.create({
            displayName,
            username,
            email,
            password: hashedPassword,
        }).save();

        return { user, errors: null };
    }

    @Mutation(() => LoginResponse)
    public async login(
        @Args() { usernameOrEmail, password }: UserLoginInfo,
        @Ctx() { req }: IContext
    ): Promise<LoginResponse> {
        const user: User | undefined = await User.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
        if (user === undefined) return { user: null, error: 'User not found.' };

        const isValid: boolean = await compare(password, user.password);
        if (!isValid) return { user: null, error: 'Incorrect password.' };

        // successful login
        if (req == null) throw new Error('res not defined');
        req.session.userId = user.id;
        return { user, error: null };
    }

    @Mutation(() => Boolean)
    public logout(@Ctx() { req, res }: IContext): Promise<boolean> {
        return new Promise((resolve, reject) =>
            // eslint-disable-next-line promise/prefer-await-to-callbacks
            req.session.destroy((err: unknown): void => {
                res.clearCookie(COOKIE_NAME);
                if (err != null) {
                    console.error(err);
                    reject(new Error(String(err)));
                }
                resolve(true);
            })
        );
    }

    @Mutation(() => Boolean)
    public async forgotPassword(@Arg('email') email: string): Promise<boolean> {
        const user: User | undefined = await User.findOne({ where: { email } });
        if (user === undefined) return false; // email not in DB

        const token: string = '';

        await sendEmail(
            email,
            'Forgot password',
            `<a href="${PUBLIC_URL.origin}/reset-password/${token}">
                Click here to reset your password.
            </a>`
        );
        return true;
    }

    @Mutation(() => Boolean)
    public async resetPassword(
        @Arg('email') email: string
        // @Arg('password') password: string
    ): Promise<boolean> {
        const user: User | undefined = await User.findOne({ where: { email } });
        if (user === undefined) return false; // email not in DB

        return true;
    }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            await User.delete(id);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthorized)
    public async deleteUser(@Ctx() { req, res }: IContext): Promise<boolean> {
        try {
            await User.delete({ id: req.session.userId });
            res.clearCookie(COOKIE_NAME);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Mutation(() => Boolean)
    public async updateUserPassword(
        @Arg('username') username: string,
        @Arg('oldPassword') oldPassword: string,
        @Arg('newPassword') newPassword: string
    ): Promise<boolean> {
        try {
            const user: User | undefined = await User.findOne({ username });
            if (user === undefined) throw new Error('User does not exist.');

            const actualPassword: string = user.password;
            if (oldPassword !== actualPassword)
                throw new Error('Incorrect password.');

            await User.update({ username }, { password: newPassword });
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    // @Query(() => GetMetricsResponse)
    // public async getMetrics(
    //     @Ctx() { req }: IContext
    // ): Promise<GetMetricsResponse> {
    //     const user = await getUser(req?.session?.userId);
    //     if (user == null) return { counters: [], timers: [] };

    //     const counters = await CounterMetric.find({ user });
    //     const date = new Date().toDateString();
    //     const counterEntries: CounterMetricDailyEntry[] = [];

    //     for (const counter of counters) {
    //         let existingEntry = await CounterEntry.findOne({
    //             metric: counter,
    //             date,
    //         });
    //         if (existingEntry === undefined) {
    //             const newEntry = new CounterEntry();
    //             newEntry.date = date;
    //             newEntry.metric = counter;
    //             await newEntry.save();
    //             await counter.save();
    //             existingEntry = newEntry;
    //         }
    //         counterEntries.push({
    //             metricId: counter.id,
    //             metricType: counter.metricType,
    //             date: existingEntry.date,
    //             count: existingEntry.count,
    //             label: counter.label,
    //             description: counter.description,
    //             maximum: counter.maximum,
    //             minimum: counter.minimum,
    //             interval: counter.interval,
    //         });
    //     }

    //     const timers = await TimerMetric.find({ user });
    //     const timerPayloads: TimerMetricPayload[] = [];

    //     for (const timer of timers) {
    //         let existingEntry = await TimerEntry.findOne({
    //             metric: timer,
    //             date,
    //         });
    //         if (existingEntry === undefined) {
    //             const newEntry = await TimerEntry.create({
    //                 metric: timer,
    //                 date,
    //             }).save();
    //             await timer.save();
    //             existingEntry = newEntry;
    //         }

    //         const currentAttempt = await TimerAttempt.findOne({
    //             where: {
    //                 entry: existingEntry,
    //                 startTime: Not(IsNull()),
    //                 endTime: IsNull(),
    //             },
    //         });
    //         const startTime =
    //             currentAttempt == null ? null : currentAttempt.startTime;

    //         timerPayloads.push({
    //             metricId: timer.id,
    //             date: existingEntry.date,
    //             metricType: timer.metricType,
    //             label: timer.label,
    //             description: timer.description,
    //             goalLength: timer.goalLength,
    //             goalPerDay: timer.goalPerDay,
    //             startTime,
    //         });
    //     }

    //     return {
    //         counters: counterEntries,
    //         timers: timerPayloads,
    //     };
    // }

    @Query(() => [TimerMetricPayload])
    public async getTimers(
        @Ctx() { req }: IContext
    ): Promise<TimerMetricPayload[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const date = new Date().toDateString();
        const timers = await TimerMetric.find({ user });
        const timerPayloads: TimerMetricPayload[] = [];

        for (const timer of timers) {
            let existingEntry = await TimerEntry.findOne({
                metric: timer,
                date,
            });
            if (existingEntry === undefined) {
                const newEntry = await TimerEntry.create({
                    metric: timer,
                    date,
                }).save();
                await timer.save();
                existingEntry = newEntry;
            }

            const currentAttempt = await TimerAttempt.findOne({
                where: {
                    entry: existingEntry,
                    startTime: Not(IsNull()),
                    endTime: IsNull(),
                },
            });
            const startTime =
                currentAttempt == null ? null : currentAttempt.startTime;

            timerPayloads.push({
                metricId: timer.id,
                date: existingEntry.date,
                metricType: timer.metricType,
                label: timer.label,
                description: timer.description,
                goalLength: timer.goalLength,
                goalPerDay: timer.goalPerDay,
                startTime,
            });
        }

        return timerPayloads;
    }

    @Mutation(() => TimerMetricPayload, { nullable: true })
    public async addTimer(
        @Ctx() { req }: IContext
    ): Promise<TimerMetricPayload | null> {
        const user = await getUser(req?.session?.userId);
        console.log(user?.email);
        if (user == null) return null;

        const metric = await TimerMetric.create({ user }).save();

        const entry = await TimerEntry.create({
            metric,
            date: new Date().toDateString(),
        }).save();

        await entry.save();
        await metric.save();

        return {
            metricId: metric.id,
            metricType: metric.metricType,
            date: entry.date,
            label: metric.label,
            description: metric.description,
            goalLength: metric.goalLength,
            goalPerDay: metric.goalPerDay,
            startTime: null,
        };
    }

    @Query(() => [CounterMetricDailyEntry])
    public async getCounters(
        @Ctx() { req }: IContext
    ): Promise<CounterMetricDailyEntry[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const metrics = await CounterMetric.find({ user });
        console.log(metrics);
        const date = new Date().toDateString();

        const dailyEntries: CounterMetricDailyEntry[] = [];
        // if (!Array.isArray(metrics.entries)) {
        //     metric.entries = [];
        // }
        for (const metric of metrics) {
            let existingEntry = await CounterEntry.findOne({ metric, date });
            if (existingEntry === undefined) {
                const newEntry = new CounterEntry();
                newEntry.date = date;
                newEntry.metric = metric;
                await newEntry.save();
                // metric.metricEntries.push(newEntry);
                await metric.save();
                existingEntry = newEntry;
            }
            dailyEntries.push({
                metricId: metric.id,
                metricType: metric.metricType,
                date: existingEntry.date,
                count: existingEntry.count,
                label: metric.label,
                description: metric.description,
                maximum: metric.maximum,
                minimum: metric.minimum,
                interval: metric.interval,
            });
        }
        return dailyEntries;
    }

    @Query(() => [CounterMetricDailyEntry])
    public async getDayCounters(
        @Ctx() { req }: IContext,
        @Arg('date', () => String) date: string
    ): Promise<CounterMetricDailyEntry[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const metrics = await CounterMetric.find({ user });

        const dailyEntries: CounterMetricDailyEntry[] = [];
        for (const metric of metrics) {
            let existingEntry = metric.metricEntries.find(
                (entry) => entry.date === date
            );
            if (existingEntry === undefined) {
                const newEntry = new CounterEntry();
                newEntry.date = date;
                newEntry.metric = metric;
                await newEntry.save();
                metric.metricEntries.push(newEntry);
                await metric.save();
                existingEntry = newEntry;
            }
            dailyEntries.push({
                metricId: metric.id,
                metricType: metric.metricType,
                date: existingEntry.date,
                count: existingEntry.count,
                label: metric.label,
                description: metric.description,
                maximum: metric.maximum,
                minimum: metric.minimum,
                interval: metric.interval,
            });
        }
        return dailyEntries;
    }

    @Mutation(() => CounterMetricDailyEntry, { nullable: true })
    public async addCounter(
        @Ctx() { req }: IContext
    ): Promise<CounterMetricDailyEntry | null> {
        const user = await getUser(req?.session?.userId);
        console.log(user?.email);
        if (user == null) return null;

        const metric = await CounterMetric.create({ user }).save();

        const entry = await CounterEntry.create({
            metric,
            date: new Date().toDateString(),
        }).save();

        await entry.save();
        await metric.save();

        return {
            metricId: metric.id,
            metricType: metric.metricType,
            date: entry.date,
            count: entry.count,
            label: metric.label,
            description: metric.description,
            maximum: metric.maximum,
            minimum: metric.minimum,
            interval: metric.interval,
        };
    }

    @Mutation(() => CounterMetricDailyEntry, { nullable: true })
    public async updateCounter(
        @Ctx() { req }: IContext,
        @Arg('updateInput') updateInput: UpdateCounterMetricInput
    ): Promise<CounterMetricDailyEntry | null> {
        console.log('updateInput!');
        console.log(updateInput);
        try {
            // Find user

            const user = await getUser(req?.session?.userId);
            console.log(user?.email);
            if (user == null) {
                throw new Error(
                    `User with id '${req?.session?.userId}' could not be found.`
                );
            }

            // Update metric

            const metric = await CounterMetric.findOne(updateInput.metricId);
            if (metric == null) {
                throw new Error(
                    `Metric with id '${updateInput.metricId}' could not be found.`
                );
            }

            metric.label = updateInput.label ?? metric.label;
            metric.description = updateInput.description ?? metric.description;
            metric.maximum = updateInput.maximum ?? metric.maximum;
            metric.minimum = updateInput.minimum ?? metric.minimum;
            metric.interval = updateInput.interval ?? metric.interval;

            await metric.save();

            // Update entry

            const entry = await CounterEntry.findOne({
                metric,
                date: updateInput.date,
            });
            if (entry == null) {
                throw new Error(
                    `Entry with date '${updateInput.date}' could not be found.`
                );
            }

            entry.count = updateInput.count ?? entry.count;
            console.log(`entry.count: ${entry.count}`);

            await entry.save();

            return {
                metricId: metric.id,
                metricType: metric.metricType,
                date: entry.date,
                count: entry.count,
                label: metric.label,
                description: metric.description,
                maximum: metric.maximum,
                minimum: metric.minimum,
                interval: metric.interval,
            };
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => TimerMetricPayload, { nullable: true })
    public async updateTimer(
        @Ctx() { req }: IContext,
        @Arg('updateInput') updateInput: UpdateTimerMetricInput
    ): Promise<TimerMetricPayload | null> {
        try {
            // Find user

            const user = await getUser(req?.session?.userId);
            console.log(user?.email);
            if (user == null) {
                throw new Error(
                    `User with id '${req?.session?.userId}' could not be found.`
                );
            }

            // Update metric

            const metric = await TimerMetric.findOne(updateInput.metricId);
            if (metric == null) {
                throw new Error(
                    `Metric with id '${updateInput.metricId}' could not be found.`
                );
            }

            metric.label = updateInput.label ?? metric.label;
            metric.description = updateInput.description ?? metric.description;
            metric.goalLength = updateInput.goalLength ?? metric.goalLength;
            metric.goalPerDay = updateInput.goalPerDay ?? metric.goalPerDay;

            await metric.save();

            // Update entry

            const entry = await CounterEntry.findOne({
                metric,
                date: updateInput.date,
            });
            if (entry == null) {
                throw new Error(
                    `Entry with date '${updateInput.date}' could not be found.`
                );
            }

            const currentAttempt = await TimerAttempt.findOne({
                where: {
                    entry,
                    startTime: Not(IsNull()),
                    endTime: IsNull(),
                },
            });

            const startTime =
                currentAttempt == null ? null : currentAttempt.startTime;

            return {
                metricId: metric.id,
                metricType: metric.metricType,
                date: entry.date,
                label: metric.label,
                description: metric.description,
                goalLength: metric.goalLength,
                goalPerDay: metric.goalPerDay,
                startTime,
            };
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteCounter(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const metric = await TimerMetric.findOneOrFail(id);
            await metric.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Mutation(() => Boolean)
    public async deleteTimer(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const metric = await TimerMetric.findOneOrFail(id);
            await metric.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}
/* eslint-enable @typescript-eslint/no-unsafe-return */
