import { PORT } from '@nyoomy/global';
import { AppServer, IAppServer } from '../AppServer';

export const bootstrap = (): void => {
    const server: IAppServer = new AppServer();
    server.start(PORT);
};
