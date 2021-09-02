import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class JournalResponse {
    @Field(() => ID)
    public readonly journalId: string;

    @Field()
    public date: Date;

    @Field()
    public title: string;

    @Field()
    public text: string;

    @Field()
    public isArchived: boolean;

    @Field(() => Int)
    public dailyWordGoal: number;
}
