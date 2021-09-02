import { Field, ID, InputType, Int } from 'type-graphql';
import type { Scale } from '../../entities/Scale';

@InputType()
export class UpdateScaleInput implements Partial<Scale> {
    @Field(() => ID)
    public readonly id: string;

    @Field({ nullable: true })
    public title?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field({ nullable: true })
    public isArchived?: boolean;

    @Field(() => Int, { nullable: true })
    public min?: number;

    @Field(() => Int, { nullable: true })
    public max?: number;
}
