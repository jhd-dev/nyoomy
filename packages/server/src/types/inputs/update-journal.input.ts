import { Field, ID, InputType, Int } from '@nestjs/graphql';
import type { JournalResponse } from '../responses/journal.model';

@InputType()
export class UpdateJournalInput implements Partial<JournalResponse> {
    @Field(() => ID)
    public readonly journalId: string;

    @Field()
    public readonly dateString: string;

    @Field({ nullable: true })
    public title?: string;

    @Field({ nullable: true })
    public text?: string;

    @Field({ nullable: true })
    public isArchived?: boolean;

    @Field(() => Int, { nullable: true })
    public dailyWordGoal?: number;
}
