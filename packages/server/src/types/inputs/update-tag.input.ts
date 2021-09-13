import { Field, ID, InputType } from '@nestjs/graphql';
import CategoryIcon from '../enums/category-icon';
import type { Tag } from '../../entities/tag.entity';

@InputType()
export class UpdateTagInput implements Partial<Tag> {
    @Field(() => ID)
    public readonly id: string;

    @Field({ nullable: true })
    public title?: string;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
