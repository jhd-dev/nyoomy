import { Field, ID, Int, ObjectType } from 'type-graphql';
import MetricType from './MetricType';
import type { TimerEntry, TimerMetric } from '../entities';

@ObjectType()
export class TimerMetricResponse implements Partial<TimerEntry> {
    @Field(() => ID)
    public readonly id: string;

    @Field()
    public date: Date;

    @Field()
    public startTime: string;
}
