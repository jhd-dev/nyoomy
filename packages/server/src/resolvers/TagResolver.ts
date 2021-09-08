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
import { Tag } from '../entities';
import { isAuthorized } from '../middleware/isAuthorized';
import { TagService } from '../services/TagService';
import { AddTagInput } from '../types/inputs/AddTagInput';
import { UpdateTagInput } from '../types/inputs/UpdateTagInput';
import { IContext } from '../types/interfaces/IContext';

@Service()
@Resolver(() => Tag)
export class TagResolver {
    @Inject(() => TagService)
    private readonly tagService: TagService;

    @UseMiddleware(isAuthorized)
    @Query(() => [Tag])
    public myTags(@Ctx() { req }: IContext): Promise<Tag[]> {
        const { userId } = req.session;
        return this.tagService.getUserTags(userId!, false);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Tag, { nullable: true })
    public addTag(
        @Arg('tagInput', () => AddTagInput) tagInput: AddTagInput,
        @Ctx() { req }: IContext
    ): Promise<Tag | null> {
        const { userId } = req.session;
        return this.tagService.addTag(userId!, tagInput);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Tag, { nullable: true })
    public async updateTag(
        @Arg('updateInput') updateInput: UpdateTagInput
    ): Promise<Tag | null> {
        try {
            return await this.tagService.updateTag(updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Boolean)
    public async deleteTag(@Arg('id', () => ID) id: string): Promise<boolean> {
        try {
            await this.tagService.deleteTag(id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Tag, { nullable: true })
    public async applyTag(
        @Arg('tagId', () => ID) tagId: string,
        @Arg('taggableId', () => ID) taggableId: string
    ): Promise<Tag | null> {
        try {
            return await this.tagService.applyTag(tagId, taggableId);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
