/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Mutation, Arg, Query, Ctx, ID } from 'type-graphql';
import { Journal, JournalEntry, User } from '../entities';
import { IContext } from '../types/interfaces/IContext';
import { JournalResponse } from '../types/responses/JournalResponse';
import { UpdateJournalInput } from '../types/UpdateJournalInput';

async function getUser(userId?: string): Promise<User | null> {
    if (typeof userId !== 'string' || userId.length === 0) return null;
    return (await User.findOne({ id: userId })) ?? null;
}

@Resolver(() => Journal)
export class JournalResolver {
    @Query(() => [JournalResponse])
    public async getMyJournals(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<JournalResponse[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const journals = await Journal.find({ user });
        if (journals == null) return [];

        const date = new Date().toDateString();
        const responses: JournalResponse[] = [];

        for (const journal of journals) {
            if (excludeArchived && journal.isArchived) continue;

            let entry = await JournalEntry.findOne({ journal, date });
            if (entry === undefined) {
                const newEntry = await JournalEntry.create({
                    date,
                    journal,
                }).save();
                await journal.save();
                entry = newEntry;
            }
            responses.push({
                journalId: journal.id,
                date: entry.date,
                text: entry.text,
                title: journal.title,
                dailyWordGoal: journal.dailyWordGoal,
                isArchived: journal.isArchived,
            });
        }

        return responses;
    }

    @Mutation(() => JournalResponse, { nullable: true })
    public async addJournal(
        @Ctx() { req }: IContext
    ): Promise<JournalResponse | null> {
        const user = await getUser(req?.session?.userId);
        console.log(user?.email);
        if (user == null) return null;

        const journal = await Journal.create({ user }).save();

        const entry = await JournalEntry.create({
            journal,
            date: new Date().toDateString(),
        }).save();

        await journal.save();

        return {
            journalId: journal.id,
            date: entry.date,
            text: entry.text,
            title: journal.title,
            dailyWordGoal: journal.dailyWordGoal,
            isArchived: journal.isArchived,
        };
    }

    @Mutation(() => JournalResponse, { nullable: true })
    public async updateJournal(
        @Ctx() { req }: IContext,
        @Arg('updateInput') updateInput: UpdateJournalInput
    ): Promise<JournalResponse | null> {
        console.log('updateInput!');
        console.log(updateInput);
        try {
            const user = await getUser(req?.session?.userId);
            if (user == null) {
                throw new Error(
                    `User with id '${req?.session?.userId}' could not be found.`
                );
            }

            const journal = await Journal.findOne(updateInput.journalId);
            if (journal == null) {
                throw new Error(
                    `Journal with id '${updateInput.journalId}' could not be found.`
                );
            }

            journal.title = updateInput.title ?? journal.title;
            journal.dailyWordGoal =
                updateInput.dailyWordGoal ?? journal.dailyWordGoal;
            journal.isArchived = updateInput.isArchived ?? journal.isArchived;

            await journal.save();

            const entry = await JournalEntry.findOne({
                journal,
                date: updateInput.date,
            });
            if (entry == null) {
                throw new Error(
                    `Entry with date '${updateInput.date}' could not be found.`
                );
            }

            entry.text = updateInput.text ?? entry.text;
            await entry.save();

            return {
                journalId: journal.id,
                date: entry.date,
                text: entry.text,
                title: journal.title,
                dailyWordGoal: journal.dailyWordGoal,
                isArchived: journal.isArchived,
            };
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteJournal(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const journal = await Journal.findOneOrFail(id);
            await journal.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
