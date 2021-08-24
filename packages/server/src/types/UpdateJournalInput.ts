import { Field, ID, InputType, Int } from 'type-graphql';
import type { JournalResponse } from './JournalResponse';

@InputType()
export class UpdateJournalInput implements Partial<JournalResponse> {
    @Field(() => ID)
    public readonly journalId: string;

    @Field()
    public readonly date: string;

    @Field({ nullable: true })
    public title?: string;

    @Field({ nullable: true })
    public text?: string;

    @Field({ nullable: true })
    public isArchived?: boolean;

    @Field(() => Int, { nullable: true })
    public dailyWordGoal?: number;
}
