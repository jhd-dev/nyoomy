//import * as path from "path";
//import * as express from "express";
import * as bodyParser from "body-parser";
import { Server } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import AppController from "./controller/AppController";
import DevController from "./controller/DevController";

class AppServer extends Server {

    private readonly CONTROLLER_TYPES = [AppController];
    private readonly START_MSG = "Started on port: ";

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        if (process.env.NODE_ENV !== "production") {
            super.addControllers(new DevController());
        }
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
}

export default AppServer;
