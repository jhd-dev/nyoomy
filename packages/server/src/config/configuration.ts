/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable node/no-process-env */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { config } from 'dotenv';
import Joi from 'joi';
import { resolve } from 'path';
import { configValidationSchema } from './validation/configuration.validation';
import type { IConfiguration } from './interfaces/configuration.interface';
import type { DotenvConfigOutput } from 'dotenv';

const ROOT = '../../../../';
export const ENV_FILE = resolve(__dirname, ROOT, '.env.local');
export const ENV_EXAMPLE_FILE = resolve(__dirname, ROOT, '.env.example');

console.info(`Reading env file: ${ENV_FILE}`);

const env: DotenvConfigOutput = config({ path: ENV_FILE, encoding: 'utf8' });
if (env.parsed == null) {
    throw new Error('Unable to parse environmental variables.');
}

const NODE_ENV = process.env.NODE_ENV!;

export const configuration = (): IConfiguration => {
    const configObject = {
        nodeEnv: NODE_ENV,
        __dev__: NODE_ENV === 'development',
        __prod__: NODE_ENV === 'production',
        __test__: NODE_ENV === 'test',
        port: parseInt(process.env.PORT!, 10),
        publicUri: new URL(process.env.PUBLIC_URL!).host,
        database: {
            name: process.env.DB_NAME!,
            username: process.env.DB_USERNAME!,
            password: process.env.DB_PASSWORD ?? '',
        },
        redis: {
            port: parseInt(process.env.REDIS_PORT!, 10),
            secret: process.env.REDIS_SECRET!,
        },
        auth: {
            accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
        },
        emailTransporter: {
            host: process.env.EMAIL_TRANSPORTER_HOST!,
            port: parseInt(process.env.EMAIL_TRANSPORTER_PORT!, 10),
            name: process.env.EMAIL_TRANSPORTER_NAME!,
            address: process.env.EMAIL_TRANSPORTER_ADDRESS!,
            password: process.env.EMAIL_TRANSPORTER_PASSWORD!,
        },
    };
    Joi.assert(configObject, configValidationSchema, 'Invalid configuration.');
    return configObject;
};
