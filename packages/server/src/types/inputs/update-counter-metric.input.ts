import { Field, ID, Int, InputType } from '@nestjs/graphql';
import type { CounterMetricDailyEntry } from '../responses/counter-metric-daily-entry.model';

@InputType()
export class UpdateCounterMetricInput
    implements Partial<CounterMetricDailyEntry>
{
    @Field(() => ID)
    public readonly metricId: string;

    @Field()
    public readonly dateString: string;

    @Field({ nullable: true })
    public label?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field(() => Int, { nullable: true })
    public maximum?: number;

    @Field(() => Int, { nullable: true })
    public minimum?: number;

    @Field(() => Int, { nullable: true })
    public interval?: number;

    @Field(() => Int, { nullable: true })
    public count?: number;
}
