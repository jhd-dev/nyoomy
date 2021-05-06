import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

@Controller('auth')
export default class AuthController {
    @Post('refresh_token')
    private getRefreshToken(_req: Request, res: Response) {
        return res.status(StatusCodes.OK);
    }
}
