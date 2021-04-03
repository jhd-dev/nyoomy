import type { Request, Response } from 'express';

export const enum UserRole {
    GUEST,
    USER,
    ADMIN,
}

export interface IExpressContext {
    req: Request,
    res: Response,
    payload?: {
        userId: string,
    },
};
