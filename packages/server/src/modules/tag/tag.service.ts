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

    public async addTag(
        user: User,
        { label, icon }: AddTagInput
    ): Promise<Tag | null> {
        const tag = this.tagRepo.create({
            user: { id: user.id },
            label,
            taggedItems: [],
            icon: icon ?? null,
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.CREATE, tag)) {
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
        tag.icon = updateInput.icon !== undefined ? updateInput.icon : tag.icon;
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
        if (ability.can(EntityAction.UPDATE, tag)) {
            await this.tagRepo.save(tag);
        }
        return tag;
    }

    public async removeTag(
        tagId: number,
        taggableId: number
    ): Promise<Tag | null> {
        try {
            const tag = await this.tagRepo.findOneOrFail(tagId);
            tag.taggedItems = tag.taggedItems.filter(
                (taggable) => taggable.id !== taggableId
            );
            return await this.tagRepo.save(tag);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    public async deleteTag(id: number): Promise<void> {
        const tag = await this.tagRepo.findOneOrFail(id);
        await this.tagRepo.remove(tag);
    }
}
