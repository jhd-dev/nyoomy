import { createConnection, Connection } from 'typeorm';
import {
    DB_USERNAME,
    DB_PASSWORD,
    DATABASE_TYPE,
    DB_NAME,
} from '@nyoomy/global';
import { User } from '../entity/User';

export const createDatabaseConnection = (): Promise<Connection> => {
    return createConnection({
        type: DATABASE_TYPE,
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        logging: false,
        synchronize: true,
        entities: [User],
    });
};
