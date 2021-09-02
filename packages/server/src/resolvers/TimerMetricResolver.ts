/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Query, Ctx, UseMiddleware, Arg, Mutation } from 'type-graphql';
import { TimerAttempt, TimerEntry, TimerMetric, User } from '../entities';
import { IContext } from '../types/IContext';
import { TimerMetricPayload } from '../types/TimerMetricPayload';
import { isAuthorized } from '../middleware/isAuthorized';
import { getConnection, Repository } from 'typeorm';
import { UpdateTimerMetricInput } from '../types/inputs/UpdateTimerMetricInput';
import { TimerMetricResponse } from '../types/responses/TimerEntryResponse';

@Resolver(() => TimerMetric)
export class TimerMetricResolver {
    private readonly timerMetricRepo = getConnection().getRepository(TimerMetric);
    private readonly timerEntryRepo = getConnection().getRepository(TimerEntry);

    @UseMiddleware(isAuthorized)
    @Query(() => [TimerMetricPayload])
    public async getTimers(
        @Arg('date', { nullable: true }) date: Date | null,
        @Ctx() { req }: IContext
    ): Promise<TimerMetricPayload[]> {
        const user: User = req.session.user;

        const day = new Date(
            (date == null ? new Date() : new Date(date)).toDateString()
        );
        const timers = await this.timerMetricRepo.find({ where: { user } });

        for (const metric of timers) {
            let entry = await this.timerEntryRepo.findOne({
                where: { metric, date: day },
            });
            if (entry === undefined) {
                entry = await this.timerEntryRepo.create({
                    metric,
                    date: day,
                }).save();
                await metric.save();
            }

            const attempts = await TimerAttempt.find({
                where: {
                    metric,
                    startTime: ,
                },
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

        const metric = await this.timerMetricRepo.create({ user }).save();

        const entry = await this.timerEntryRepo.create({
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

            const metric = await this.timerMetricRepo.findOne(updateInput.metricId);
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

            const entry = await this.timerEntryRepo.findOne({
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
    public async deleteTimer(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const metric = await this.timerMetricRepo.findOneOrFail(id);
            await metric.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Query(() => [TimerMetricResponse])
    public async getMyTimers(
        @Ctx() { req }: IContext
    ): Promise<TimerMetricResponse[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const date = new Date().toDateString();
        const timers = await this.timerMetricRepo.find({ user });
        const timerPayloads: TimerMetricPayload[] = [];

        for (const timer of timers) {
            let existingEntry = await this.timerEntryRepo.findOne({
                metric: timer,
                date,
            });
            if (existingEntry === undefined) {
                const newEntry = await this.timerEntryRepo.create({
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
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
