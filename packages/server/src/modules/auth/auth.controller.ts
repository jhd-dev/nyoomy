import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { GqlLocalAuthGuard } from './guards/gql-local-auth.guard';

@Controller('auth')
export class AuthController {
    public constructor(private readonly authService: AuthService) {}

    @Get()
    @Post()
    @UseGuards(AuthGuard('google'))
    public login(): void {
        console.log('login');
    }

    @Get('google')
    @Post('google')
    @UseGuards(AuthGuard('google'))
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public googleAuth(@Req() _req: Request): void {}

    @Get('google/redirect')
    @Post('google/redirect')
    @UseGuards(GqlLocalAuthGuard)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public googleAuthRedirect(@Req() req: Request, @Res() res: Response): void {
        if (req.user == null) {
            throw new Error('no google user found in request');
        }
        console.log(req.isAuthenticated());
        // console.log(req.session.user?.id);
        res.redirect('/');
    }
}
