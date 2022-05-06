import { Field, ID, ObjectType } from '@nestjs/graphql';
import Weekday from '../../../types/enums/weekday.enum';
import { Tag } from '../../tag/models/tag.entity';
import { User } from '../../user/models/user.entity';
import { Todo } from '../models/todo.entity';

@ObjectType()
export class TodoDto implements Omit<Todo, 'supertask' | 'level' | 'taggable'> {
    @Field(() => ID)
    public readonly id!: string;

    @Field(() => [Todo])
    public subtasks!: Todo[];

    @Field(() => User)
    public user!: User;

    @Field()
    public title!: string;

    @Field()
    public description!: string;

    @Field()
    public isCompleted: boolean;

    @Field()
    public isArchived!: boolean;

    @Field(() => [Weekday])
    public repeatWeekdays!: Weekday[];

    @Field(() => [Tag])
    public tags: Tag[];

    @Field()
    public get doesRepeat(): boolean {
        return this.repeatWeekdays.length !== 0;
    }
}
