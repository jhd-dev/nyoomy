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
import { Inject, Service } from 'typedi';
import { Scale } from '../entities/Scale';
import { isAuthorized } from '../middleware/isAuthorized';
import { ScaleService } from '../services/ScaleService';
import { UpdateScaleInput } from '../types/inputs/UpdateScaleInput';
import { IContext } from '../types/interfaces/IContext';
import { ScaleResponse } from '../types/responses/ScaleResponse';

@Service()
@Resolver(() => Scale)
export class ScaleResolver {
    @Inject(() => ScaleService)
    private readonly scaleService: ScaleService;

    @Query(() => [ScaleResponse])
    public getAllScales(
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
    ): Promise<ScaleResponse[]> {
        return this.scaleService.getAllScales(excludingArchived);
    }

    @UseMiddleware(isAuthorized)
    @Query(() => [ScaleResponse])
    public async getMyScales(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
    ): Promise<ScaleResponse[]> {
        const userId = req?.session?.userId;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.scaleService.getUserScales(userId, excludingArchived);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleResponse, { nullable: true })
    public async addScale(
        @Ctx() { req }: IContext
    ): Promise<ScaleResponse | null> {
        const userId = req?.session?.userId;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.scaleService.addScale(userId);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleResponse, { nullable: true })
    public async updateScale(
        @Arg('updateInput') updateInput: UpdateScaleInput
    ): Promise<ScaleResponse | null> {
        try {
            return await this.scaleService.updateScale(updateInput);
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
            await this.scaleService.deleteScale(id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
