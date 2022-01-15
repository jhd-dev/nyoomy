/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable require-await */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../../auth.service';
import type { User } from '../../../user/models/user.entity';
import type { Profile } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    public constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService
    ) {
        super({
            clientID: configService.get<string>('auth.google.clientId'),
            clientSecret: configService.get<string>('auth.google.clientSecret'),
            callbackURL: `http://localhost:4001/auth/google/redirect`,
            scope: ['email', 'profile'],
        });
    }

    public async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile
    ): Promise<User | null> {
        return this.authService.validateGoogle(profile);
    }
}
