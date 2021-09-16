const path = require('path');

const ENTITY_PATH = path.join(__dirname, 'packages/server/src/**/*.entity.ts');
const MIGRATION_PATH = path.join(
    __dirname,
    'packages/server/src/migration/**/*.ts'
);
const SUBSCRIBER_PATH = path.join(
    __dirname,
    'packages/server/src/**/*.subscriber.ts'
);

module.exports = [
    {
        name: 'production_connection',
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nyoomy_db_prod',
        synchronize: true,
        logging: true,
        logNotifications: true,
        dropSchema: true,
        entities: [ENTITY_PATH],
        migrations: [MIGRATION_PATH],
        subscribers: [SUBSCRIBER_PATH],
    },
    {
        name: 'development_connection',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nyoomy_db_dev',
        synchronize: true,
        logging: true,
        logNotifications: true,
        dropSchema: true,
        entities: [ENTITY_PATH],
        migrations: [MIGRATION_PATH],
        subscribers: [SUBSCRIBER_PATH],
    },
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nyoomy_db_dev',
        synchronize: true,
        logging: true,
        logNotifications: true,
        dropSchema: true,
        entities: [ENTITY_PATH],
        migrations: [MIGRATION_PATH],
        subscribers: [SUBSCRIBER_PATH],
    },
    {
        name: 'test_connection',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nyoomy_db_test',
        synchronize: true,
        logging: true,
        logNotifications: true,
        entities: [ENTITY_PATH],
        migrations: [MIGRATION_PATH],
        subscribers: [SUBSCRIBER_PATH],
    },
];
