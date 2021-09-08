/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Ctx,
    ID,
    UseMiddleware,
} from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Todo } from '../entities/Todo';
import { isAuthorized } from '../middleware/isAuthorized';
import { TodoService } from '../services/TodoService';
import { UpdateTodoInput } from '../types/inputs/UpdateTodoInput';
import { IContext } from '../types/interfaces/IContext';

@Service()
@Resolver(() => Todo)
export class TodoResolver {
    @Inject(() => TodoService)
    private readonly todoService: TodoService;

    @UseMiddleware(isAuthorized)
    @Query(() => [Todo])
    public async myTodos(
        @Ctx() { req }: IContext,
        @Arg('excludeArchived', () => Boolean, { defaultValue: false })
        excludingArchived: boolean
    ): Promise<Todo[]> {
        const userId = req?.session?.userId;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.todoService.getUserTodos(userId, excludingArchived);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Todo, { nullable: true })
    public async addTodo(@Ctx() { req }: IContext): Promise<Todo | null> {
        const userId = req?.session?.userId;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.todoService.addTodo(userId);
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Todo, { nullable: true })
    public async updateTodo(
        @Arg('updateInput') updateInput: UpdateTodoInput
    ): Promise<Todo | null> {
        try {
            return await this.todoService.updateTodo(updateInput);
        } catch (err: unknown) {
            console.error(err);
            return null;
        }
    }

    @UseMiddleware(isAuthorized)
    @Mutation(() => Boolean)
    public async deleteTodo(@Arg('id', () => ID) id: string): Promise<boolean> {
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
