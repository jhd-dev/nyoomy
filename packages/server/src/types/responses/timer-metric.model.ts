import { Field, Int, ObjectType } from '@nestjs/graphql';
import MetricType from '../enums/metric-type.enum';

@ObjectType()
export class TimerMetricPayload {
    @Field()
    public readonly metricId: string;

    @Field()
    public readonly metricType: string = MetricType.TIMER;

    @Field()
    public date: Date;

    @Field()
    public label: string;

    @Field()
    public description: string;

    @Field(() => Int)
    public goalLength: number;

    @Field(() => Int)
    public goalPerDay: number;

    @Field(() => String, { nullable: true })
    public startTime: string | null;
}
