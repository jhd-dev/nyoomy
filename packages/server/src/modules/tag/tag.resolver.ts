/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, Context, ID } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { Tag } from '../../entities';
import { UpdateTagInput } from '../../types/inputs/update-tag.input';
import { IContext } from '../../types/interfaces/context.interface';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../user/models/user.entity';
import { AddTagInput } from './dto/add-tag.input';
import { TagService } from './tag.service';

@Injectable()
@Resolver(() => Tag)
export class TagResolver {
    public constructor(private readonly tagService: TagService) {}

    @Query(() => [Tag], { name: 'myTags' })
    @UseGuards(AuthenticatedGuard)
    public myTags(@CurrentUser() user: User): Promise<Tag[]> {
        return this.tagService.getUserTags(user.id, false);
    }

    @Mutation(() => Tag, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public addTag(
        @Args('tagInput', { type: () => AddTagInput }) tagInput: AddTagInput,
        @CurrentUser() user: User
    ): Promise<Tag | null> {
        return this.tagService.addTag(user, tagInput);
    }

    @Mutation(() => Tag, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async updateTag(
        @Args('updateInput') updateInput: UpdateTagInput,
        @CurrentUser() user: User
    ): Promise<Tag | null> {
        try {
            return await this.tagService.updateTag(user, updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    @UseGuards(AuthenticatedGuard)
    public async deleteTag(
        @Args('tagId', { type: () => ID }) id: number
    ): Promise<boolean> {
        try {
            await this.tagService.deleteTag(id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Mutation(() => Tag, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async applyTag(
        @Args('tagId', { type: () => ID }) tagId: string,
        @Args('taggableId', { type: () => ID }) taggableId: string
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
