import "reflect-metadata";
import AppServer from "./controller/AppServer";
import { PORT } from '../shared/env';

new AppServer()
    .start(PORT)
    .catch(console.log);
