import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import session from 'express-session';
import { join } from 'path';
import { useContainer } from 'typeorm';
import { COOKIE_NAME, REDIS_SESSION_PREFIX } from './constants';
import { __prod__, REDIS_SECRET, PORT } from './env';
import { Container } from './internal';
import { buildSchema } from './utils/buildSchema';
import { createDatabaseConnection } from './utils/createDatabaseConnection';
import redis from './utils/redis';
import type { IContext } from './types/context.interface';

const WEB_PATH = join(__dirname, '../../web/dist');
const STATIC_PATH = join(__dirname, '../../web/public');

const app = express();
void bootstrap();

function applyMiddleware(): void {
    app.use(json())
        .use(urlencoded({ extended: true }))
        .use(
            cors({
                credentials: true,
                origin: `http://localhost:${PORT}`,
            })
        );
}

async function initDatabase(): Promise<void> {
    try {
        await createDatabaseConnection();
    } catch (err: unknown) {
        console.error(err);
        throw new Error(String(err));
    }
    new ApolloServer({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        schema: await buildSchema(),
        context: (ctx: IContext): IContext => ctx,
        tracing: true,
    }).applyMiddleware({
        app,
        cors: false,
    });
}

function startServer(port: number): void {
    const server = app.listen(port, () =>
        console.info(`Server listening on port ${port}.`)
    );
}

async function bootstrap(): Promise<void> {
    applyMiddleware();
    await initDatabase();
    startServer(PORT);
}
