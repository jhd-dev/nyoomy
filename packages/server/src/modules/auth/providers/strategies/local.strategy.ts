import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoggerService } from '../../../logger/logger.service';
import { AuthService } from '../../auth.service';
import type { User } from '../../../user/models/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    public constructor(
        private readonly authService: AuthService,
        private readonly logger: LoggerService
    ) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        logger.setContext(LocalStrategy.name);
    }

    // eslint-disable-next-line require-await
    public async validate(
        username: string,
        password: string
    ): Promise<User | null> {
        try {
            return this.authService.validateCredentials(username, password);
        } catch (err: unknown) {
            this.logger.debug('validate failed');
            this.logger.debug(err);
            return null;
        }
    }
}
