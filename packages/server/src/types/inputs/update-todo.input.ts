import { Field, ID, InputType } from '@nestjs/graphql';
import Weekday from '../enums/Weekday';
import type { Todo } from '../../entities/todo.entity';

@InputType()
export class UpdateTodoInput implements Partial<Todo> {
    @Field(() => ID)
    public readonly id!: string;

    @Field()
    public readonly date!: string;

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
