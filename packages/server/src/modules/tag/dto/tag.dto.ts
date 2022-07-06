import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryColor } from '../../../types/enums/category-color.enum';
import CategoryIcon from '../../../types/enums/category-icon';

@ObjectType()
export class TagDto {
    @Field(() => ID)
    public id!: string;

    @Field()
    public label: string;

    @Field()
    public description: string;

    @Field(() => CategoryColor)
    public color!: CategoryColor;

    @Field(() => CategoryIcon, { nullable: true })
    public icon: CategoryIcon | null;

    @Field()
    public isArchived: boolean;
}
