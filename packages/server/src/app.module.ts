import { ApolloDriver } from '@nestjs/apollo';
import { Module, Logger, Inject } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import RedisStore from 'connect-redis';
import expressSession from 'express-session';
import helmet from 'helmet';
import {
    session as passportSession,
    initialize as passportInitialize,
} from 'passport';
import { join } from 'path';
import { RedisClient } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplexityPlugin } from './common/plugins/complexity.plugin';
import { configuration } from './config/configuration';
import { COOKIE_NAME, REDIS_SESSION_PREFIX } from './constants';
import { AuthModule } from './modules/auth/auth.module';
import { CaslModule } from './modules/casl/casl.module';
import { ChatModule } from './modules/chat/chat.module';
import { EmailModule } from './modules/email/email.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { JournalModule } from './modules/journal/journal.module';
import { LoggerModule } from './modules/logger/logger.module';
import { LoggerService } from './modules/logger/logger.service';
import { REDIS } from './modules/redis/redis.constants';
import { RedisModule } from './modules/redis/redis.module';
import { TagModule } from './modules/tag/tag.module';
import { TodoModule } from './modules/todo/todo.module';
import { UserModule } from './modules/user/user.module';
import type { IContext } from './types/interfaces/context.interface';
import type { ApolloDriverConfig } from '@nestjs/apollo';
import type { NestModule, MiddlewareConsumer } from '@nestjs/common';
import type { Client as ConnectRedisClient } from 'connect-redis';

const STATIC_PATH = join(__dirname, '../../web/dist');
const GRAPHQL_SCHEMA_PATH = join(__dirname, '../schema.graphql');

const devContentSecurityPolicy = {
    directives: {
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', 'https://cdn.jsdelivr.net'],
    },
};

@Module({
    imports: [
        AuthModule,
        RedisModule,
        EmailModule,
        TodoModule,
        TagModule,
        JournalModule,
        ChatModule,
        FeedbackModule,
        UserModule,
        CaslModule,
        LoggerModule,
        TypeOrmModule.forRoot(),
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            imports: [LoggerModule],
            useFactory: (
                configService: ConfigService,
                logger: LoggerService
            ) => ({
                driver: ApolloDriver,
                autoSchemaFile: GRAPHQL_SCHEMA_PATH,
                sortSchema: true,
                installSubscriptionHandlers: true,
                path: '/graphql',
                playground: {
                    settings: {
                        'request.credentials': 'include',
                        'editor.reuseHeaders': false,
                    },
                },
                context: ({ req, res, user }: IContext) => ({ req, res, user }),
                cors: {
                    origin: configService.get<string>('publicUri'),
                    credentials: true,
                },
                logger: logger.withContext('GraphQLModule'),
            }),
            inject: [ConfigService, LoggerService],
            driver: ApolloDriver,
        }),
        ServeStaticModule.forRoot({
            rootPath: STATIC_PATH,
            exclude: ['/api*'],
        }),
        ConfigModule.forRoot({
            load: [configuration],
            ignoreEnvFile: true,
            ignoreEnvVars: true,
            isGlobal: true,
            cache: false,
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        LoggerService,
        Logger,
        ComplexityPlugin,
        ConfigService,
    ],
})
export class AppModule implements NestModule {
    public constructor(
        @Inject(REDIS) private readonly redis: RedisClient,
        private readonly configService: ConfigService,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(AppModule.name);
    }

    public configure(consumer: MiddlewareConsumer): void {
        this.logger.log('Configuring AppModule');
        const Store = RedisStore(expressSession);
        consumer
            .apply(
                helmet({
                    contentSecurityPolicy: this.configService.get<boolean>(
                        '__dev__'
                    )
                        ? devContentSecurityPolicy
                        : undefined,
                }),
                expressSession({
                    name: COOKIE_NAME,
                    store: new Store({
                        client: this.redis as ConnectRedisClient,
                        logErrors: true,
                        prefix: REDIS_SESSION_PREFIX,
                    }),
                    secret: this.configService.get<string>(
                        'redis.secret',
                        'secret'
                    ),
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        httpOnly: true,
                        secure: this.configService.get<boolean>(
                            '__prod__',
                            true
                        ),
                        sameSite: 'lax',
                        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
                    },
                }),
                passportInitialize(),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                passportSession()
            )
            .forRoutes('*');
    }
}
