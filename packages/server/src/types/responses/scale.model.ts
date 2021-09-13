import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Metric } from '../../entities/metric.entity';
import { ScaleEntry } from '../../entities/scale-entry.entity';
import type { Scale } from '../../entities/scale.entity';

@ObjectType()
export class ScaleResponse implements Partial<Scale> {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => Metric)
    public metric: Metric;

    @Field(() => Int)
    public min: number;

    @Field(() => Int)
    public max: number;
}
