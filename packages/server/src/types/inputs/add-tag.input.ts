import { Field, InputType } from '@nestjs/graphql';
import CategoryIcon from '../enums/category-icon';
import { TaggableInput } from './taggable.input';
import type { Tag } from '../../entities/tag.entity';

@InputType()
export class AddTagInput implements Partial<Tag> {
    @Field()
    public title: string;

    @Field(() => TaggableInput, { nullable: true })
    public taggedItem?: TaggableInput | null;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
