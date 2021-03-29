import * as supertest from "supertest";
//import {} from "jasmine";
import { OK, BAD_REQUEST } from "http-status-codes";
import { SuperTest, Test } from "supertest";

import TestServer from "../TestServer";
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

    describe(`API: "/api/say-hello/:name"`, () => {

        const { SUCCESS_MSG } = AppController;
        const name = "jon";
        const message = SUCCESS_MSG + name;

        it(`should return a JSON object with the message "${message}" and a status code
            of "${OK}" if message was successful`, done => {

            agent.get("/api/hello-world/" + name)
                .end((err, res) => {
                    if (err) {
                        console.error(err, true);
                    }
                    expect(res.status).toBe(OK);
                    expect(res.body.message).toBe(message);
                    done();
                });
        });

        it(`should return a JSON object with the "error" param and a status code of "${BAD_REQUEST}"
            if message was unsuccessful`, done => {

            agent.get("/api/hello-world/make_it_fail")
                .end((err, res) => {
                    if (err) {
                        console.error(err, true);
                    }
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBeTruthy();
                    done();
                });
        });
    });
});
