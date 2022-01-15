import { Field, Int, ObjectType } from '@nestjs/graphql';
import MetricType from '../enums/metric-type.enum';

/**
 * A single day's CounterMetric Entry, including the metric's info
 */
@ObjectType()
export class CounterMetricDailyEntry {
    @Field()
    public metricId: string;

    @Field(() => MetricType)
    public metricType: MetricType = MetricType.COUNTER;

    @Field()
    public date: Date;

    @Field(() => Int)
    public count: number;

    @Field()
    public label: string;

    @Field()
    public description: string;

    @Field(() => Int)
    public maximum: number;

    @Field(() => Int)
    public minimum: number;

    @Field(() => Int)
    public interval: number;
}
