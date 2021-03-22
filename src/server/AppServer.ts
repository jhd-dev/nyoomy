//import * as path from "path";
//import * as express from "express";
import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import AppController from "./controller/AppController";
//import DevController from "./controller/DevController";
import { schema } from "./model/schema";
import { DB_USERNAME, DB_PASSWORD, DB_NAME } from "./config/env";
import { Users } from './model/entities/Users';

class AppServer extends Server {

    private readonly CONTROLLER_TYPES = [AppController];
    public readonly START_MSG = "Started on port: ";

    constructor() {
        super(true); // Always show logs
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupDatabaseConnection()
            .catch(err => Logger.Err(err));
        /*if (process.env.NODE_ENV !== "production") {
            super.addControllers(new DevController());
        }*/
    }

    public start(port: number): AppServer {
        this.setupControllers();
        this.app.listen(port, () => this.logStartMsg(port));
        return this;
    }

    private logStartMsg(port: number): void {
        Logger.Imp(this.START_MSG + port);
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
            type: "postgres",
            database: DB_NAME,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            logging: true,
            synchronize: false,
            entities: [Users],
        });
        this.app.use("/graphql", graphqlHTTP({
            schema,
            graphiql: true,
        }));
    }
}

export default AppServer;
