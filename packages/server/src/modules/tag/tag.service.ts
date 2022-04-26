import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CategoryIcon, { categoryIcons } from '../../types/enums/category-icon';
import EntityAction from '../../types/enums/entity-action.enum';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { Tag } from './models/tag.entity';
import { Taggable } from './models/taggable.entity';
import type { User } from '../user/models/user.entity';
import type { AddTagInput } from './dto/add-tag.input';
import type { UpdateTagInput } from './dto/update-tag.input';

@Injectable()
export class TagService {
    public constructor(
        @InjectRepository(Tag)
        private readonly tagRepo: Repository<Tag>,
        @InjectRepository(Taggable)
        private readonly taggableRepo: Repository<Taggable>,
        private readonly caslAbilityFactory: CaslAbilityFactory
    ) {}

    public getUserTags(
        userId: string,
        excludingArchived: boolean
    ): Promise<Tag[]> {
        return this.tagRepo.find({
            where: {
                user: { id: userId },
                isArchived: excludingArchived ? false : undefined,
            },
            relations: ['user', 'user.id'],
        });
    }

    public async createTag(
        user: User,
        { label, icon, description, color, taggedItem }: AddTagInput
    ): Promise<Tag | null> {
        const tag = this.tagRepo.create({
            user: { id: user.id },
            label,
            description,
            color,
            icon: icon ?? null,
        });

        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.CREATE, tag)) {
            const foundTaggedItem = taggedItem
                ? await this.taggableRepo.findOne(taggedItem?.id)
                : undefined;
            if (foundTaggedItem) {
                await this.taggableRepo.save({
                    ...foundTaggedItem,
                    tags: foundTaggedItem.tags.concat(tag),
                });
            }
            return this.tagRepo.save(tag);
        }
        return null;
    }

    public async updateTag(
        user: User,
        updateInput: UpdateTagInput
    ): Promise<Tag> {
        const tag = await this.tagRepo.findOneOrFail(updateInput.id);
        tag.label = updateInput.label ?? tag.label;
        tag.description = updateInput.description ?? tag.description;
        tag.color = updateInput.color ?? tag.color;
        tag.icon = updateInput.icon !== undefined ? updateInput.icon : tag.icon;

        if (updateInput.taggables != null) {
            const taggables = await this.taggableRepo.findByIds(
                updateInput.taggables.map(({ id }) => id)
            );

            // for (const taggable of taggables) {
            //     this.taggableRepo.save({
            //         ...taggable,
            //         tags: taggable.tags.concat({id: tag.id})
            //     })
            // }

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
        tagId: number,
        taggableId: number
    ): Promise<Tag | null> {
        const tag = await this.tagRepo.findOneOrFail(tagId);
        const taggable = await this.taggableRepo.findOneOrFail(taggableId);
        tag.taggedItems.push({
            id: taggable.id,
            tags: taggable.tags.concat([tag]),
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.UPDATE, tag)) {
            await this.tagRepo.save(tag);
        }
        return tag;
    }

    public async removeTag(
        user: User,
        tagId: number,
        taggableId: number
    ): Promise<Tag | null> {
        try {
            const tag = await this.tagRepo.findOneOrFail(tagId);

            tag.taggedItems = tag.taggedItems.filter(
                (taggable) => taggable.id !== taggableId
            );

            const ability = this.caslAbilityFactory.createForUser(user);
            if (ability.can(EntityAction.UPDATE, tag)) {
                return await this.tagRepo.save(tag);
            }
            return null;
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    public async deleteTag(user: User, id: number): Promise<void> {
        const tag = await this.tagRepo.findOneOrFail(id);

        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.DELETE, tag)) {
            await this.tagRepo.remove(tag);
        }
    }
}
