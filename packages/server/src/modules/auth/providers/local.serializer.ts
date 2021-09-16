import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '../../user/user.service';
import type { IUser } from '../../user/interfaces/user.interface';
import type { IAuthPayload } from '../interfaces/auth-payload.interface';

@Injectable()
export class LocalAuthSerializer extends PassportSerializer {
    public constructor(private readonly userService: UserService) {
        super();
    }

    public serializeUser(
        user: IUser,
        done: (err: Error | null, user: IAuthPayload) => void
    ): void {
        done(null, { id: user.id });
    }

    public async deserializeUser(
        { id }: IAuthPayload,
        done: (err: Error | null, user: Omit<IUser, 'password'>) => void
    ): Promise<void> {
        const user = await this.userService.findById(id, false);
        if (typeof user === 'undefined') {
            throw new HttpException(
                'Failed to deserialize user.',
                HttpStatus.BAD_REQUEST
            );
        }

        const { password, ...secureUser } = user;
        void password;
        done(null, secureUser);
    }
}
