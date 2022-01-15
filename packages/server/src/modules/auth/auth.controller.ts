import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    public constructor(private readonly authService: AuthService) {}

    @Post()
    @UseGuards(AuthGuard('local'))
    public login(): void {
        console.log('login');
    }

    @Get('google')
    @Post('google')
    @UseGuards(AuthGuard('google'))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public googleAuth(@Req() _req: Request): void {
        console.log('google');
    }

    @Get('google/redirect')
    @Post('google/redirect')
    @UseGuards(AuthGuard('google'))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public googleAuthRedirect(@Req() req: Request, @Res() res: Response): void {
        console.log('google/redirec');
        if (req.user == null) {
            throw new Error('no google user found in request');
        }
        res.redirect('/');
    }
}
