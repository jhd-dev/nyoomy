import { Field, ID, InputType } from '@nestjs/graphql';
import type { TaggableEntity } from '../models/taggable.entity';

@InputType()
export class TaggableInput implements Partial<TaggableEntity> {
    @Field(() => ID)
    public readonly id: string;
}
