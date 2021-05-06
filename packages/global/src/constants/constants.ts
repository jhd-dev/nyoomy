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
export const COOKIE_NAME = 'refreshToken';

/**
 * The header name associated with the auth access tokens sent to the client.
 *
 * @exports
 * @constant
 * @default
 */
export const ACCESS_TOKEN_NAME = 'accessToken';
