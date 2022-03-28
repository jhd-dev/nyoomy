/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { User } from '../user/models/user.entity';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './models/todo.entity';
import { TodoService } from './todo.service';

@Injectable()
@Resolver(() => Todo)
export class TodoResolver {
    public constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo])
    public async getMyTodos(
        @CurrentUser() user: User,
        @Args('excludeArchived', { type: () => Boolean })
        excludingArchived: boolean = false
    ): Promise<Todo[]> {
        const userId = user.id;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.todoService.getUserTodos(userId, excludingArchived);
    }

    @Mutation(() => Todo, { nullable: true })
    public async addTodo(@CurrentUser() user: User): Promise<Todo | null> {
        const userId = user.id;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.todoService.addTodo(userId);
    }

    @Mutation(() => Todo, { nullable: true })
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
