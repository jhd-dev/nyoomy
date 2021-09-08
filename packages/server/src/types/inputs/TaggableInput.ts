import { Field, ID, InputType } from 'type-graphql';
import type { Taggable } from '../../entities/Taggable';

@InputType()
export class TaggableInput implements Partial<Taggable> {
    @Field(() => ID)
    public readonly id: string;
}
