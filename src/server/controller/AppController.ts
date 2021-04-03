import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { REFRESH_TOKEN_SECRET } from '../../shared/env';
import { verify } from 'jsonwebtoken';
import { User } from '../model/entity/User';
import { createAccessToken } from './auth';

@Controller("")
class AppController {

    @Post("/refresh_token")
    private async refreshToken(req: Request, res: Response): Promise<Response> {
        const failed = () => res.send({ ok: false, accessToken: "" });
        const token = req.cookies.jid;
        if (!token) return failed();
        try {
            const payload: any = verify(token, REFRESH_TOKEN_SECRET);
            const user = await User.findOne({ id: payload.userId });
            if (!user) return failed();
            return res.send({ ok: true, accessToken: createAccessToken(user) });
        } catch (err) {
            console.log(err);
            return failed();
        }
    }

}

export default AppController;
