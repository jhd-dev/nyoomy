import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { TagEntity } from '../tag/models/tag.entity';
import { TaggableEntity } from '../tag/models/taggable.entity';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';
import { UserModule } from '../user/user.module';
import { TodoInstanceEntity } from './models/todo-instance.entity';
import { TodoEntity } from './models/todo.entity';
import { TodoInstanceResolver } from './providers/resolvers/todo-instance.resolver';
import { TodoResolver } from './providers/resolvers/todo.resolver';
import { TodoInstanceService } from './providers/services/todo-instance.service';
import { TodoService } from './providers/services/todo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TodoEntity,
            TodoInstanceEntity,
            TagEntity,
            TaggableEntity,
        ]),
        UserModule,
        CaslModule,
        TagModule,
        LoggerModule,
    ],
    providers: [
        TodoResolver,
        TodoInstanceResolver,
        TodoService,
        TodoInstanceService,
        CaslAbilityFactory,
        TagService,
        LoggerService,
    ],
    exports: [TodoService, TodoInstanceService],
})
export class TodoModule {}
