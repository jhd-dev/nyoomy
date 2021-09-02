/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Mutation, Arg, Query, Args, Ctx } from 'type-graphql';
import { User } from '../entities/User';

@Resolver()
export class UserResolver {
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
        @Arg('date') date: string
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

    @Mutation(() => Boolean)
    public async deleteCounter(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const metric = await CounterMetric.findOneOrFail(id);
            await metric.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}
