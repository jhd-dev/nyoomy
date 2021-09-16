import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import type { IUser } from '../../user/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    public constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' });
    }

    public async validate(
        usernameOrEmail: string,
        password: string
    ): Promise<IUser | null> {
        const user = await this.authService.validateUser({
            usernameOrEmail,
            passwordInput: password,
        });
        if (user == null) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
