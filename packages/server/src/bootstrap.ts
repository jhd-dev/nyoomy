import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import session from 'express-session';
import { join } from 'path';
import { COOKIE_NAME, REDIS_SESSION_PREFIX } from './constants';
import { __prod__, REDIS_SECRET, PORT } from './env';
import { createDatabaseConnection } from './utils/createDatabaseConnection';
import { createSchema } from './utils/createSchema';
import redis from './utils/redis';
import type { IContext } from './types/IContext';

const WEB_PATH = join(__dirname, '../../web/dist');
const STATIC_PATH = join(__dirname, '../../web/public');

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
                    prefix: REDIS_SESSION_PREFIX,
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
            })
        )
        .use('/', express.static(WEB_PATH))
        .use('/static', express.static(STATIC_PATH));
}

async function initDatabase(): Promise<void> {
    await createDatabaseConnection();
    new ApolloServer({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        schema: await createSchema(),
        context: (ctx: IContext): IContext => ctx,
    }).applyMiddleware({
        app,
        cors: false,
    });
}

function startServer(port: number): void {
    const server = app.listen(port, () =>
        console.info(`Server listening on port ${port}.`)
    );
    process.on('SIGTERM', () => {
        console.info('SIGTERM signal recieved; closing HTTP server.');
        server.close(() => console.info('HTTP server closed.'));
    });
}

async function bootstrap(): Promise<void> {
    applyMiddleware();
    await initDatabase();
    startServer(PORT);
}
