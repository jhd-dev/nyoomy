import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../auth.service';
import type { User } from '../../../user/models/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    public constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
    }

    // eslint-disable-next-line require-await
    public async validate(
        username: string,
        password: string
    ): Promise<User | null> {
        console.log('localstrategy.validate');
        try {
            return this.authService.validateCredentials(username, password);
        } catch (err: unknown) {
            console.log('validate failed');
            console.error(err);
            return null;
        }
    }
}
