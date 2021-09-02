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
import { Tag } from '../entities';
import { isAuthorized } from '../middleware/isAuthorized';
import { AddTagInput } from '../types/inputs/AddTagInput';
import { UpdateTagInput } from '../types/inputs/UpdateTagInput';
import { IContext } from '../types/interfaces/IContext';
import type { Repository } from 'typeorm';

@Resolver(() => Tag)
export class TagResolver {
    private readonly tagRepo: Repository<Tag> =
        getConnection().getRepository(Tag);

    @UseMiddleware(isAuthorized)
    @Query(() => [Tag])
    public getMyTags(@Ctx() { req }: IContext): Promise<Tag[]> {
        const { user } = req.session;
        return this.tagRepo.find({ user });
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Tag, { nullable: true })
    public addTag(
        @Arg('tagInput', () => AddTagInput)
        { title, taggedItem, icon }: AddTagInput,
        @Ctx() { req }: IContext
    ): Promise<Tag | null> {
        const { user } = req.session;
        const tag = this.tagRepo.create({
            user,
            title,
            taggedItems: taggedItem == null ? [] : [taggedItem],
            icon: icon ?? null,
        });
        return this.tagRepo.save(tag);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Tag, { nullable: true })
    public async updateTag(
        @Arg('updateInput') updateInput: UpdateTagInput
    ): Promise<Tag | null> {
        try {
            const tag = await this.tagRepo.findOneOrFail(updateInput.id);

            tag.title = updateInput.title ?? tag.title;
            tag.icon =
                typeof updateInput.icon !== 'undefined'
                    ? updateInput.icon
                    : tag.icon;

            return this.tagRepo.save(tag);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Boolean)
    public async deleteTag(@Arg('id', () => ID) id: string): Promise<boolean> {
        try {
            const tag = await this.tagRepo.findOneOrFail(id);
            await this.tagRepo.delete(tag);
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
            const tag = await this.tagRepo.findOneOrFail(tagId);
            tag.taggedItems.push({ id: taggableId });
            return await this.tagRepo.save(tag);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
