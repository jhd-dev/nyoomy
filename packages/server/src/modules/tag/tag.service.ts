import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityAction from '../../types/enums/entity-action.enum';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { Tag } from './models/tag.entity';
import { Taggable } from './models/taggable.entity';
import type { User } from '../user/models/user.entity';
import type { AddTagInput } from './dto/add-tag.input';
import type { UpdateTagInput } from './dto/update-tag.input';
import { CategoryColor } from '../../types/enums/category-color.enum';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class TagService {
    public constructor(
        @InjectRepository(Tag)
        private readonly tagRepo: Repository<Tag>,
        @InjectRepository(Taggable)
        private readonly taggableRepo: Repository<Taggable>,
        private readonly caslAbilityFactory: CaslAbilityFactory,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(TagService.name);
    }

    public getUserTags(
        userId: string,
        excludingArchived: boolean
    ): Promise<Tag[]> {
        return this.tagRepo.find({
            where: {
                user: { id: userId },
                ...(excludingArchived ? { isArchived: false } : {}),
            },
            relations: ['user'],
        });
    }

    public async getTagsByTaggable(taggableId: string): Promise<Tag[]> {
        return (
            await this.taggableRepo.findOneOrFail(taggableId, {
                relations: ['tags'],
            })
        ).tags;
    }

    public getById(tagId: string): Promise<Tag> {
        return this.tagRepo.findOneOrFail(tagId);
    }

    public async createTag(
        user: User,
        { label, icon, description, color, taggedItem }: AddTagInput
    ): Promise<Tag> {
        const tag = this.tagRepo.create({
            user: { id: user.id },
            label,
            description,
            color: color ?? CategoryColor.DEFAULT,
            icon: icon ?? null,
        });
        await this.tagRepo.save(tag);

        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.CREATE, tag)) {
            throw new UnauthorizedException(
                'Unauthorized tag creation attempt'
            );
        }

        const foundTaggedItem = taggedItem
            ? await this.taggableRepo.findOne(taggedItem?.id)
            : undefined;
        if (foundTaggedItem) {
            await this.taggableRepo.save({
                ...foundTaggedItem,
                tags: foundTaggedItem.tags.concat(tag),
            });
        }
        return this.tagRepo.findOneOrFail(tag.id);
    }

    public async updateTag(
        user: User,
        updateInput: UpdateTagInput
    ): Promise<Tag> {
        const tag = await this.tagRepo.findOneOrFail(updateInput.id, {
            relations: ['user'],
        });
        tag.label = updateInput.label ?? tag.label;
        tag.description = updateInput.description ?? tag.description;
        tag.color = updateInput.color ?? tag.color;
        tag.icon = updateInput.icon !== undefined ? updateInput.icon : tag.icon;

        if (updateInput.taggables != null) {
            const taggables = await this.taggableRepo.findByIds(
                updateInput.taggables.map(({ id }) => id)
            );
            tag.taggedItems = taggables;
        }

        if (updateInput.applyTaggables?.length) {
            for (const taggable of updateInput.applyTaggables) {
                await this.applyTag(user, tag.id, taggable.id);
            }
        }

        if (updateInput.removeTaggables?.length) {
            for (const taggable of updateInput.removeTaggables) {
                await this.removeTag(user, tag.id, taggable.id);
            }
        }

        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.UPDATE, tag)) {
            await this.tagRepo.save(tag);
        }
        return tag;
    }

    public async applyTag(
        user: User,
        tagId: string,
        taggableId: string
    ): Promise<Tag | null> {
        const tag = await this.tagRepo.findOneOrFail(tagId);
        const taggable = await this.taggableRepo.findOneOrFail(taggableId);
        tag.taggedItems.push({
            id: taggable.id,
            tags: taggable.tags.concat([tag]),
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.UPDATE, tag)) {
            throw new UnauthorizedException(
                'User not authorized to delete tag'
            );
        }
        return await this.tagRepo.save(tag);
    }

    public async removeTag(
        user: User,
        tagId: string,
        taggableId: string
    ): Promise<Tag | null> {
        try {
            const tag = await this.tagRepo.findOneOrFail(tagId, {
                relations: ['user'],
            });

            tag.taggedItems = tag.taggedItems.filter(
                (taggable) => taggable.id !== taggableId
            );

            const ability = this.caslAbilityFactory.createForUser(user);
            if (ability.can(EntityAction.UPDATE, tag)) {
                return await this.tagRepo.save(tag);
            }
            return null;
        } catch (err: unknown) {
            this.logger.error(err);
            return null;
        }
    }

    public async deleteTag(user: User, id: string): Promise<void> {
        const tag = await this.tagRepo.findOneOrFail(id, {
            relations: ['user'],
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.DELETE, tag)) {
            throw new UnauthorizedException(
                `User ${user.id} not authorized to delete tag ${id}.`
            );
        }
        await this.tagRepo.remove(tag);
    }
}
