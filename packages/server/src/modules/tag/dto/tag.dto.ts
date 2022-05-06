import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryColor } from '../../../types/enums/category-color.enum';
import type CategoryIcon from '../../../types/enums/category-icon';
import type { Tag } from '../models/tag.entity';

@ObjectType()
export class TagDto implements Omit<Tag, 'user' | 'taggedItems'> {
    @Field(() => ID)
    public id: number;

    // @Field(() => User)
    // public user: User;

    // @Field(() => [Taggable])
    // public taggedItems: Taggable[];

    @Field()
    public label: string;

    @Field()
    public description: string;

    @Field()
    public color: CategoryColor;

    @Field()
    public icon: CategoryIcon | null;

    @Field()
    public isArchived: boolean;
}
