import type { Request, Response } from 'express';
import type Redis from 'ioredis';

export interface IContext {
    req: Request & { session: Partial<Express.SessionData> };
    res: Response;
    redis: typeof Redis;
}

export enum UserRole {
    GUEST,
    USER,
    ADMIN,
}
