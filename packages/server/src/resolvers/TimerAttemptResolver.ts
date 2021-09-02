/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, FieldResolver, Root, Query, Mutation } from 'type-graphql';
import { TimerAttempt } from '../entities';
import { TimerMetricPayload } from '../types/TimerMetricPayload';
import type { ResolverInterface } from 'type-graphql';

@Resolver(() => TimerAttempt)
export class TimerAttemptResolver implements ResolverInterface<TimerAttempt> {
    @FieldResolver()
    public didFinish(@Root() attempt: TimerAttempt): boolean {
        return typeof attempt.endTime === 'string';
    }

    @FieldResolver()
    public didSucceed(@Root() attempt: TimerAttempt): boolean | null {
        if (!attempt.didFinish) return null;

        const goal = attempt.entry.metric.goalLength * 60; // in seconds
        const start = timeToSeconds(attempt.startTime); // in seconds
        const end = timeToSeconds(attempt.endTime); // in seconds
        return end - start > goal;
    }
}

function timeToSeconds(dateString: string): number {
    const time = new Date(dateString);
    return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
