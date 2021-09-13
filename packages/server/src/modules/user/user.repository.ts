import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import type { IUserRepo } from './interfaces/user.repository.interface';

@EntityRepository(User)
export class UserRepo extends Repository<User> implements IUserRepo {
    public findByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ email });
    }
}
