/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, FieldResolver, Root, Query, Ctx } from 'type-graphql';
import { TimerAttempt, TimerEntry, TimerMetric, User } from '../entities';
import type { ResolverInterface } from 'type-graphql';
import { IContext } from '../types/IContext';
import { TimerMetricPayload } from '../types/TimerMetricPayload';
import { IsNull, Not } from 'typeorm';

@Resolver(() => TimerMetric)
export class TimerMetricResolver {
    @Query(() => [TimerMetricPayload])
    public async getTimers(
        @Ctx() { req }: IContext
    ): Promise<TimerMetricPayload[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const metrics = await TimerMetric.find({ user });
        console.log(metrics);
        const date = new Date().toDateString();

        const dailyPayloads: TimerMetricPayload[] = [];

        for (const metric of metrics) {
            let existingEntry = await TimerEntry.findOne({ metric, date });
            if (existingEntry === undefined) {
                const newEntry = await TimerEntry.create({
                    metric,
                    date,
                }).save();
                await metric.save();
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

            dailyPayloads.push({
                metricId: metric.id,
                date: existingEntry.date,
                metricType: metric.metricType,
                label: metric.label,
                description: metric.description,
                goalLength: metric.goalLength,
                goalPerDay: metric.goalPerDay,
                startTime,
            });
        }
        return dailyPayloads;
    }
}

async function getUser(userId?: string): Promise<User | null> {
    if (typeof userId !== 'string' || userId.length === 0) return null;
    return (await User.findOne({ id: userId })) ?? null;
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
