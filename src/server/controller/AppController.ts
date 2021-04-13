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

@Controller('')
class AppController {
    /**
     *
     * @param {Request} req {Request}
     * @param {Request} res -
     * @returns {Promise<Response>}
     */
    @Post('refresh_token')
    private async refreshToken(req: Request, res: Response): Promise<Response> {
        console.log('REFRESH_TOKEN');

        const token = req.cookies[REFRESH_TOKEN_NAME];
        if (!token) return this.failAuth(res);

        try {
            const payload: any = verify(token, REFRESH_TOKEN_SECRET);
            const user = await User.findOne({ id: payload.userId });
            if (!user || user.tokenVersion !== payload.tokenVersion)
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
        const payload: any = verify(token, REFRESH_TOKEN_SECRET);
        const user = await User.findOne(userId);
        if (!user || user.tokenVersion !== payload.tokenVersion)
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
