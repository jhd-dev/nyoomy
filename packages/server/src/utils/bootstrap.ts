import { PORT } from '@nyoomy/global';
import type { IAppServer } from '../AppServer';
import { AppServer } from '../AppServer';

export const bootstrap = (): void => {
    try {
        const server: IAppServer = new AppServer();
        void server.start(PORT);
    } catch (err: unknown) {
        console.error(err);
    }
};
