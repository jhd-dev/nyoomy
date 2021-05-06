import type { User } from '../entities/User';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '@nyoomy/global';
import type { Response } from 'express';
import { sign } from 'jsonwebtoken';

const ACCESS_TOKEN_EXPIRATION = '60m';
const REFRESH_TOKEN_EXPIRATION = '7d';

export const createAccessToken = (user: User): string =>
    sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRATION,
    });

export const createRefreshToken = (user: User): string =>
    sign(
        { userId: user.id, tokenVersion: user.tokenVersion },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRATION,
        }
    );

export const sendRefreshToken = (res: Response, token: string): Response =>
    res.cookie(REFRESH_TOKEN_SECRET, token, {
        httpOnly: true,
        path: '/refresh_token',
    });
