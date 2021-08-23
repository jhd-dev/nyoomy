/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Resolver, Mutation, Arg, Query, Ctx } from 'type-graphql';
import { Todo, TodoEntry, User } from '../entities';
import { IContext } from '../types/IContext';
import { TodoResponse } from '../types/TodoResponse';

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
                isCompleted: todo.isCompleted,
                isArchived: todo.isArchived,
                repeatWeekdays: todo.repeatWeekdays,
            });
        }

        return responses;
    }
}
/* eslint-enable @typescript-eslint/no-unsafe-return */
