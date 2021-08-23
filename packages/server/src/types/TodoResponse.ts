import { Field, ObjectType } from 'type-graphql';
import Weekday from './Weekday';

@ObjectType()
export class TodoResponse {
    @Field(() => String)
    public readonly todoId: string;

    @Field(() => String)
    public date: string;

    @Field(() => String)
    public title: string;

    @Field(() => String)
    public description: string;

    @Field(() => Boolean)
    public isCompleted: boolean;

    @Field(() => Boolean)
    public isArchived: boolean;

    @Field(() => [Weekday])
    public repeatWeekdays: Weekday[];
}
