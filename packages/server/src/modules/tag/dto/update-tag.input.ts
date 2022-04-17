import { Field, ID, InputType } from '@nestjs/graphql';
import CategoryIcon from '../../../types/enums/category-icon';
import { Taggable } from '../models/taggable.entity';
import type { Tag } from '../models/tag.entity';

@InputType()
export class UpdateTagInput implements Partial<Tag> {
    @Field(() => ID)
    public readonly id: number;

    @Field({ nullable: true })
    public label?: string;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;

    @Field(() => [Taggable])
    public applyTaggables?: Taggable[] | null;

    @Field(() => [Taggable])
    public removeTaggables?: Taggable[] | null;
}
