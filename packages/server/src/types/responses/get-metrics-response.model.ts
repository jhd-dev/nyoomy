import { Field, ObjectType } from '@nestjs/graphql';
import { CounterMetricDailyEntry } from './counter-metric-daily-entry.model';
import { TimerMetricPayload } from './timer-metric.model';

@ObjectType()
export class GetMetricsResponse {
    @Field(() => [CounterMetricDailyEntry])
    public counters: CounterMetricDailyEntry[];

    @Field(() => [TimerMetricPayload])
    public timers: TimerMetricPayload[];
}
