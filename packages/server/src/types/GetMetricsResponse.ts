import { Field, ObjectType } from 'type-graphql';
import { CounterMetricDailyEntry } from './CounterMetricDailyEntry';
import { TimerMetricPayload } from './TimerMetricPayload';

@ObjectType()
export class GetMetricsResponse {
    @Field(() => [CounterMetricDailyEntry])
    public counters: CounterMetricDailyEntry[];

    @Field(() => [TimerMetricPayload])
    public timers: TimerMetricPayload[];
}
