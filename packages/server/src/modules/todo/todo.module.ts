import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../entities';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo]), UserModule],
    providers: [TodoResolver, TodoService, UserService],
    exports: [TodoService],
})
export class TodoModule {}
