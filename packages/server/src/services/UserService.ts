/* eslint-disable max-classes-per-file */
import 'reflect-metadata';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepo } from '../repositories/UserRepo';
import type { User } from '../internal';

@Service()
export class UserService {
    @InjectRepository(() => UserRepo)
    private readonly userRepo: UserRepo;

    public async findUser(): Promise<User[]> {
        return await this.userRepo.find();
    }
}
