/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Ctx,
    ID,
    UseMiddleware,
} from '@nestjs/graphql';
import { isAuthorized } from '../common/middleware/isAuthorized';
import { Tag } from '../entities';
import { TagService } from '../services/tag.service';
import { AddTagInput } from '../types/inputs/add-tag.input';
import { UpdateTagInput } from '../types/inputs/update-tag.input';
import { IContext } from '../types/interfaces/context.interface';

@Injectable()
@Resolver(() => Tag)
export class TagResolver {
    public constructor(private readonly tagService: TagService) {}

    @Query(() => [Tag])
    public myTags(@Context() { req }: IContext): Promise<Tag[]> {
        const { userId } = req.session;
        return this.tagService.getUserTags(userId!, false);
    }

    @Mutation(() => Tag, { nullable: true })
    public addTag(
        @Args('tagInput', () => AddTagInput) tagInput: AddTagInput,
        @Context() { req }: IContext
    ): Promise<Tag | null> {
        const { userId } = req.session;
        return this.tagService.addTag(userId!, tagInput);
    }

    @Mutation(() => Tag, { nullable: true })
    public async updateTag(
        @Args('updateInput') updateInput: UpdateTagInput
    ): Promise<Tag | null> {
        try {
            return await this.tagService.updateTag(updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteTag(@Args('id', () => ID) id: string): Promise<boolean> {
        try {
            await this.tagService.deleteTag(id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Mutation(() => Tag, { nullable: true })
    public async applyTag(
        @Args('tagId', () => ID) tagId: string,
        @Args('taggableId', () => ID) taggableId: string
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
