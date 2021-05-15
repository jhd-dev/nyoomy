import 'reflect-metadata';
import { __prod__, REDIS_SECRET, PORT } from '@nyoomy/global';
import { Server } from '@overnightjs/core';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { json, urlencoded } from 'express';
import session from 'express-session';
import { COOKIE_NAME } from './constants';
import AuthController from './controllers/AuthController';
import type { IContext } from './types/IContext';
import { createDatabaseConnection } from './utils/createDatabaseConnection';
import { createSchema } from './utils/createSchema';
import redis from './utils/redis';

export interface IAppServer {
    start(port?: number, strict?: boolean): Promise<void>;
}

export class AppServer extends Server implements IAppServer {
    private readonly CONTROLLERS: Array<typeof AuthController> = [
        AuthController,
    ];

    public constructor() {
        super(true);
        this.applyMiddleware();
        this.setupControllers();
    }

    public async start(port: number): Promise<void> {
        await this.initDatabase();
        this.app.listen(port, () =>
            console.info(`Server listening on port ${port}.`)
        );
    }

    private applyMiddleware(): void {
        const RedisStore: connectRedis.RedisStore = connectRedis(session);
        this.app
            .use(json())
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

    private async initDatabase(): Promise<void> {
        await createDatabaseConnection();
        new ApolloServer({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            schema: await createSchema(),
            context: (ctx: IContext) => ctx,
        }).applyMiddleware({
            app: this.app,
            cors: false,
        });
    }

    private setupControllers(): void {
        super.addControllers(
            this.CONTROLLERS.map((ControllerClass) => new ControllerClass())
        );
    }
}
