import { Controller, Post, Get } from '@overnightjs/core';
import { Request, Response } from "express";
import { REFRESH_TOKEN_SECRET } from '../../shared/env';
import { verify } from 'jsonwebtoken';
import { User } from '../model/entity/User';
import { createAccessToken } from './auth';
import StatusCodes from 'http-status-codes';

@Controller("")
class AppController {

    @Get("refresh_token")
    @Post("refresh_token")
    private async refreshToken(req: Request, res: Response): Promise<Response> {
        console.log("REFRESH_TOKEN");
        const failed = () => res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ ok: false, accessToken: "" });
        const token = req.cookies.jid;
        if (!token) return failed();
        try {
            const payload: any = verify(token, REFRESH_TOKEN_SECRET);
            const user = await User.findOne({ id: payload.userId });
            if (!user || user.tokenVersion !== payload.tokenVersion) return failed();
            return res
                .status(StatusCodes.OK)
                .json({ ok: true, accessToken: createAccessToken(user) });
        } catch (err) {
            console.log(err);
            return failed();
        }
    }

}

export default AppController;
