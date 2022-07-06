import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityAction from '../../types/enums/entity-action.enum';
import { conditionalSpread } from '../../utils/conditionalSpread';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { LoggerService } from '../logger/logger.service';
import { TagDto } from './dto/tag.dto';
import { TagEntity } from './models/tag.entity';
import { TaggableEntity } from './models/taggable.entity';
import type { User } from '../user/models/user.entity';
import type { AddTagInput } from './dto/add-tag.input';
import type { UpdateTagInput } from './dto/update-tag.input';

@Injectable()
export class TagService {
    public constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepo: Repository<TagEntity>,
        @InjectRepository(TaggableEntity)
        private readonly taggableRepo: Repository<TaggableEntity>,
        private readonly caslAbilityFactory: CaslAbilityFactory,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(TagService.name);
    }

    public async getByUser(
        userId: string,
        excludingArchived: boolean
    ): Promise<TagDto[]> {
        const entities = await this.tagRepo.find({
            where: {
                user: { id: userId },
                ...(excludingArchived ? { isArchived: false } : {}),
            },
            relations: ['user'],
        });
        return this.entitiesToDtos(entities);
    }

    public async getByTaggableId(taggableId: string): Promise<TagDto[]> {
        const { tags } = await this.taggableRepo.findOneOrFail({
            where: { id: taggableId },
            relations: ['tags'],
        });
        return this.entitiesToDtos(tags);
    }

    public getById(tagId: string): Promise<TagDto> {
        return this.tagRepo.findOneByOrFail({ id: tagId });
    }

    public async createTag(user: User, input: AddTagInput): Promise<TagDto> {
        const entity = this.tagRepo.create({
            user: { id: user.id },
            ...this.transformAddInput(input),
        });
        const saved = await this.tagRepo.save(entity);
        return this.entityToDto(saved);
    }

    public async updateTag(user: User, input: UpdateTagInput): Promise<TagDto> {
        user;
        const entity: TagEntity = await this.tagRepo.findOneByOrFail({
            id: input.id,
        });

        entity.color = input.color ?? entity.color;
        entity.description = input.description ?? entity.description;
        entity.icon = input.icon ?? entity.icon;
        entity.isArchived = input.isArchived ?? entity.isArchived;
        entity.label = input.label ?? entity.label;

        await this.tagRepo.save(entity);
        const updated: TagEntity = await this.tagRepo.findOneByOrFail({
            id: input.id,
        });
        return this.entityToDto(updated);
    }

    public async deleteTag(user: User, id: string): Promise<void> {
        const tag = await this.tagRepo.findOneOrFail({
            where: { id },
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

    private entityToDto(entity: TagEntity): TagDto {
        const dto = new TagDto();
        dto.id = entity.id;
        dto.color = entity.color;
        dto.description = entity.description;
        dto.icon = entity.icon;
        dto.isArchived = entity.isArchived;
        dto.label = entity.label;
        return dto;
    }

    private entitiesToDtos(entities: TagEntity[]): TagDto[] {
        return entities.map((entity) => this.entityToDto(entity));
    }

    private transformAddInput(input: AddTagInput) {
        return {
            ...conditionalSpread(input, 'color'),
            ...conditionalSpread(input, 'description'),
            ...conditionalSpread(input, 'icon'),
            ...conditionalSpread(input, 'label'),
        };
    }

    private transformUpdateInput(input: UpdateTagInput) {
        return {
            ...conditionalSpread(input, 'color'),
            ...conditionalSpread(input, 'description'),
            ...conditionalSpread(input, 'icon'),
            ...conditionalSpread(input, 'label'),
        };
    }
}
