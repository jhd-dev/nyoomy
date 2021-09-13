import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import type { IUser } from '../../user/interfaces/user.interface';
import type { IAuthPayload } from '../interfaces/auth-payload.interface';

@Injectable()
export class AuthSerializer extends PassportSerializer {
    public constructor(private readonly authService: AuthService) {
        super();
    }

    public serializeUser(
        user: IUser,
        done: (err: Error | null, user: IAuthPayload) => void
    ): void {
        done(null, { id: user.id });
    }

    public async deserializeUser(
        payload: IAuthPayload,
        done: (err: Error | null, user: Omit<IUser, 'password'>) => void
    ): Promise<void> {
        const user = await this.authService.findById(payload.id);
        done(null, user);
    }
}
