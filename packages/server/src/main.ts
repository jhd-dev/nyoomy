import 'reflect-metadata';
import AppServer from './controller/AppServer';
import { PORT, NODE_ENV } from '@nyoomy/global';

console.assert(NODE_ENV != null);

new AppServer().start(PORT).catch(console.log);
