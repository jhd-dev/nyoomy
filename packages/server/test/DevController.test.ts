/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';

import TestServer from './TestServer';
import DevController from './DevController';
import StatusCodes from 'http-status-codes';

describe('DevController', () => {
    const devController = new DevController();
    const message = DevController.DEV_MSG;
    let agent: SuperTest<Test>;

    beforeAll(() => {
        // setting up supertest
        const server = new TestServer();
        server.setController(devController);
        agent = supertest.agent(server.getExpressInstance());
    });

    describe(`Dev mode: "/*"`, () => {
        it(`should respond with the text "${message}"`, async () => {
            for (const url of ['/', '/public']) {
                console.log(url);
                await agent
                    .get(url)
                    .end(
                        (
                            err: unknown,
                            { status, body }: { status: number; body: any }
                        ) => {
                            if (err != null) {
                                console.error(err, true);
                            }
                            expect(status).toBe(StatusCodes.OK);
                            expect(body).toBeInstanceOf(Object);
                            expect(body.message).toBeDefined();
                            expect(body.message).toBe(message);
                        }
                    );
            }
        });
    });
});
