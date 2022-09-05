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

export type NodeEnvString = 'production' | 'development' | 'test';

export interface IAccessTokenResponse {
    ok: boolean;
    accessToken: string;
}

export interface IInputEvent {
    target: Pick<HTMLInputElement, 'value'>;
}

export type EmailAddress = `${string}@${string}`;

export enum UserRole {
    GUEST,
    USER,
    ADMIN,
}

export interface IInputEvent {
    target: Pick<HTMLInputElement, 'value'>;
}
