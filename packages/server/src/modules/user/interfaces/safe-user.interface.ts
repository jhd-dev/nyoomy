import type { IUser } from './user.interface';

export interface ISafeUser extends Omit<IUser, 'password'> {
    password?: undefined;
}
