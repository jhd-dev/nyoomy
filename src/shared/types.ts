import type { Request, Response } from 'express';

export enum UserRole {
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
export enum NodeEnv {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
    TEST = 'test',
}

export type NodeEnvString = 'production' | 'development' | 'test';
