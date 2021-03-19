//import * as supertest from "supertest";
require("jasmine");
//import { OK, BAD_REQUEST } from "http-status-codes";
//import { SuperTest, Test } from "supertest";
import { Logger } from "@overnightjs/logger";
import { Server } from "@overnightjs/core";

//import TestServer from "./TestServer";
import AppServer from "./AppServer";
//import {async} from "q";

describe("AppServer", () => {

    let port = 1235;
    let appServer: AppServer;

    describe("start", () => {

        beforeEach(done => {
            spyOn(Server.prototype, "addControllers");
            spyOn(Logger, "Imp");
            appServer = new AppServer();
            done();
        });

        afterEach(done => {
            port ++;
            done();
        });

        it("should return a Promise containing itself", async () => {
            const server: AppServer = appServer.start(port);
            expect(appServer).toBe(server);
        });

        it("should register all of its controllers", async () => {
            appServer.start(port);
            expect(appServer.addControllers).toHaveBeenCalled();
        });

        xit("should notify the user that the server is running and on which port", async () => {
            appServer.start(port);
            expect(Logger.Imp).toHaveBeenCalled();
            expect(Logger.Imp).toHaveBeenCalledWith(appServer.START_MSG + port);
        });

    });

});
