import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { configuration } from '../../../../../config/configuration';
import { CaslAbilityFactory } from '../../../../casl/casl-ability.factory';
import { CaslModule } from '../../../../casl/casl.module';
import { DatabaseModule } from '../../../../database/database.module';
import { LoggerModule } from '../../../../logger/logger.module';
import { LoggerService } from '../../../../logger/logger.service';
import { TaggableEntity } from '../../../../tag/models/taggable.entity';
import { TagModule } from '../../../../tag/tag.module';
import { User } from '../../../../user/models/user.entity';
import { UserModule } from '../../../../user/user.module';
import { TodoEntity } from '../../../models/todo.entity';
import { TodoService } from '../todo.service';

describe('TodoService', () => {
    let service: TodoService;
    // let todoRepoMock: Repository<TodoEntity>;
    // let taggableRepoMock: Repository<TaggableEntity>;

    jest.setTimeout(15000);

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            providers: [
                TodoService,
                {
                    provide: getRepositoryToken(TodoEntity),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(TaggableEntity),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
                CaslAbilityFactory,
                LoggerService,
            ],
            imports: [
                TagModule,
                CaslModule,
                UserModule,
                LoggerModule,
                ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
                // TypeOrmModule.forRoot({
                //     driver: 'postgres',
                //     type: 'postgres',
                //     database: ':memory:',
                //     dropSchema: true,
                //     synchronize: true,
                //     entities: [TodoEntity, TaggableEntity, User],
                // }),
                DatabaseModule,
                TypeOrmModule.forFeature([TodoEntity, TaggableEntity, User]),
            ],
        }).compile();

        service = moduleRef.get<TodoService>(TodoService);
        // todoRepoMock = moduleRef.get<Repository<TodoEntity>>(
        //     getRepositoryToken(TodoEntity)
        // );
        // taggableRepoMock = moduleRef.get<Repository<TaggableEntity>>(
        //     getRepositoryToken(TaggableEntity)
        // );
    });

    it('is defined', () => {
        expect(service).toBeDefined();
    });

    describe('getById', () => {
        it('should throw when no entity with given ID exists', async () => {
            const badId = 'badId';
            expect(service.getById({}, badId)).toThrow();
        });
    });

    describe('getByUser', () => {});

    describe('addTodo', () => {});

    describe('updateTodo', () => {});

    describe('deleteTodo', () => {});
});
