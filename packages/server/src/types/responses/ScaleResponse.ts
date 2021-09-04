import { Field, ID, ObjectType, Int } from 'type-graphql';
import { Metric } from '../../entities/Metric';
import { ScaleEntry } from '../../entities/ScaleEntry';
import type { Scale } from '../../entities/Scale';

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
