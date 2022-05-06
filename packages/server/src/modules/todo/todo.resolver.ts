/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../user/models/user.entity';
import { AddTodoInput } from './dto/add-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './models/todo.entity';
import { TodoService } from './todo.service';

@Injectable()
@Resolver(() => Todo)
export class TodoResolver {
    public constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo], { name: 'getMyTodos' })
    @UseGuards(AuthenticatedGuard)
    public async getUserTodos(
        @CurrentUser() user: User,
        @Args('excludeArchived', { type: () => Boolean })
        excludingArchived: boolean = false
    ): Promise<Todo[]> {
        const userId = user.id;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.todoService.getUserTodos(user, excludingArchived);
    }

    @Query(() => [Todo], { name: 'getTodo' })
    @UseGuards(AuthenticatedGuard)
    public getUserTodo(
        @CurrentUser() user: User,
        @Args('id') todoId: string
    ): Promise<Todo> {
        return this.todoService.getUserTodo(user, todoId);
    }

    @Mutation(() => Todo, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async addTodo(
        @CurrentUser() user: User,
        @Args('input') input: AddTodoInput
    ): Promise<Todo | null> {
        const userId = user.id;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.todoService.addTodo(user, input);
    }

    @Mutation(() => Todo, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async updateTodo(
        @Args('updateInput') updateInput: UpdateTodoInput,
        @CurrentUser() user: User
    ): Promise<Todo | null> {
        try {
            return await this.todoService.updateTodo(updateInput, user);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    @UseGuards(AuthenticatedGuard)
    public async deleteTodo(
        @CurrentUser() user: User,
        @Args('id', { type: () => ID }) id: string
    ): Promise<boolean> {
        try {
            await this.todoService.deleteTodo(user, id);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
