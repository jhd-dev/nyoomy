import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import type { SafeUser } from '../../user/models/safe-user.model';
import type { User } from '../../user/models/user.entity';

@Injectable()
export class LocalAuthSerializer extends PassportSerializer {
    public constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {
        super();
    }

    public serializeUser(
        user: User,
        done: (err: Error | null, user: User) => void
    ): void {
        console.log('serializeUser');
        done(null, user);
    }

    public async deserializeUser(
        { id }: User,
        done: (err: Error | null, user: SafeUser) => void
    ): Promise<void> {
        console.log('deserializeuser');
        const user = await this.userService.findById(id, false);
        if (user == null) {
            throw new HttpException(
                'Failed to deserialize user.',
                HttpStatus.BAD_REQUEST
            );
        }
        done(null, this.authService.makeUserSafe(user));
    }
}
