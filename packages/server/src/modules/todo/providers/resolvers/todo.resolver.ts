import { Injectable, UseGuards } from '@nestjs/common';
import {
    Resolver,
    Mutation,
    Args,
    Query,
    ID,
    ResolveField,
    Parent,
} from '@nestjs/graphql';
import { CurrentUser } from '../../../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../../../auth/guards/authenticated.guard';
import { LoggerService } from '../../../logger/logger.service';
import { TagDto } from '../../../tag/dto/tag.dto';
import { TagService } from '../../../tag/tag.service';
import { User } from '../../../user/models/user.entity';
import { AddTodoInput } from '../../dto/add-todo.input';
import { TodoInstance } from '../../dto/todo-instance.dto';
import { TodoDto } from '../../dto/todo.dto';
import { UpdateTodoInput } from '../../dto/update-todo.input';
import { TodoInstanceService } from '../services/todo-instance.service';
import { TodoService } from '../services/todo.service';

@Injectable()
@Resolver(() => TodoDto)
export class TodoResolver {
    public constructor(
        private readonly todoService: TodoService,
        private readonly todoInstanceService: TodoInstanceService,
        private readonly tagService: TagService,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(TodoResolver.name);
    }

    @ResolveField(() => [TodoInstance], { name: 'instances' })
    @UseGuards(AuthenticatedGuard)
    public getTodoInstances(@Parent() todo: TodoDto): Promise<TodoInstance[]> {
        return this.todoInstanceService.getByTodoId(todo.id);
    }

    @ResolveField(() => [TagDto], { name: 'tags' })
    @UseGuards(AuthenticatedGuard)
    public getTodoTags(@Parent() todo: TodoDto): Promise<TagDto[]> {
        return this.tagService.getByTaggableId(todo.id);
    }

    @Query(() => [TodoDto], { name: 'myTodos' })
    @UseGuards(AuthenticatedGuard)
    public async getUserTodos(
        @CurrentUser() user: User,
        @Args('excludeArchived', { type: () => Boolean, nullable: true })
        excludingArchived: boolean = false
    ): Promise<TodoDto[]> {
        excludingArchived;
        const userId = user.id;
        if (userId == null) return [];
        // eslint-disable-next-line no-return-await
        return await this.todoService.getByUser(user);
    }

    @Query(() => TodoDto, { name: 'myTodo' })
    @UseGuards(AuthenticatedGuard)
    public getUserTodo(
        @CurrentUser() user: User,
        @Args('id', { type: () => ID }) todoId: string
    ): Promise<TodoDto> {
        return this.todoService.getById(user, todoId);
    }

    @Mutation(() => TodoDto, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async addTodo(
        @CurrentUser() user: User,
        @Args('input') input: AddTodoInput
    ): Promise<TodoDto | null> {
        const userId = user.id;
        if (userId == null) return null;
        // eslint-disable-next-line no-return-await
        return await this.todoService.addTodo(user, input);
    }

    @Mutation(() => TodoDto, { nullable: true })
    @UseGuards(AuthenticatedGuard)
    public async updateTodo(
        @Args('input') updateInput: UpdateTodoInput,
        @CurrentUser() user: User
    ): Promise<TodoDto | null> {
        try {
            return await this.todoService.updateTodo(user, updateInput);
        } catch (err: unknown) {
            this.logger.error(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    @UseGuards(AuthenticatedGuard)
    public async deleteTodo(
        @CurrentUser() user: User,
        @Args('id', { type: () => ID }) todoId: string
    ): Promise<boolean> {
        try {
            await this.todoService.deleteTodo(user, todoId);
            return true;
        } catch (err: unknown) {
            this.logger.error(err);
            return false;
        }
    }
}
