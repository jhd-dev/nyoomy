import { Field, ObjectType } from 'type-graphql';
import Weekday from './Weekday';

@ObjectType()
export class TodoResponse {
    @Field()
    public readonly todoId: string;

    @Field()
    public date: Date;

    @Field()
    public title: string;

    @Field()
    public description: string;

    @Field(() => Boolean)
    public isCompleted: boolean;

    @Field(() => Boolean)
    public isArchived: boolean;

    @Field(() => [Weekday])
    public repeatWeekdays: Weekday[];
}
