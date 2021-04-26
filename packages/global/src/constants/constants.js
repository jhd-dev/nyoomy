'use strict';
exports.__esModule = true;
exports.ACCESS_TOKEN_NAME = exports.REFRESH_TOKEN_NAME = exports.DATABASE_TYPE = exports.APP_NAME = void 0;
/**
 * The official name of the application.
 *
 * @exports
 * @constant
 * @default
 */
exports.APP_NAME = 'Nyoomy';
/**
 * The type of database being used to store the model.
 *
 * @exports
 * @constant
 * @default
 */
exports.DATABASE_TYPE = 'postgres';
/**
 * The header name associated with the auth refresh tokens sent to the client.
 *
 * @exports
 * @constant
 * @default
 */
exports.REFRESH_TOKEN_NAME = 'refreshToken';
/**
 * The header name associated with the auth access tokens sent to the client.
 *
 * @exports
 * @constant
 * @default
 */
exports.ACCESS_TOKEN_NAME = 'accessToken';
