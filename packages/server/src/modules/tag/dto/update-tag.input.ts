import { Field, ID, InputType } from '@nestjs/graphql';
import { CategoryColor } from '../../../types/enums/category-color.enum';
import CategoryIcon from '../../../types/enums/category-icon';
import { TaggableInput } from './taggable.input';
import type { TagEntity } from '../models/tag.entity';

@InputType()
export class UpdateTagInput implements Partial<TagEntity> {
    @Field(() => ID)
    public readonly id: string;

    @Field({ nullable: true })
    public label?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field(() => CategoryColor, { nullable: true })
    public color?: CategoryColor;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;

    @Field(() => [TaggableInput], { nullable: true })
    public taggables?: TaggableInput[] | null;

    @Field(() => [TaggableInput], { defaultValue: [] })
    public applyTaggables?: TaggableInput[];

    @Field(() => [TaggableInput], { defaultValue: [] })
    public removeTaggables?: TaggableInput[];

    @Field({ nullable: true })
    public isArchived?: boolean;
}
