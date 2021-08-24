/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, FieldResolver, Root } from 'type-graphql';
import { JournalEntry } from '../entities';
import type { ResolverInterface } from 'type-graphql';

@Resolver(() => JournalEntry)
export class JournalEntryResolver implements ResolverInterface<JournalEntry> {
    @FieldResolver()
    public didMeetGoal(@Root() attempt: JournalEntry): boolean {
        const goal = attempt.journal.dailyWordGoal;
        const wordsWritten = attempt.text.split(' ').length;
        return wordsWritten >= goal;
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
