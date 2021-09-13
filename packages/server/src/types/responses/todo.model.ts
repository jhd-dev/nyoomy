import { Field, ID, ObjectType } from '@nestjs/graphql';
import Weekday from '../enums/Weekday';

@ObjectType()
export class TodoResponse {
    @Field(() => ID)
    public readonly id: string;

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
