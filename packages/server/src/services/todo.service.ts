import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoEntry } from '../entities/todo-entry.entity';
import Weekday, { weekdays } from '../types/enums/weekday.enum';
import type { UpdateTodoInput } from '../types/inputs/update-todo.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>;

    @InjectRepository(TodoEntry)
    private readonly todoEntryRepo: Repository<TodoEntry>;

    public getAllTodos(excludingArchived: boolean): Promise<Todo[]> {
        return this.todoRepo.find({
            where: { isArchived: excludingArchived ? false : undefined },
        });
    }

    public getUserTodos(
        userId: string,
        excludingArchived: boolean
    ): Promise<Todo[]> {
        return this.todoRepo.find({
            where: {
                user: { id: userId },
                isArchived: excludingArchived ? false : undefined,
            },
            relations: ['user', 'user.id'],
        });
    }

    public async addTodo(userId: string): Promise<Todo> {
        const vals = { user: { id: userId } };
        const todo = this.todoRepo.create({ ...vals });
        await this.todoRepo.save(todo);
        return todo;
    }

    public async updateTodo(updateInput: UpdateTodoInput): Promise<Todo> {
        const todo = await this.todoRepo.findOneOrFail(updateInput.id);
        await this.todoRepo.update(todo, updateInput);
        return this.todoRepo.findOneOrFail(updateInput.id);
    }

    public async deleteTodo(id: string): Promise<void> {
        const todo = await this.todoRepo.findOneOrFail(id);
        await this.todoRepo.remove(todo);
    }

    public async refreshEntries(userId: string): Promise<void> {
        const todos = await this.getUserTodos(userId, true);
        const date = new Date();
        for (const todo of todos) {
            if (
                todo.repeatWeekdays
                    .map((day) => weekdays.indexOf(day))
                    .includes(date.getDay())
            ) {
            }
            const existingEntry = await this.todoEntryRepo
                .createQueryBuilder('entry')
                .innerJoinAndSelect('entry.user', 'user')
                .where('user.id = :userId', { userId })
                .andWhere('entry.date = :date', { date })
                .getOne();
            const entry =
                existingEntry ??
                (await this.todoEntryRepo.save({ date, todo }));
        }
    }
}
