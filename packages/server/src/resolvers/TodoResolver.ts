/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Mutation, Arg, Query, Ctx, ID } from 'type-graphql';
import { Todo, TodoEntry, User } from '../entities';
import { IContext } from '../types/IContext';
import { TodoResponse } from '../types/TodoResponse';
import { UpdateTodoInput } from '../types/UpdateTodoInput';

async function getUser(userId?: string): Promise<User | null> {
    if (typeof userId !== 'string' || userId.length === 0) return null;
    return (await User.findOne({ id: userId })) ?? null;
}

@Resolver()
export class TodoResolver {
    @Query(() => [TodoResponse])
    public async getMyTodos(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludeArchived: boolean
    ): Promise<TodoResponse[]> {
        const user = await getUser(req?.session?.userId);
        if (user == null) return [];

        const todos = await Todo.find({ user });
        if (todos == null) return [];

        const date = new Date().toDateString();
        const responses: TodoResponse[] = [];

        for (const todo of todos) {
            if (excludeArchived && todo.isArchived) continue;

            let existingEntry = await TodoEntry.findOne({ todo, date });
            if (existingEntry === undefined) {
                const newEntry = await TodoEntry.create({ date, todo }).save();
                await todo.save();
                existingEntry = newEntry;
            }
            responses.push({
                todoId: todo.id,
                date: existingEntry.date,
                title: todo.title,
                description: todo.description,
                isCompleted: existingEntry.isCompleted,
                isArchived: todo.isArchived,
                repeatWeekdays: todo.repeatWeekdays,
            });
        }

        return responses;
    }

    @Mutation(() => TodoResponse, { nullable: true })
    public async addTodo(
        @Ctx() { req }: IContext
    ): Promise<TodoResponse | null> {
        const user = await getUser(req?.session?.userId);
        console.log(user?.email);
        if (user == null) return null;

        const todo = await Todo.create({ user }).save();

        const entry = await TodoEntry.create({
            todo,
            date: new Date().toDateString(),
        }).save();

        await todo.save();

        return {
            todoId: todo.id,
            date: entry.date,
            isCompleted: entry.isCompleted,
            title: todo.title,
            description: todo.description,
            repeatWeekdays: todo.repeatWeekdays,
            isArchived: todo.isArchived,
        };
    }

    @Mutation(() => TodoResponse, { nullable: true })
    public async updateTodo(
        @Ctx() { req }: IContext,
        @Arg('updateInput') updateInput: UpdateTodoInput
    ): Promise<TodoResponse | null> {
        console.log('updateInput!');
        console.log(updateInput);
        try {
            const user = await getUser(req?.session?.userId);
            if (user == null) {
                throw new Error(
                    `User with id '${req?.session?.userId}' could not be found.`
                );
            }

            const todo = await Todo.findOne(updateInput.todoId);
            if (todo == null) {
                throw new Error(
                    `Todo with id '${updateInput.todoId}' could not be found.`
                );
            }

            todo.title = updateInput.title ?? todo.title;
            todo.description = updateInput.description ?? todo.description;
            todo.isArchived = updateInput.isArchived ?? todo.isArchived;
            todo.repeatWeekdays =
                updateInput.repeatWeekdays ?? todo.repeatWeekdays;

            await todo.save();

            const entry = await TodoEntry.findOne({
                todo,
                date: updateInput.date,
            });
            if (entry == null) {
                throw new Error(
                    `Entry with date '${updateInput.date}' could not be found.`
                );
            }

            entry.isCompleted = updateInput.isCompleted ?? entry.isCompleted;
            console.log(`entry.isCompleted: ${entry.isCompleted}`);

            await entry.save();

            return {
                todoId: todo.id,
                date: entry.date,
                isCompleted: entry.isCompleted,
                title: todo.title,
                description: todo.description,
                isArchived: todo.isArchived,
                repeatWeekdays: todo.repeatWeekdays,
            };
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteTodo(@Arg('id', () => ID) id: string): Promise<boolean> {
        try {
            const todo = await Todo.findOneOrFail(id);
            await todo.remove();
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
