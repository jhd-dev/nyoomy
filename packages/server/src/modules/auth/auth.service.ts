import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcryptjs';
import { InvalidCredentialsError } from '../../common/errors/InvalidCredentialsError';
import { UserRepo } from '../user/user.repository';
import type { User } from '../../entities';
import type { IUser } from '../user/interfaces/user.interface';
import type { UserLoginInput } from './dto/login.input';
import type { RegisterUserInput } from './dto/register.input';

@Injectable()
export class AuthService {
    public constructor(
        @InjectRepository(UserRepo)
        private readonly userRepo: UserRepo
    ) {}

    public findById(id: string): Promise<IUser> {
        return this.userRepo.findOneOrFail(id);
    }

    public async validateUser({
        usernameOrEmail,
        password,
    }: UserLoginInput): Promise<User> {
        const user: User | undefined = await this.userRepo.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
        if (user === undefined) {
            throw new InvalidCredentialsError();
        }

        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new InvalidCredentialsError();
        }

        return user;
    }

    public async registerUser({
        displayName,
        username,
        email,
        password,
    }: RegisterUserInput): Promise<User> {
        const existingUser = await this.userRepo.findByEmail(email);
        if (typeof existingUser !== 'undefined') {
            throw new BadRequestException('Bad request: Registration failed.');
        }

        const hashedPassword: string = await hash(password, 12);
        const newUser = this.userRepo.create({
            displayName,
            username,
            email,
            password: hashedPassword,
        });
        await this.userRepo.save(newUser);

        return newUser;
    }
}
