import * as bodyParser from "body-parser";
import { Application } from "express";
import { Server } from "@overnightjs/core";
import { Controller } from "@overnightjs/core/lib/decorators/types";

class TestServer extends Server {

    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public setController(controller: Controller): void {
        super.addControllers(controller);
    }

    public getExpressInstance(): Application {
        return this.app;
    }
}

export default TestServer;
