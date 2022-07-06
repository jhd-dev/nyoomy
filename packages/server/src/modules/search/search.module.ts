import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { TagEntity } from '../tag/models/tag.entity';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';
import { TodoEntity } from '../todo/models/todo.entity';
import { TodoModule } from '../todo/todo.module';
import { TodoService } from '../todo/providers/services/todo.service';
import { User } from '../user/models/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { SearchResolver } from './search.resolver';
import { SearchService } from './search.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoEntity, TagEntity, User]),
        TodoModule,
        TagModule,
        UserModule,
        AuthModule,
    ],
    providers: [
        SearchResolver,
        SearchService,
        TodoService,
        TagService,
        UserService,
        AuthService,
    ],
    exports: [SearchService],
})
export class SearchModule {}
