import { Field, HideField, ID, Int, ObjectType } from '@nestjs/graphql';
import { TagDto } from '../../tag/dto/tag.dto';

@ObjectType()
export class TodoDto {
    @Field(() => ID)
    public id!: string;

    @Field(() => TodoDto, { nullable: true })
    public parent?: TodoDto;

    @HideField()
    public parentId?: string;

    @Field(() => [TodoDto])
    public subtasks!: TodoDto[];

    @Field()
    public title!: string;

    @Field()
    public description!: string;

    @Field()
    public isArchived!: boolean;

    @Field(() => [TagDto])
    public tags!: TagDto[];

    @HideField()
    public tagIds: string[];

    @Field({ nullable: true })
    public startDate?: Date;

    @Field({ nullable: true })
    public endDate?: Date;

    @Field(() => Int)
    public streak!: number;

    @Field(() => Int)
    public largestStreak!: number;

    @Field()
    public doesRepeat!: boolean;

    @Field({ nullable: true })
    public repeatPattern?: string;
}
