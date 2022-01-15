import type { Request, Response } from 'express';

export interface IContext {
    [x: string]: Express.User | undefined;
    req: Request & { session: Partial<Express.SessionData> };
    res: Response;
}

export enum UserRole {
    GUEST,
    USER,
    ADMIN,
}
