//import * as supertest from "supertest";
//import { OK, BAD_REQUEST } from "http-status-codes";
//import { SuperTest, Test } from "supertest";
import { Server } from '@overnightjs/core';
import AppServer from './AppServer';

describe('AppServer', () => {
    let port = 1235;
    let appServer: AppServer;

    describe('start', () => {
        beforeEach(() => {
            jest.spyOn(Server.prototype, 'addControllers');
            jest.spyOn(console, 'info');
            appServer = new AppServer();
            port++;
        });

        afterEach(() => {
            port++;
        });

        it('should return a Promise containing itself', async () => {
            const server: AppServer = await appServer.start(port);
            expect(appServer).toBe(server);
        });

        it.skip('should notify the user that the server is running and on which port', async () => {
            await appServer.start(port);
            expect(console.info).toHaveBeenCalled();
            expect(console.info).toHaveBeenCalledWith(
                appServer.START_MSG + String(port)
            );
        });
    });
});
