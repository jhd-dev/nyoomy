import { NODE_ENV } from '@nyoomy/global';
import { createConnection, getConnectionOptions } from 'typeorm';
import type { Connection } from 'typeorm';

const connectionName = `${NODE_ENV}_connection`;

export const createDatabaseConnection = async (): Promise<Connection> => {
    const options = await getConnectionOptions(connectionName);
    return createConnection({
        ...options,
    });
};
