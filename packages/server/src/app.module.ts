import { Module, Logger, Inject } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import RedisStore from 'connect-redis';
import expressSession from 'express-session';
import {
    session as passportSession,
    initialize as passportInitialize,
} from 'passport';
import { join } from 'path';
import { RedisClient } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { COOKIE_NAME } from './constants';
import { REDIS_SECRET, __prod__ } from './env';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule, REDIS_SYMBOL } from './modules/redis/redis.module';
import { UserModule } from './modules/user/user.module';
import type { NestModule, MiddlewareConsumer } from '@nestjs/common';
import type { Client as ConnectRedisClient } from 'connect-redis';

const STATIC_PATH = join(__dirname, '../../web/dist');
const GRAPHQL_SCHEMA_PATH = join(__dirname, 'schema.graphql');

@Module({
    imports: [
        AuthModule,
        RedisModule,
        UserModule,
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            autoSchemaFile: GRAPHQL_SCHEMA_PATH,
            sortSchema: true,
            installSubscriptionHandlers: true,
            path: '/graphql',
            playground: false,
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
    providers: [AppService, Logger],
})
export class AppModule implements NestModule {
    public constructor(
        @Inject(REDIS_SYMBOL) private readonly redis: RedisClient
    ) {}

    public configure(consumer: MiddlewareConsumer): void {
        const Store = RedisStore(expressSession);
        consumer
            .apply(
                expressSession({
                    name: COOKIE_NAME,
                    store: new Store({
                        client: this.redis as ConnectRedisClient,
                        logErrors: true,
                    }),
                    secret: REDIS_SECRET,
                    resave: false,
                    saveUninitialized: false,
                    cookie: {
                        httpOnly: true,
                        secure: __prod__,
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
