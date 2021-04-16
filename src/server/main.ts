import 'reflect-metadata';
import AppServer from './controller/AppServer';
import { PORT, NODE_ENV } from '../shared/env';

console.assert(NODE_ENV != null);

new AppServer().start(PORT).catch(console.log);
