import { Field, ID, ObjectType, Int } from 'type-graphql';
import { ScaleEntry } from '../../entities/ScaleEntry';
import type { Scale } from '../../entities/Scale';

@ObjectType()
export class ScaleResponse implements Partial<Scale> {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => [ScaleEntry])
    public entries: ScaleEntry[];

    @Field()
    public title: string;

    @Field()
    public description: string;

    @Field()
    public isArchived: boolean;

    @Field(() => Int)
    public min: number;

    @Field(() => Int)
    public max: number;
}
