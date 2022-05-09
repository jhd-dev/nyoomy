import { Logger } from '@nestjs/common';
import { createConnection, getConnectionOptions } from 'typeorm';
// import { NODE_ENV } from '../env';
import entities from '../entities';
import type { Connection } from 'typeorm';

const connectionName = 'default'; // `${NODE_ENV}_connection`;

export const createDatabaseConnection = async (): Promise<Connection> => {
    Logger.log(
        `Using connection "${connectionName}".`,
        createDatabaseConnection.name
    );
    const options = await getConnectionOptions(connectionName);
    return createConnection({
        ...options,
        name: connectionName,
        entities,
    });
};
