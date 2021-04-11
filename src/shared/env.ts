import dotenv from 'dotenv';
import { NodeEnv, NodeEnvString } from './types';

dotenv.config();

type EnvGetterFunc<T> = (propName: string, required?: boolean) => T | undefined;

/**
 * Returns the enum value for the current node environment based on process.env.NODE_ENV.
 *
 * @exports
 * @static
 * @returns {NodeEnv} the enum value associated with the current node environment
 * @throws {Error} when the value is not recognized as one of "development", "production", or
 * "test"
 */
export const getNodeEnv = (): NodeEnv => {
    const s = getEnvString('NODE_ENV', true) as NodeEnvString;
    switch (s) {
        case 'development':
            return NodeEnv.DEVELOPMENT;
        case 'production':
            return NodeEnv.PRODUCTION;
        case 'test':
            return NodeEnv.TEST;
        default:
            throw new Error(`Unrecognized NODE_ENV value "${s}"`);
    }
};

/**
 * Reads specified data from the process environment as a string.
 *
 * @exports
 * @static
 * @param {string} propName - the name of the property to query
 * @param {boolean?} required - whether to throw an error in the case that there is no property
 * matching propName
 * @returns {string} the value in the process environment if it exists, or undefined otherwise
 * @throws {Error} when required is true and the property is undefined
 */
export const getEnvString: EnvGetterFunc<string> = (
    propName: string,
    required: boolean = true
): string | undefined => {
    const input: string | undefined =
        propName in process.env ? process.env[propName] : undefined;
    if (input !== undefined) return input.trim();
    if (!required) return undefined;
    throw new Error(`Environmental var ${propName} is missing.`);
};

/**
 * Reads specified data from the process environment as an integer.
 *
 * @exports
 * @static
 * @param {string} propName - the name of the property to query
 * @param {boolean?} required - whether to throw an error in the case that there is no property
 * matching propName
 * @returns {number} the value in the process environment if it exists, or undefined otherwise
 * @throws {Error} when required is true and the property is undefined
 */
export const getEnvInt: EnvGetterFunc<number> = (
    prop: string,
    required: boolean = true
): number | undefined => {
    const s: string | undefined = getEnvString(prop, required);
    return s === undefined ? s : parseInt(s);
};

/**
 * Reads specified data from the process environment as a floating point value.
 *
 * @exports
 * @static
 * @param {string} propName - the name of the property to query
 * @param {boolean?} required - whether to throw an error in the case that there is no property
 * matching propName
 * @returns {number} the value in the process environment if it exists, or undefined otherwise
 * @throws {Error} when required is true and the property is undefined
 */
export const getEnvFloat: EnvGetterFunc<number> = (
    prop: string,
    required: boolean = true
): number | undefined => {
    const s: string | undefined = getEnvString(prop, required);
    return s === undefined ? s : parseFloat(s);
};

/**
 * The enum value associated with the current node environment (NODE_ENV).
 *
 * @exports
 * @constant
 */
export const NODE_ENV: NodeEnv = getNodeEnv();

/**
 * The port to attempt to host the server on.
 *
 * @exports
 * @constant
 */
export const PORT: number | undefined = getEnvInt('PORT', false);

/**
 * The name of the database used to store the model.
 *
 * @exports
 * @constant
 */
export const DB_NAME: string = getEnvString('DB_NAME', true) as string;

/**
 * The username used for the server to log into the database.
 *
 * @exports
 * @constant
 */
export const DB_USERNAME: string = getEnvString('DB_USERNAME', true) as string;

/**
 * The password used for the server to log into the database.
 *
 * @exports
 * @constant
 */
export const DB_PASSWORD: string = getEnvString('DB_PASSWORD', true) as string;

/**
 * The secret key used to generate access tokens for user authentication.
 *
 * @exports
 * @constant
 */
export const ACCESS_TOKEN_SECRET: string = getEnvString(
    'ACCESS_TOKEN_SECRET',
    true
) as string;

/**
 * The secret key used to generate refresh tokens for user authentication.
 *
 * @exports
 * @constant
 */
export const REFRESH_TOKEN_SECRET: string = getEnvString(
    'REFRESH_TOKEN_SECRET',
    true
) as string;
