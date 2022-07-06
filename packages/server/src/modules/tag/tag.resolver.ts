import { Injectable, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { LoggerService } from '../logger/logger.service';
import { User } from '../user/models/user.entity';
import { AddTagInput } from './dto/add-tag.input';
import { TagDto } from './dto/tag.dto';
import { UpdateTagInput } from './dto/update-tag.input';
import { TagService } from './tag.service';

@Injectable()
@Resolver(() => TagDto)
export class TagResolver {
    public constructor(
        private readonly tagService: TagService,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(TagResolver.name);
    }

    @Query(() => [TagDto], { name: 'myTags' })
    @UseGuards(AuthenticatedGuard)
    public myTags(@CurrentUser() user: User): Promise<TagDto[]> {
        return this.tagService.getByUser(user.id, false);
    }

    @Mutation(() => TagDto, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public createTag(
        @Args('input', { type: () => AddTagInput }) tagInput: AddTagInput,
        @CurrentUser() user: User
    ): Promise<TagDto | null> {
        return this.tagService.createTag(user, tagInput);
    }

    @Mutation(() => TagDto, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async updateTag(
        @Args('input') updateInput: UpdateTagInput,
        @CurrentUser() user: User
    ): Promise<TagDto | null> {
        try {
            return await this.tagService.updateTag(user, updateInput);
        } catch (err: unknown) {
            this.logger.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    @UseGuards(AuthenticatedGuard)
    public async deleteTag(
        @Args('id', { type: () => ID }) tagId: string,
        @CurrentUser() user: User
    ): Promise<boolean> {
        try {
            await this.tagService.deleteTag(user, tagId);
            return true;
        } catch (err: unknown) {
            this.logger.error(err);
            return false;
        }
    }
}
