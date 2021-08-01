import { Field, Int, ObjectType } from 'type-graphql';

/**
 * A single day's CounterMetric Entry, including the metric's info
 */
@ObjectType()
export class CounterMetricDailyEntry {
    @Field(() => String)
    public metricId: string;

    @Field(() => String)
    public date: string;

    @Field(() => Int)
    public count: number;

    @Field(() => String)
    public label: string;

    @Field(() => String)
    public description: string;

    @Field(() => Int)
    public maximum: number;

    @Field(() => Int)
    public minimum: number;

    @Field(() => Int)
    public interval: number;
}
