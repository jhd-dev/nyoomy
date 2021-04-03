import { User } from '../model/entity/User';
import { sign } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../shared/env';

export const createAccessToken = (user: User): string => {
    return sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: "60m",
    });
};

export const createRefreshToken = (user: User): string => {
    return sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};
