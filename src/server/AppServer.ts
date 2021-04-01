//import * as path from "path";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import AppController from "./controller/AppController";
//import DevController from "./controller/DevController";
import { schema } from "./model/schema";
import { DB_USERNAME, DB_PASSWORD, DB_NAME } from "./config/env";
import { Users } from './model/entities/Users';

export default class AppServer extends Server {

    private readonly CONTROLLER_TYPES = [AppController];
    public readonly START_MSG = "Started on port: ";

    constructor() {
        super(true); // Always show logs
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use("/", express.static("dist"));
        /*if (process.env.NODE_ENV !== "production") {
            super.addControllers(new DevController());
        }*/
    }

    public async start(port: number): Promise<AppServer> {
        await this.setupDatabaseConnection()
            .catch(err => console.error(err));
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
            type: "postgres",
            database: DB_NAME,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            logging: false,
            synchronize: true,
            entities: [Users],
        });
        this.app.use("/graphql", graphqlHTTP({
            schema,
            graphiql: true,
        }));
    }
}
