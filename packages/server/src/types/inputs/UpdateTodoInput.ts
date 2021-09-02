import { Field, ID, InputType } from 'type-graphql';
import Weekday from './Weekday';
import type { TodoResponse } from './TodoResponse';

@InputType()
export class UpdateTodoInput implements Partial<TodoResponse> {
    @Field(() => ID)
    public readonly todoId: string;

    @Field()
    public readonly date: string;

    @Field({ nullable: true })
    public title?: string;

    @Field({ nullable: true })
    public description?: string;

    @Field({ nullable: true })
    public isCompleted?: boolean;

    @Field({ nullable: true })
    public isArchived?: boolean;

    @Field(() => [Weekday], { nullable: true })
    public repeatWeekdays?: Weekday[];
}
