/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable node/no-process-env */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import type { IConfiguration } from './interfaces/configuration.interface';

const NODE_ENV = process.env.NODE_ENV!;

export const configuration = (): IConfiguration => ({
    ENV: {
        NODE_ENV,
        __dev__: NODE_ENV === 'development',
        __prod__: NODE_ENV === 'production',
        __test__: NODE_ENV === 'test',
    },
    CLIENT: {
        PORT: parseInt(process.env.PORT!, 10),
        PUBLIC_URL: new URL(process.env.PUBLIC_URL!),
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
    },
    DATABASE: {
        NAME: process.env.DB_NAME!,
        USERNAME: process.env.DB_USERNAME!,
        PASSWORD: process.env.DB_PASSWORD ?? '',
    },
    REDIS: {
        PORT: parseInt(process.env.REDIS_PORT!, 10),
        SECRET: process.env.REDIS_SECRET!,
    },
    EMAIL_TRANSPORTER: {
        HOST: process.env.EMAIL_TRANSPORTER_HOST!,
        PORT: parseInt(process.env.EMAIL_TRANSPORTER_PORT!, 10),
        NAME: process.env.EMAIL_TRANSPORTER_NAME!,
        ADDRESS: process.env.EMAIL_TRANSPORTER_ADDRESS!,
        PASSWORD: process.env.EMAIL_TRANSPORTER_PASSWORD!,
    },
});
