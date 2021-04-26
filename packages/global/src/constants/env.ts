/* eslint-ignore @typescript-eslint/no-unnecessary-type-assertions */

import { config } from 'dotenv';

config({
    path: '.env.local',
});

const DEFAULT_PORT = 4000;

/**
 * The enum value associated with the current node environment (NODE_ENV).
 *
 * @exports
 * @constant
 */
export const NODE_ENV: string = process.env.NODE_ENV as string;

/**
 * The port to attempt to host the server on.
 *
 * @exports
 * @constant
 */
export const PORT: number =
    process.env.PORT === undefined ? DEFAULT_PORT : parseInt(process.env.PORT);

/**
 * The name of the database used to store the model.
 *
 * @exports
 * @constant
 */
export const DB_NAME: string = process.env.DB_NAME as string;

/**
 * The username used for the server to log into the database.
 *
 * @exports
 * @constant
 */
export const DB_USERNAME: string = process.env.DB_USERNAME as string;

/**
 * The password used for the server to log into the database.
 *
 * @exports
 * @constant
 */
export const DB_PASSWORD: string = process.env.DB_PASSWORD as string;

/**
 * The secret key used to generate access tokens for user authentication.
 *
 * @exports
 * @constant
 */
export const ACCESS_TOKEN_SECRET: string = process.env
    .ACCESS_TOKEN_SECRET as string;

/**
 * The secret key used to generate refresh tokens for user authentication.
 *
 * @exports
 * @constant
 */
export const REFRESH_TOKEN_SECRET: string = process.env
    .REFRESH_TOKEN_SECRET as string;
