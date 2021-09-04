import { Field, ID, Int, ObjectType } from 'type-graphql';
import { CounterEntry } from '../../entities';
import MetricType from '../enums/MetricType';
import { Metric } from '../../entities/Metric';
import type { CounterMetric } from '../../entities';

@ObjectType()
export class CounterMetricResponse implements Partial<CounterMetric> {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => MetricType)
    public metricType: MetricType = MetricType.COUNTER;

    @Field(() => Metric)
    public metric: Metric;

    @Field(() => [CounterEntry])
    public entries: CounterEntry[];

    @Field(() => Int)
    public maximum: number;

    @Field(() => Int)
    public minimum: number;

    @Field(() => Int)
    public interval: number;
}
