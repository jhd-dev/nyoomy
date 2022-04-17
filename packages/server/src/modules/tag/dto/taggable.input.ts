import { Field, ID, InputType } from '@nestjs/graphql';
import type { Taggable } from '../models/taggable.entity';

@InputType()
export class TaggableInput implements Partial<Taggable> {
    @Field(() => ID)
    public readonly id: number;
}
