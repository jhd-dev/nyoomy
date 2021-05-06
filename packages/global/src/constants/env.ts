/* eslint-disable prefer-destructuring */
/* eslint-disable node/no-process-env */
/* eslint-disable no-underscore-dangle */

import { config } from 'dotenv-safe';
import { resolve } from 'path';

const ROOT = '../../../..';

const env = config({
    path: resolve(__dirname, ROOT, '.env.local'),
    example: resolve(__dirname, ROOT, '.env.example'),
    allowEmptyValues: false,
    encoding: 'utf8',
});

if (env.parsed == null) {
    throw new Error('Unable to parse environmental variables.');
}

/**
 * The enum value associated with the current node environment (NODE_ENV).
 *
 * @exports
 */
export const NODE_ENV: string = env.parsed.NODE_ENV;

export const __dev__: boolean = NODE_ENV === 'development';
export const __prod__: boolean = NODE_ENV === 'production';
export const __test__: boolean = NODE_ENV === 'test';

/**
 * The port to attempt to host the server on.
 *
 * @exports
 */
export const PORT: number = parseInt(env.parsed.PORT, 10);
export const DOMAIN: string = env.parsed.DOMAIN;
/**
 * The name of the database used to store the model.
 *
 * @exports
 */
export const DB_NAME: string = env.parsed.DB_NAME;
/**
 * The username used for the server to log into the database.
 *
 * @exports
 */
export const DB_USERNAME: string = env.parsed.DB_USERNAME;
/**
 * The password used for the server to log into the database.
 *
 * @exports
 */
export const DB_PASSWORD: string = env.parsed.DB_PASSWORD;
export const ACCESS_TOKEN_SECRET: string = env.parsed.ACCESS_TOKEN_SECRET;
export const REDIS_SECRET: string = env.parsed.REDIS_SECRET;
export const EMAIL_TRANSPORTER_HOST: string = env.parsed.EMAIL_TRANSPORTER_HOST;
export const EMAIL_TRANSPORTER_PORT: number = parseInt(
    env.parsed.EMAIL_TRANSPORTER_PORT,
    10
);
export const EMAIL_TRANSPORTER_NAME: string = env.parsed.EMAIL_TRANSPORTER_NAME;
export const EMAIL_TRANSPORTER_ADDRESS: string =
    env.parsed.EMAIL_TRANSPORTER_ADDRESS;
export const EMAIL_TRANSPORTER_PASSWORD: string =
    env.parsed.EMAIL_TRANSPORTER_PASSWORD;
