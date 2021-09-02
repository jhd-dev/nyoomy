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
import { getConnection } from 'typeorm';
import { Scale } from '../entities';
import { isAuthorized } from '../middleware/isAuthorized';
import { UpdateScaleInput } from '../types/inputs/UpdateScaleInput';
import { IContext } from '../types/interfaces/IContext';
import { ScaleResponse } from '../types/responses/ScaleResponse';
import type { Repository } from 'typeorm';

@Resolver(() => Scale)
export class ScaleResolver {
    private readonly scaleRepo: Repository<Scale> =
        getConnection().getRepository(Scale);

    @Query(() => [ScaleResponse])
    public getAllScales(
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<ScaleResponse[]> {
        return this.scaleRepo.find({
            where: { isArchived: excludeArchived ? false : undefined },
        });
    }

    @UseMiddleware(isAuthorized)
    @Query(() => [ScaleResponse])
    public getMyScales(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<ScaleResponse[]> {
        const { user } = req.session;

        return this.scaleRepo.find({
            where: {
                user,
                isArchived: excludeArchived ? false : undefined,
            },
        });
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleResponse, { nullable: true })
    public async addScale(
        @Ctx() { req }: IContext
    ): Promise<ScaleResponse | null> {
        const { user } = req.session;
        const scale = this.scaleRepo.create({ user });
        await this.scaleRepo.save(scale);
        return scale;
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => ScaleResponse, { nullable: true })
    public async updateScale(
        @Arg('updateInput') updateInput: UpdateScaleInput
    ): Promise<ScaleResponse | null> {
        try {
            const scale = await this.scaleRepo.findOneOrFail(updateInput.id);
            await this.scaleRepo.update(scale, updateInput);
            return await this.scaleRepo.findOneOrFail(updateInput.id);
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
            const scale = await this.scaleRepo.findOneOrFail(id);
            await this.scaleRepo.remove(scale);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
