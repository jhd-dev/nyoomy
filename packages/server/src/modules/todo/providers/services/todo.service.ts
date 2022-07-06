import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityAction from '../../../../types/enums/entity-action.enum';
import { conditionalSpread } from '../../../../utils/conditionalSpread';
import { CaslAbilityFactory } from '../../../casl/casl-ability.factory';
import { TaggableEntity } from '../../../tag/models/taggable.entity';
import { TodoDto } from '../../dto/todo.dto';
import { TodoEntity } from '../../models/todo.entity';
import type { User } from '../../../user/models/user.entity';
import type { AddTodoInput } from '../../dto/add-todo.input';
import type { UpdateTodoInput } from '../../dto/update-todo.input';

@Injectable()
export class TodoService {
    public constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepo: Repository<TodoEntity>,
        @InjectRepository(TaggableEntity)
        private readonly taggableRepo: Repository<TaggableEntity>,
        private readonly caslAbilityFactory: CaslAbilityFactory
    ) {}

    public async getById(user: User, id: string): Promise<TodoDto> {
        const entity = await this.todoRepo.findOneOrFail({
            where: { id, userId: user.id },
        });
        return this.entityToDto(entity);
    }

    public async getByUser(user: User): Promise<TodoDto[]> {
        const entities = await this.todoRepo.find({
            where: {
                userId: user.id,
            },
            relations: ['user', 'taggable', 'taggable.tags'],
        });
        return this.entitiesToDtos(entities);
    }

    public async addTodo(user: User, input: AddTodoInput): Promise<TodoDto> {
        const entity = this.todoRepo.create({
            user: { id: user.id },
            level: 0,
            ...this.transformAddInput(input),
        });
        const saved = await this.todoRepo.save(entity);
        return this.entityToDto(saved);
    }

    private entityToDto(entity: TodoEntity): TodoDto {
        const dto = new TodoDto();
        dto.id = entity.id;
        dto.description = entity.description;
        dto.doesRepeat = entity.doesRepeat;
        dto.isArchived = entity.isArchived;
        dto.title = entity.title;
        return dto;
    }

    private entitiesToDtos(entities: TodoEntity[]): TodoDto[] {
        return entities.map((entity) => this.entityToDto(entity));
    }

    private transformAddInput(
        input: AddTodoInput
    ): Parameters<TodoService['todoRepo']['create']>[0] {
        const transformed: Parameters<TodoService['todoRepo']['create']>[0] = {
            ...conditionalSpread(input, 'doesRepeat'),
            ...conditionalSpread(input, 'startDate'),
            ...conditionalSpread(input, 'endDate'),
            ...conditionalSpread(input, 'description'),
            ...conditionalSpread(input, 'isArchived'),
            ...conditionalSpread(input, 'repeatPattern'),
            ...conditionalSpread(input, 'title'),
            taggable: this.taggableRepo.create({ tags: [] }),
            children: [],
        };
        if (input.parentId != null) {
            transformed.parent = { id: input.parentId };
        }
        return transformed;
    }

    public async updateTodo(
        user: User,
        { id, ...updateInput }: UpdateTodoInput
    ): Promise<TodoDto> {
        const todo = await this.todoRepo.findOneOrFail({
            where: { id },
            relations: ['user'],
        });

        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.UPDATE, todo)) {
            throw new UnauthorizedException('incorrect user');
        }

        const updatedTodo = await this.todoRepo.findOneOrFail({
            where: { id },
        });

        updatedTodo.title = updateInput?.title ?? updatedTodo.title;
        updatedTodo.description =
            updateInput?.description ?? updatedTodo.description;

        await this.todoRepo.save(updatedTodo);
        const finalTodo = await this.todoRepo.findOneOrFail({ where: { id } });
        return this.entityToDto(finalTodo);
    }

    public async deleteTodo(user: User, id: string): Promise<void> {
        const todo = await this.todoRepo.findOneOrFail({ where: { id } });
        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.DELETE, todo)) {
            await this.todoRepo.remove(todo);
        }
    }
}
