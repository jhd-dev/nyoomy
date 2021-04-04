import { User } from '../model/entity/User';
import { sign } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../shared/env';
import type { Response } from 'express';

const ACCESS_TOKEN_EXPIRATION = '60m';
const REFRESH_TOKEN_EXPIRATION = '7d';

export const createAccessToken = (user: User): string => {
    return sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRATION,
    });
};

export const createRefreshToken = (user: User): string => {
    return sign({ userId: user.id, tokenVersion: user.tokenVersion }, REFRESH_TOKEN_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRATION,
    });
};

export const sendRefreshToken = (res: Response, token: string) => {
    res.cookie('jid', token, {
        httpOnly: true,
        path: '/refresh_token',
    });
};
