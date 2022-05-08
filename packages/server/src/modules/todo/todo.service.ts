import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityAction from '../../types/enums/entity-action.enum';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { TagService } from '../tag/tag.service';
import { TodoEntry } from './models/todo-entry.entity';
import { Todo } from './models/todo.entity';
import type { User } from '../user/models/user.entity';
import type { AddTodoInput } from './dto/add-todo.input';
import type { UpdateTodoInput } from './dto/update-todo.input';
import { Taggable } from '../tag/models/taggable.entity';

@Injectable()
export class TodoService {
    public constructor(
        @InjectRepository(Todo)
        private readonly todoRepo: Repository<Todo>,
        @InjectRepository(TodoEntry)
        private readonly todoEntryRepo: Repository<TodoEntry>,
        @InjectRepository(Taggable)
        private readonly taggableRepo: Repository<Taggable>,
        private readonly caslAbilityFactory: CaslAbilityFactory,
        private readonly tagService: TagService
    ) {}

    public async getAllTodos(
        user: User,
        excludingArchived: boolean
    ): Promise<Todo[]> {
        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.READ, Todo)) {
            throw new UnauthorizedException();
        }
        const todoEntities = await this.todoRepo.find({
            where: { isArchived: excludingArchived ? false : undefined },
            relations: ['user', 'taggable', 'taggable.tags'],
        });

        const todoDtos = [];
        for (const todoEntity of todoEntities) {
            const dto = new Todo();
            dto.tags = await this.tagService.getTagsByTaggable(
                todoEntity.taggable.id
            );
            todoDtos.push(dto);
        }

        return todoDtos;
    }

    public async getUserTodos(
        user: User,
        excludingArchived: boolean
    ): Promise<Todo[]> {
        const todos = await this.todoRepo.find({
            where: {
                user: { id: user.id },
                ...(excludingArchived ? { isArchived: false } : {}),
            },
            relations: ['user', 'taggable'],
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        const accessableTodos = todos.filter((todo) =>
            ability.can(EntityAction.READ, todo)
        );
        for (const i in accessableTodos) {
            accessableTodos[i] = await this.provideTagData(accessableTodos[i]);
        }
        return accessableTodos;
    }

    public async getUserTodo(user: User, todoId: string): Promise<Todo> {
        if (!user?.id || !todoId) {
            throw new Error('Invalid user or todoId');
        }
        const todo = await this.todoRepo.findOneOrFail(todoId, {
            relations: ['user', 'taggable'],
        });
        const todoWithTags = await this.provideTagData(todo);
        const ability = this.caslAbilityFactory.createForUser(user);
        if (
            todoWithTags == null ||
            !ability.can(EntityAction.READ, todoWithTags)
        ) {
            throw new Error('Unauthorized request');
        }
        return todoWithTags;
    }

    public async addTodo(user: User, input: AddTodoInput): Promise<Todo> {
        const todo = this.todoRepo.create({
            user: { id: user.id },
            taggable: this.taggableRepo.create({ tags: [] }),
            level: 0,
            ...input,
        });

        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.CREATE, todo)) {
            throw new UnauthorizedException();
        }

        await this.todoRepo.save(todo);
        return this.provideTagData(todo);
    }

    public async updateTodo(
        updateInput: UpdateTodoInput,
        user: User
    ): Promise<Todo> {
        const todo = await this.todoRepo.findOneOrFail(updateInput.id, {
            relations: ['user'],
        });

        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.UPDATE, todo)) {
            throw new UnauthorizedException('incorrect user');
        }

        await this.updateTodoEntry(todo, updateInput);

        todo.taggable.tags = [];
        for (const tagUpdate of updateInput.tagUpdates ?? []) {
            const tag = await this.tagService.getById(tagUpdate.id);
            todo.taggable.tags.push(tag);
        }
        await this.todoRepo.save(todo);

        const updatedTodo = await this.todoRepo.findOneOrFail(updateInput.id);

        updatedTodo.title = updateInput?.title ?? updatedTodo.title;
        updatedTodo.description =
            updateInput?.description ?? updatedTodo.description;

        await this.todoRepo.save(updatedTodo);
        const finalTodo = await this.todoRepo.findOneOrFail(updateInput.id);
        return await this.provideTagData(finalTodo);
    }

    public async deleteTodo(user: User, id: string): Promise<void> {
        const todo = await this.todoRepo.findOneOrFail(id);
        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.DELETE, todo)) {
            await this.todoRepo.remove(todo);
        }
    }

    // public async refreshEntries(userId: string): Promise<void> {
    //     const todos = await this.getUserTodos(userId, true);
    //     const date = new Date();
    //     for (const todo of todos) {
    //         if (
    //             todo.repeatWeekdays
    //                 .map((day) => weekdays.indexOf(day))
    //                 .includes(date.getDay())
    //         ) {
    //         }
    //         const existingEntry = await this.todoEntryRepo
    //             .createQueryBuilder('entry')
    //             .innerJoinAndSelect('entry.user', 'user')
    //             .where('user.id = :userId', { userId })
    //             .andWhere('entry.date = :date', { date })
    //             .getOne();
    //         const entry =
    //             existingEntry ??
    //             (await this.todoEntryRepo.save({ date, todo }));
    //     }
    // }

    private async updateTodoEntry(todo: Todo, updateInput: UpdateTodoInput) {
        const entry = await this.todoEntryRepo.findOne({
            where: {
                todo: { id: todo.id },
                date: updateInput.date,
            },
        });
        const updateProps = {
            todo: { id: todo.id },
            date: updateInput.date,
            isCompleted: updateInput?.isCompleted ?? false,
        };
        if (entry == null) {
            const newEntry = this.todoEntryRepo.create(updateProps);
            return this.todoEntryRepo.save(newEntry);
        }
        await this.todoEntryRepo.update(entry, updateProps);
        return this.todoEntryRepo.findOneOrFail(entry.id);
    }

    private async provideTagData(todo: Todo): Promise<Todo> {
        const tags = await this.tagService.getTagsByTaggable(todo.taggable.id);
        todo.tags = tags;
        todo.taggable.tags = tags;
        return todo;
    }
}
