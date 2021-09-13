import type { IUser } from './user.interface';

export interface IUserRepo {
    findByEmail(email: string): Promise<IUser | undefined>;
}
