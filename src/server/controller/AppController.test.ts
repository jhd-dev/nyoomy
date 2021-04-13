import * as supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import TestServer from './TestServer';
import AppController from './AppController';

describe('AppController', () => {
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        // setting up supertest
        const server = new TestServer();
        server.setController(new AppController());
        agent = supertest.agent(server.getExpressInstance());
        done();
    });

    describe('refreshToken', () => {
        it("fails if the client's cookie has no refresh token", (done) => {
            agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.UNAUTHORIZED, (_err, res) => {
                    expect(res.body?.accessToken).toBe('');
                    expect(res.body?.ok).toBe(false);
                    done();
                });
        });

        it('fails if the refresh token is invalid', (done) => {
            agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.UNAUTHORIZED, (_err, res) => {
                    expect(res.body?.accessToken).toBe('');
                    expect(res.body?.ok).toBe(false);
                    done();
                });
        });

        it('sends another refresh token if the refresh token is valid', (done) => {
            agent
                .post('/refresh_token')
                .expect('Content-Type', /json/)
                .expect(StatusCodes.OK, (err, res) => {
                    if (err) console.error(err);
                    expect(res.body.ok).toBe(true);
                    expect(res.body.accessToken).toBeTruthy();
                    done();
                });
        });

        xit('sends another access token if the refresh token is valid', (done) => {
            done();
        });
    });

    describe('getPasswordResetPage', () => {});
});
