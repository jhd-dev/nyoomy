import 'reflect-metadata';
import AppServer from './controller/AppServer';
import { PORT } from '../shared/constants';

new AppServer().start(PORT).catch(console.log);
