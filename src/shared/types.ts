import type { Request, Response } from 'express';

export enum UserRole {
    GUEST,
    USER,
    ADMIN,
}

export interface IContextPayload {
    userId?: string;
    tokenVersion?: number;
}

export class ContextPayload {
    public userId?: string;
    public tokenVersion?: number;
}

export interface IExpressContext {
    req: Request;
    res: Response;
    payload?: IContextPayload;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TNonPrimitive<T extends number | string | symbol, U = any> = Record<
    T,
    U
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TObject<T extends string | symbol, U = any> = TNonPrimitive<T, U>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dictionary<T extends string = string, U = any> = TNonPrimitive<
    T,
    U
>;

export interface IDictionary<T> {
    [key: string]: T;
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

export interface IAccessTokenResponse {
    ok: boolean;
    accessToken: string;
}

export interface IInputEvent {
    target: Pick<HTMLInputElement, 'value'>;
}
