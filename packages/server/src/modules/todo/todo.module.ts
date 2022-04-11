import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { UserModule } from '../user/user.module';
import { TodoEntry } from './models/todo-entry.entity';
import { Todo } from './models/todo.entity';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo, TodoEntry]),
        UserModule,
        CaslModule,
    ],
    providers: [TodoResolver, TodoService, CaslAbilityFactory],
    exports: [TodoService],
})
export class TodoModule {}
