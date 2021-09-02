/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Ctx,
    ID,
    UseMiddleware,
} from 'type-graphql';
import { ScaleEntry } from '../entities';
import { isAuthorized } from '../middleware/isAuthorized';
import { AddScaleEntryInput } from '../types/inputs/AddScaleEntryInput';
import { UpdateScaleEntryInput } from '../types/inputs/UpdateScaleEntryInput';
import { IContext } from '../types/interfaces/IContext';

@Resolver(() => ScaleEntry)
export class ScaleEntryResolver {
    @Query(() => [ScaleEntry])
    public getAllScaleEntries(
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<ScaleEntry[]> {
        return ScaleEntry.find({
            where: {
                metric: { isArchived: excludeArchived ? false : undefined },
            },
        });
    }

    @UseMiddleware(isAuthorized)
    @Query(() => [ScaleEntry])
    public getMyScaleEntries(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<ScaleEntry[]> {
        const { user } = req.session;

        return ScaleEntry.find({
            where: {
                metric: {
                    user,
                    isArchived: excludeArchived ? false : undefined,
                },
            },
        });
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleEntry, { nullable: true })
    public addScaleEntry(
        @Arg('entryInput', () => AddScaleEntryInput)
        { metricId, chosenValue }: AddScaleEntryInput
    ): Promise<ScaleEntry | null> {
        return ScaleEntry.create({
            metric: { id: metricId },
            datetime: new Date(),
            chosenValue,
        }).save();
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleEntry, { nullable: true })
    public async updateScale(
        @Arg('updateInput') updateInput: UpdateScaleEntryInput
    ): Promise<ScaleEntry | null> {
        try {
            const entry = await ScaleEntry.findOneOrFail(updateInput.id);

            entry.datetime = updateInput.datetime ?? entry.datetime;
            entry.chosenValue = updateInput.chosenValue ?? entry.chosenValue;

            return entry.save();
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Boolean)
    public async deleteScale(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const entry = await ScaleEntry.findOneOrFail(id);
            await entry.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
