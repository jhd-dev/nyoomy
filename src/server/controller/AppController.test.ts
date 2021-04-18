/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import TestServer from './TestServer';
import AppController from './AppController';

describe('AppController', () => {
    let agent: SuperTest<Test>;

    beforeAll(() => {
        // setting up supertest
        const server = new TestServer();
        server.setController(new AppController());
        agent = supertest.agent(server.getExpressInstance());
    });

    describe('refreshToken', () => {
        it("fails if the client's cookie has no refresh token", async () => {
            await agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.UNAUTHORIZED, (_err, res) => {
                    expect(res.body?.accessToken).toBe('');
                    expect(res.body?.ok).toBe(false);
                });
        });

        it('fails if the refresh token is invalid', async () => {
            await agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.UNAUTHORIZED, (_err, res) => {
                    expect(res.body?.accessToken).toBe('');
                    expect(res.body?.ok).toBe(false);
                });
        });

        it('sends another refresh token if the refresh token is valid', async () => {
            await agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.OK, (err, res) => {
                    if (err != null) console.error(err);
                    expect(res.body.ok).toBe(true);
                    expect(res.body.accessToken).toBeTruthy();
                });
        });

        it.skip('sends another access token if the refresh token is valid');
    });
});
