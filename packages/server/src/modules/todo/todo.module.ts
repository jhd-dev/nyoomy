import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CaslModule } from '../casl/casl.module';
import { Tag } from '../tag/models/tag.entity';
import { Taggable } from '../tag/models/taggable.entity';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';
import { UserModule } from '../user/user.module';
import { TodoEntry } from './models/todo-entry.entity';
import { Todo } from './models/todo.entity';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo, TodoEntry, Tag, Taggable]),
        UserModule,
        CaslModule,
        TagModule,
    ],
    providers: [TodoResolver, TodoService, CaslAbilityFactory, TagService],
    exports: [TodoService],
})
export class TodoModule {}
