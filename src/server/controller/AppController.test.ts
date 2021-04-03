import * as supertest from "supertest";
//import {} from "jasmine";
import { OK, BAD_REQUEST } from "http-status-codes";
import { SuperTest, Test } from "supertest";

import TestServer from "./TestServer";
import AppController from "./AppController";

describe("AppController", () => {

    const appController = new AppController();
    let agent: SuperTest<Test>;

    beforeAll(done => { // setting up supertest
        const server = new TestServer();
        server.setController(appController);
        agent = supertest.agent(server.getExpressInstance());
        done();
    });

});
