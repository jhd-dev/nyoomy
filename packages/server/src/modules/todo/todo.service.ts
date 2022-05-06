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
import { TodoDto } from './dto/todo.dto';
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

    public getAllTodos(
        user: User,
        excludingArchived: boolean
    ): Promise<Todo[]> {
        const ability = this.caslAbilityFactory.createForUser(user);
        if (!ability.can(EntityAction.READ, Todo)) {
            throw new UnauthorizedException();
        }
        return this.todoRepo.find({
            where: { isArchived: excludingArchived ? false : undefined },
        });
    }

    public async getUserTodos(
        user: User,
        excludingArchived: boolean
    ): Promise<Todo[]> {
        const todos = await this.todoRepo.find({
            where: {
                user: { id: user.id },
                isArchived: excludingArchived ? false : undefined,
            },
            relations: ['user', 'taggable'],
        });
        const ability = this.caslAbilityFactory.createForUser(user);
        const accessableTodos = todos.filter((todo) =>
            ability.can(EntityAction.READ, todo)
        );
        for (const i in accessableTodos) {
            console.log(accessableTodos[i]);
            accessableTodos[i].tags = await this.tagService.getTagsByTaggable(
                accessableTodos[i].taggable.id
            );
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
        todo.tags = await this.tagService.getTagsByTaggable(todo.taggable.id);
        const ability = this.caslAbilityFactory.createForUser(user);
        if (todo == null || !ability.can(EntityAction.READ, todo)) {
            throw new Error('Unauthorized request');
        }
        return todo;
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
        return todo;
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

        await this.todoRepo.update(todo, {
            title: updateInput?.title ?? todo.title,
            description: updateInput?.description ?? todo.description,
        });
        return this.todoRepo.findOneOrFail(updateInput.id);
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
}
