import { PORT as ENV_PORT } from './env';

/**
 * The port to start the server on in case none is specified in the environment.
 * @constant
 * @default
 */
const DEFAULT_PORT: number = 4000;

/**
 * The port to attempt to run the server on.
 *
 * @exports
 * @constant
 */
export const PORT: number = ENV_PORT ?? DEFAULT_PORT;

/**
 * The official name of the application.
 *
 * @exports
 * @constant
 * @default
 */
export const APP_NAME: string = 'Nyoomy';

/**
 * The type of database being used to store the model.
 *
 * @exports
 * @constant
 * @default
 */
export const DATABASE_TYPE = 'postgres' as const;

/**
 * The header name associated with the auth refresh tokens sent to the client.
 *
 * @exports
 * @constant
 * @default
 */
export const REFRESH_TOKEN_NAME: string = 'jid';

/**
 * The header name associated with the auth access tokens sent to the client.
 *
 * @exports
 * @constant
 * @default
 */
export const ACCESS_TOKEN_NAME: string = 'accessToken';
