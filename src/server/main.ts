import AppServer from "./AppServer";
import { PORT } from './config/env';

new AppServer().start( PORT );
