import 'reflect-metadata';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@Service()
@EntityRepository(User)
export class UserRepo extends Repository<User> {
    public findByEmail(email: string): Promise<User> {
        return this.findOneOrFail({ email });
    }
}
