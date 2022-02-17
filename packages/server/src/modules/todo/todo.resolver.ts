/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, Context, ID } from '@nestjs/graphql';
import { Todo } from '../../entities/todo.entity';
import { UpdateTodoInput } from '../../types/inputs/update-todo.input';
import { IContext } from '../../types/interfaces/context.interface';
import { TodoService } from './todo.service';

@Injectable()
@Resolver(() => Todo)
export class TodoResolver {
    public constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo])
    public async getMyTodos(
        @Context() { req }: IContext,
        @Args('excludeArchived', { type: () => Boolean })
        excludingArchived: boolean = false
    ): Promise<Todo[]> {
        const userId = req?.session?.userId;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.todoService.getUserTodos(userId, excludingArchived);
    }

    @Mutation(() => Todo, { nullable: true })
    public async addTodo(@Context() { req }: IContext): Promise<Todo | null> {
        const userId = req?.session?.userId;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.todoService.addTodo(userId);
    }

    @Mutation(() => Todo, { nullable: true })
    public async updateTodo(
        @Args('updateInput') updateInput: UpdateTodoInput
    ): Promise<Todo | null> {
        try {
            return await this.todoService.updateTodo(updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async deleteTodo(
        @Args('id', { type: () => ID }) id: string
    ): Promise<boolean> {
        try {
            await this.todoService.deleteTodo(id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
