import {
    DB_USERNAME,
    DB_PASSWORD,
    DATABASE_TYPE,
    DB_NAME,
} from '@nyoomy/global';
import type { Connection } from 'typeorm';
import { createConnection } from 'typeorm';
import { User } from '../entities/User';

export const createDatabaseConnection = (): Promise<Connection> =>
    createConnection({
        type: DATABASE_TYPE,
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: false,
        synchronize: true,
        entities: [User],
    });
