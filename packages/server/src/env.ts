/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable node/no-process-env */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { config } from 'dotenv';
import { resolve } from 'path';
import type { DotenvConfigOutput } from 'dotenv';

const ROOT: string = '../../../';
export const ENV_FILENAME: string = '.env.local';
export const ENV_EXAMPLE_FILENAME: string = '.env.example';

console.info(`Reading env file: ${resolve(__dirname, ROOT, ENV_FILENAME)}`);

const env: DotenvConfigOutput = config({
    path: resolve(__dirname, ROOT, ENV_FILENAME),
    // example: resolve(__dirname, ROOT, ENV_EXAMPLE_FILENAME),
    // allowEmptyValues: true,
    encoding: 'utf8',
});

if (env.parsed == null) {
    throw new Error('Unable to parse environmental variables.');
}

/**
 * The current node environment ('development', 'production', or 'test').
 *
 * @exports
 */
export const NODE_ENV: string = process.env.NODE_ENV!;
export const __dev__: boolean = NODE_ENV === 'development';
export const __prod__: boolean = NODE_ENV === 'production';
export const __test__: boolean = NODE_ENV === 'test';

/**
 * The port to attempt to host the server on.
 *
 * @exports
 */
export const PORT: number = parseInt(process.env.PORT!, 10);
export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT!, 10);
export const PUBLIC_URL: URL = new URL(process.env.PUBLIC_URL!);
/**
 * The name of the database used to store the model.
 *
 * @exports
 */
export const DB_NAME: string = process.env.DB_NAME!;
/**
 * The username used for the server to log into the database.
 *
 * @exports
 */
export const DB_USERNAME: string = process.env.DB_USERNAME!;
/**
 * The password used for the server to log into the database.
 *
 * @exports
 * @default ""
 */
export const DB_PASSWORD: string = process.env.DB_PASSWORD ?? '';
export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET!;
export const REDIS_SECRET: string = process.env.REDIS_SECRET!;
export const EMAIL_TRANSPORTER_HOST: string =
    process.env.EMAIL_TRANSPORTER_HOST!;
export const EMAIL_TRANSPORTER_PORT: number = parseInt(
    process.env.EMAIL_TRANSPORTER_PORT!,
    10
);
export const EMAIL_TRANSPORTER_NAME: string =
    process.env.EMAIL_TRANSPORTER_NAME!;
export const EMAIL_TRANSPORTER_ADDRESS: string =
    process.env.EMAIL_TRANSPORTER_ADDRESS!;
export const EMAIL_TRANSPORTER_PASSWORD: string =
    process.env.EMAIL_TRANSPORTER_PASSWORD!;
