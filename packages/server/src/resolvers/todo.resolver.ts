/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Ctx,
    ID,
    UseMiddleware,
} from '@nestjs/graphql';
import { isAuthorized } from '../common/middleware/isAuthorized';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { UpdateTodoInput } from '../types/inputs/update-todo.input';
import { IContext } from '../types/interfaces/context.interface';

@Injectable()
@Resolver(() => Todo)
export class TodoResolver {
    public constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo])
    public async myTodos(
        @Context() { req }: IContext,
        @Args('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
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
        @Args('id', () => ID) id: string
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
