import 'reflect-metadata';
import { __prod__, REDIS_SECRET, PORT } from '@nyoomy/global';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import session from 'express-session';
import { COOKIE_NAME } from './constants';
import { createDatabaseConnection } from './utils/createDatabaseConnection';
import { createSchema } from './utils/createSchema';
import redis from './utils/redis';
import type { IContext } from './types/IContext';

const app = express();
void bootstrap();

function applyMiddleware(): void {
    const RedisStore: connectRedis.RedisStore = connectRedis(session);
    app.use(json())
        .use(urlencoded({ extended: true }))
        .use(
            cors({
                credentials: true,
                origin: `http://localhost:${PORT}`,
            })
        )
        .use(
            session({
                name: COOKIE_NAME,
                store: new RedisStore({
                    client: redis as connectRedis.Client,
                    disableTouch: true,
                }),
                secret: REDIS_SECRET,
                resave: false,
                saveUninitialized: false,
                cookie: {
                    httpOnly: true,
                    secure: __prod__,
                    sameSite: 'lax',
                    maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
                },
            })
        );
}

async function initDatabase(): Promise<void> {
    await createDatabaseConnection();
    new ApolloServer({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        schema: await createSchema(),
        context: (ctx: IContext) => ctx,
    }).applyMiddleware({
        app,
        cors: false,
    });
}

function startServer(port: number): void {
    app.listen(port, () => console.info(`Server listening on port ${port}.`));
}

async function bootstrap(): Promise<void> {
    applyMiddleware();
    await initDatabase();
    startServer(PORT);
}
