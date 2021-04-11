//import * as path from "path";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import cors from 'cors';
import { createConnection } from 'typeorm';
import AppController from './AppController';
import getSchema from '../model/getSchema';
import { DB_USERNAME, DB_PASSWORD, DB_NAME } from '../../shared/env';
import { User } from '../model/entity/User';
import { DATABASE_TYPE } from '../../shared/constants';
import { IExpressContext } from '../../shared/types';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';

export default class AppServer extends Server {
    private readonly CONTROLLER_TYPES = [AppController];
    public readonly START_MSG = 'Started on port: ';

    constructor() {
        super(true); // Always show logs
        this.app.use(
            cors({
                origin: 'http://localhost:4000',
                credentials: true,
            })
        );
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('/', express.static('dist'));
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
        console.log(this.START_MSG + port);
    }

    private setupControllers(): void {
        const controllers = [];
        for (const conType in this.CONTROLLER_TYPES) {
            controllers.push(new this.CONTROLLER_TYPES[conType]());
        }
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
            }: IExpressContext): IExpressContext => ({ req, res, payload }),
        });

        apolloServer.applyMiddleware({
            app: this.app,
            cors: true,
        });
    }
}
