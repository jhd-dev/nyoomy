/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Query, ID, Args, Context } from '@nestjs/graphql';
import { isAuthorized } from '../../common/middleware/isAuthorized';
import { Scale } from '../../entities/scale.entity';
import { UpdateScaleInput } from '../../types/inputs/update-scale.input';
import { IContext } from '../../types/interfaces/context.interface';
import { ScaleResponse } from '../../types/responses/scale.model';
import { ScaleService } from './scale.service';

@Injectable()
@Resolver(() => Scale)
export class ScaleResolver {
    public constructor(private readonly scaleService: ScaleService) {}

    @Query(() => [ScaleResponse])
    public getAllScales(
        @Args('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
    ): Promise<ScaleResponse[]> {
        return this.scaleService.getAllScales(excludingArchived);
    }

    @Query(() => [ScaleResponse])
    public async getMyScales(
        @Context() { req }: IContext,
        @Args('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
    ): Promise<ScaleResponse[]> {
        const userId = req?.session?.userId;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.scaleService.getUserScales(userId, excludingArchived);
    }

    @Mutation(() => ScaleResponse, { nullable: true })
    public async addScale(
        @Context() { req }: IContext
    ): Promise<ScaleResponse | null> {
        const userId = req?.session?.userId;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.scaleService.addScale(userId);
    }

    @Mutation(() => ScaleResponse, { nullable: true })
    public async updateScale(
        @Args('updateInput') updateInput: UpdateScaleInput
    ): Promise<ScaleResponse | null> {
        try {
            return await this.scaleService.updateScale(updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteScale(
        @Args('id', () => ID) id: string
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
