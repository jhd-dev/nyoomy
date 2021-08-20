import { Field, Int, ObjectType } from 'type-graphql';
import MetricType from './MetricType';

@ObjectType()
export class TimerMetricPayload {
    @Field(() => String)
    public readonly metricId: string;

    @Field(() => String)
    public readonly metricType: string = MetricType.TIMER;

    @Field(() => String)
    public date: string;

    @Field(() => String)
    public label: string;

    @Field(() => String)
    public description: string;

    @Field(() => Int)
    public goalLength: number;

    @Field(() => Int)
    public goalPerDay: number;

    @Field(() => String, { nullable: true })
    public startTime: string | null;
}
