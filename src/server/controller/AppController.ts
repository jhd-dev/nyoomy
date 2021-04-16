import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import StatusCodes from 'http-status-codes';
import { User } from '../model/entity/User';
import {
    createAccessToken,
    sendRefreshToken,
    createRefreshToken,
} from '../utils/auth';
import { REFRESH_TOKEN_NAME } from '../../shared/constants';
import { REFRESH_TOKEN_SECRET } from '../../shared/env';
import type IRequestCookies from '../../shared/types/IRequestCookies';
import RequestCookies from '../../shared/types/RequestCookies';
import { ContextPayload, IContextPayload } from '../../shared/types';
import TypeResolver from '../../shared/utils/TypeResolver';

@Controller('')
class AppController {
    @Post('refresh_token')
    private async refreshToken(req: Request, res: Response): Promise<Response> {
        console.log('REFRESH_TOKEN');

        const [
            cookies,
            errors,
        ] = await TypeResolver.resolveToClass<IRequestCookies>(
            RequestCookies,
            req.cookies
        );

        if (errors.length > 0) console.error(errors);
        if (cookies == null) return this.failAuth(res);

        const token: string = cookies[REFRESH_TOKEN_NAME];

        if (token == null) return this.failAuth(res);

        try {
            const payload: IContextPayload | string = verify(
                token,
                REFRESH_TOKEN_SECRET
            );
            if (typeof payload === 'string')
                throw new Error('Payload should not be a string.');
            const user = await User.findOne({ id: payload.userId });
            if (
                user === undefined ||
                user.tokenVersion !== payload.tokenVersion
            )
                return this.failAuth(res);

            sendRefreshToken(res, createRefreshToken(user));
            return res
                .status(StatusCodes.OK)
                .json({ ok: true, accessToken: createAccessToken(user) });
        } catch (err) {
            console.log(err);
            return this.failAuth(res);
        }
    }

    @Post('reset_password/:userId/:token')
    private async getPasswordResetPage(
        req: Request,
        res: Response
    ): Promise<Response> {
        const { userId, token } = req.params;
        const [
            payload,
            errors,
        ] = await TypeResolver.resolveToClass<IContextPayload>(
            ContextPayload,
            verify(token, REFRESH_TOKEN_SECRET)
        );
        if (errors.length > 0) console.error(errors);
        if (payload == null) return this.failAuth(res);

        const user = await User.findOne(userId);
        if (user === undefined || user.tokenVersion !== payload.tokenVersion)
            return this.failAuth(res);
        return res.status(StatusCodes.OK).json({ ok: true });
    }

    private failAuth(res: Response): Response {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ ok: false, accessToken: '' });
    }
}

export default AppController;
