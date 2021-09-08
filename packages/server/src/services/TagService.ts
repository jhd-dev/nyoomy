import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Tag } from '../entities/Tag';
import { Taggable } from '../entities/Taggable';
import { User } from '../entities/User';
import type { AddTagInput } from '../types/inputs/AddTagInput';
import type { UpdateTagInput } from '../types/inputs/UpdateTagInput';

@Service()
export class TagService {
    @InjectRepository(Tag)
    private readonly tagRepo: Repository<Tag>;

    @InjectRepository(Taggable)
    private readonly taggableRepo: Repository<Taggable>;

    @InjectRepository(User)
    private readonly userRepo: Repository<User>;

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
        userId: string,
        { title, taggedItem, icon }: AddTagInput
    ): Promise<Tag | null> {
        const user = await this.userRepo.findOneOrFail(userId);
        const tag = this.tagRepo.create({
            user,
            title,
            taggedItems: taggedItem == null ? [] : [taggedItem],
            icon: icon ?? null,
        });
        return this.tagRepo.save(tag);
    }

    public async updateTag(updateInput: UpdateTagInput): Promise<Tag> {
        const tag = await this.tagRepo.findOneOrFail(updateInput.id);
        tag.title = updateInput.title ?? tag.title;
        tag.icon =
            typeof updateInput.icon !== 'undefined'
                ? updateInput.icon
                : tag.icon;
        await this.tagRepo.save(tag);
        return tag;
    }

    public async applyTag(
        tagId: string,
        taggableId: string
    ): Promise<Tag | null> {
        const tag = await this.tagRepo.findOneOrFail(tagId);
        const taggable = await this.taggableRepo.findOneOrFail(taggableId);
        tag.taggedItems.push({
            id: taggable.id,
            tags: taggable.tags.concat([tag]),
        });
        await this.tagRepo.save(tag);
        return tag;
    }

    public async removeTag(
        tagId: string,
        taggableId: string
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

    public async deleteTag(id: string): Promise<void> {
        const tag = await this.tagRepo.findOneOrFail(id);
        await this.tagRepo.remove(tag);
    }
}
