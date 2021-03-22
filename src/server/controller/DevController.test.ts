import * as supertest from "supertest";
import { SuperTest, Test } from "supertest";
import { Logger } from "@overnightjs/logger";
import TestServer from "../TestServer";
import DevController from "./DevController";
import {Dictionary} from "express-serve-static-core";
import { OK, BAD_REQUEST } from "http-status-codes";

describe("DevController", () => {

    const devController = new DevController();
    const message = DevController.DEV_MSG;
    let agent: SuperTest<Test>;

    beforeAll(done => { // setting up supertest
        const server = new TestServer();
        server.setController(devController);
        agent = supertest.agent(server.getExpressInstance());
        done();
    });

    describe(`Dev mode: "/*"`, () => {

        it(`should respond with the text "${message}"`, done => {

            ["/", "/public"].forEach(url => {
                Logger.Imp(url);
                agent.get(url)
                    .end((err, {status, body}) => {
                        if (err) {
                            Logger.Err(err, true);
                        }
                        expect(status).toBe(OK);
                        expect(body).toBeInstanceOf(Object);
                        expect(body.message).toBeDefined();
                        expect(body.message).toBe(message);
                        done();
                    });
            });

        });
    });
});
