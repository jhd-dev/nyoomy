import { static as expressStatic, urlencoded, json } from 'express';
import { Server } from '@overnightjs/core';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import AppController from './AppController';
import getSchema from '../model/getSchema';
import { DB_USERNAME, DB_PASSWORD, DB_NAME, PORT } from '../../shared/env';
import { User } from '../model/entity/User';
import { DATABASE_TYPE } from '../../shared/constants';
import { IExpressContext } from '../../shared/types';

export default class AppServer extends Server {
    private readonly CONTROLLER_TYPES = [AppController];
    public readonly START_MSG = 'Started on port: ';

    public constructor() {
        super(true); // Always show logs
        this.app.use(
            cors({
                origin: `http://localhost:${String(PORT)}`,
                credentials: true,
            })
        );
        this.app.use(cookieParser());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use('/', expressStatic('dist'));
    }

    public async start(port: number): Promise<AppServer> {
        await this.setupDatabaseConnection().catch((err) => console.error(err));
        this.setupControllers();
        let listening = false;
        while (!listening) {
            try {
                this.app.listen(port, () => this.logStartMsg(port));
            } catch (e) {
                console.error(e);
                continue;
            }
            listening = true;
        }
        return this;
    }

    private logStartMsg(port: number): void {
        console.log(this.START_MSG + String(port));
    }

    private setupControllers(): void {
        const controllers = this.CONTROLLER_TYPES.map((controllerType) => {
            return new controllerType();
        });
        super.addControllers(controllers);
    }

    private async setupDatabaseConnection(): Promise<void> {
        await createConnection({
            type: DATABASE_TYPE,
            database: DB_NAME,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            logging: false,
            synchronize: true,
            entities: [User],
        });

        const apolloServer = new ApolloServer({
            schema: await getSchema(),
            context: ({
                req,
                res,
                payload,
            }: IExpressContext): IExpressContext => ({
                req,
                res,
                payload,
            }),
        });

        apolloServer.applyMiddleware({
            app: this.app,
            cors: true,
        });
    }
}
