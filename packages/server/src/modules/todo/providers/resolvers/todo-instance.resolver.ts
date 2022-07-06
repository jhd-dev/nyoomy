import { Injectable, UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../../../common/decorators/user.decorator';
import { AuthenticatedGuard } from '../../../auth/guards/authenticated.guard';
import { User } from '../../../user/models/user.entity';
import { TodoInstance } from '../../dto/todo-instance.dto';
import { TodoDto } from '../../dto/todo.dto';
import { TodoInstanceService } from '../services/todo-instance.service';
import { TodoService } from '../services/todo.service';

@Injectable()
@Resolver(() => TodoInstance)
export class TodoInstanceResolver {
    public constructor(
        private readonly todoInstanceService: TodoInstanceService,
        private readonly todoService: TodoService
    ) {}

    @ResolveField('todo', () => TodoDto)
    @UseGuards(AuthenticatedGuard)
    public getTodo(
        @Parent() instance: TodoInstance,
        @CurrentUser() user: User
    ): Promise<TodoDto> {
        return this.todoService.getById(user, instance.todoId);
    }
}
