import type { Request, Response } from 'express';

export const enum UserRole {
    GUEST,
    USER,
    ADMIN,
}

export interface ContextPayload {
    userId: string;
}

export interface IExpressContext {
    req: Request;
    res: Response;
    payload?: ContextPayload;
}

/**
 * An enum representing the potential NODE_ENV values.
 * @enum {NodeEnvString}
 */
export const enum NodeEnv {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
    TEST = 'test',
}

export type NodeEnvString = 'production' | 'development' | 'test';

export const enum EnvVarType {
    STRING,
    NUMBER,
    INT,
    FLOAT,
    NODE_ENV,
}
