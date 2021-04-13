import * as bodyParser from 'body-parser';
import { Application } from 'express';
import { Server } from '@overnightjs/core';
import { Controller } from '@overnightjs/core/lib/decorators/types';

/**
 * A Server that acts in unit tests as a stand-in for actually-used server(s).
 */
export default class TestServer extends Server {
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    /**
     * Adds a controller to the server
     * @param controller the Controller to add
     */
    public setController(controller: Controller): void {
        super.addControllers(controller);
    }

    /**
     * Returns the server's express application instance.
     * @returns the server's express application instance.
     */
    public getExpressInstance(): Application {
        return this.app;
    }
}
