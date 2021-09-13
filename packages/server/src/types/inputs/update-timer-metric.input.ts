import { Field, ID, Int, InputType } from '@nestjs/graphql';
import type { TimerMetricPayload } from './TimerMetricPayload';

@InputType()
export class UpdateTimerMetricInput implements Partial<TimerMetricPayload> {
    @Field(() => ID)
    public readonly metricId: string;

    @Field()
    public readonly date: string;

    @Field({ nullable: true })
    public label?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field(() => Int, { nullable: true })
    public maximum?: number;

    @Field(() => Int, { nullable: true })
    public goalLength?: number;

    @Field(() => Int, { nullable: true })
    public goalPerDay?: number;

    @Field({ nullable: true })
    public startTime?: string;
}
