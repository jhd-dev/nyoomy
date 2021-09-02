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
import { SelectionMetric } from '../entities';
import { isAuthorized } from '../middleware/isAuthorized';
import { UpdateSelectionMetricInput } from '../types/inputs/UpdateSelectionMetricInput';
import { IContext } from '../types/interfaces/IContext';

@Resolver(() => SelectionMetric)
export class SelectionMetricResolver {
    @UseMiddleware(isAuthorized)
    @Query(() => [SelectionMetric])
    public getMySelectionMetrics(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<SelectionMetric[]> {
        const { user } = req.session;

        return SelectionMetric.find({
            where: {
                user,
                isArchived: excludeArchived ? false : undefined,
            },
        });
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => SelectionMetric, { nullable: true })
    public addSelectionMetric(
        @Ctx() { req }: IContext
    ): Promise<SelectionMetric | null> {
        const { user } = req.session;
        return SelectionMetric.create({ user }).save();
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => SelectionMetric, { nullable: true })
    public async updateSelectionMetric(
        @Arg('updateInput') updateInput: UpdateSelectionMetricInput
    ): Promise<SelectionMetric | null> {
        try {
            const metric = await SelectionMetric.findOneOrFail(updateInput.id);

            metric.title = updateInput.title ?? metric.title;
            metric.description = updateInput.description ?? metric.description;
            metric.isArchived = updateInput.isArchived ?? metric.isArchived;
            metric.minSelections =
                updateInput.minSelections ?? metric.minSelections;
            metric.maxSelections =
                updateInput.maxSelections ?? metric.maxSelections;

            return metric.save();
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Boolean)
    public async deleteSelectionMetric(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            const scale = await SelectionMetric.findOneOrFail(id);
            await scale.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
