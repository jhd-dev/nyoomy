'use strict';
/* eslint-ignore @typescript-eslint/no-unnecessary-type-assertions */
exports.__esModule = true;
exports.REFRESH_TOKEN_SECRET = exports.ACCESS_TOKEN_SECRET = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_NAME = exports.PORT = exports.NODE_ENV = void 0;
var dotenv_1 = require('dotenv');
dotenv_1.config({
    path: '.env.local',
});
var DEFAULT_PORT = 4000;
/**
 * The enum value associated with the current node environment (NODE_ENV).
 *
 * @exports
 * @constant
 */
exports.NODE_ENV = process.env.NODE_ENV;
/**
 * The port to attempt to host the server on.
 *
 * @exports
 * @constant
 */
exports.PORT =
    process.env.PORT === undefined ? DEFAULT_PORT : parseInt(process.env.PORT);
/**
 * The name of the database used to store the model.
 *
 * @exports
 * @constant
 */
exports.DB_NAME = process.env.DB_NAME;
/**
 * The username used for the server to log into the database.
 *
 * @exports
 * @constant
 */
exports.DB_USERNAME = process.env.DB_USERNAME;
/**
 * The password used for the server to log into the database.
 *
 * @exports
 * @constant
 */
exports.DB_PASSWORD = process.env.DB_PASSWORD;
/**
 * The secret key used to generate access tokens for user authentication.
 *
 * @exports
 * @constant
 */
exports.ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
/**
 * The secret key used to generate refresh tokens for user authentication.
 *
 * @exports
 * @constant
 */
exports.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
