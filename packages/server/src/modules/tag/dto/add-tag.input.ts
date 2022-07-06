import { Field, InputType } from '@nestjs/graphql';
import { CategoryColor } from '../../../types/enums/category-color.enum';
import CategoryIcon from '../../../types/enums/category-icon';
import { TaggableInput } from './taggable.input';
import type { TagEntity } from '../models/tag.entity';

@InputType()
export class AddTagInput implements Partial<TagEntity> {
    @Field()
    public label: string;

    @Field({ nullable: true })
    public description?: string;

    @Field(() => TaggableInput, { nullable: true })
    public taggedItem?: TaggableInput | null;

    @Field(() => CategoryColor, { nullable: true })
    public color?: CategoryColor;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
