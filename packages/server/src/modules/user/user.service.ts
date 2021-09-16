import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import sendEmail from '../../utils/sendEmail';
import { validateRegistration as validateRegInput } from '../../utils/validateRegistration';
import { Profile } from './models/profile.entity';
import { UserRepo } from './user.repository';
import type { FieldError } from '../../types/responses/field-error.model';
import type { RegisterUserInput } from './dto/register.input';
import type { IUser } from './interfaces/user.interface';
import type { User } from './models/user.entity';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(UserRepo)
        private readonly userRepo: UserRepo,
        @InjectRepository(Profile)
        private readonly profileRepo: Repository<Profile>,
        private readonly configService: ConfigService
    ) {}

    public getAll(): Promise<IUser[]> {
        return this.userRepo.find();
    }

    public async getCurrentUser(id: unknown): Promise<IUser | null> {
        if (typeof id !== 'string' || id.length === 0) return null;
        return (await this.findById(id)) ?? null;
    }

    public findById(
        id: string,
        isOptional: boolean = true
    ): Promise<IUser | undefined> {
        return isOptional
            ? this.userRepo.findOne(id)
            : this.userRepo.findOneOrFail(id);
    }

    public findByCredentials(
        usernameOrEmail: string
    ): Promise<User | undefined> {
        return this.userRepo.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
    }

    public async createUser({
        displayName,
        email,
        username,
        password,
    }: RegisterUserInput): Promise<IUser> {
        const user = this.userRepo.create({ username, email, password });
        const profile = this.profileRepo.create({ user, displayName });
        const { id } = await this.userRepo.save(user);
        await this.profileRepo.save(profile);
        return this.userRepo.findOneOrFail(id);
    }

    // public async login(
    //     usernameOrEmail: string,
    //     passwordInput: string
    // ): Promise<User> {
    //     const user = await this.userRepo.findOne({
    //         where: usernameOrEmail.includes('@')
    //             ? { email: usernameOrEmail }
    //             : { username: usernameOrEmail },
    //     });
    //     if (user === undefined) {
    //         throw new InvalidCredentialsError();
    //     }

    //     const isPasswordCorrect = await compare(passwordInput, user.password);
    //     if (!isPasswordCorrect) {
    //         throw new InvalidCredentialsError();
    //     }

    //     return user;
    // }

    // public async register(
    //     displayName: string,
    //     email: string,
    //     username: string,
    //     passwordInput: string
    // ): Promise<User> {
    //     const hashedPassword: string = await hash(passwordInput, 12);
    //     const user: User = this.userRepo.create({
    //         displayName,
    //         username,
    //         email,
    //         password: hashedPassword,
    //     });
    //     await this.userRepo.save(user);
    //     return user;
    // }

    // public validateRegistration(
    //     displayName: string,
    //     email: string,
    //     username: string,
    //     passwordInput: string
    // ): Promise<FieldError[]> {
    //     return validateRegInput({
    //         displayName,
    //         email,
    //         username,
    //         password: passwordInput,
    //     });
    // }

    public async updatePassword(
        username: string,
        oldPassword: string,
        newPassword: string
    ): Promise<void> {
        const user: User | undefined = await this.userRepo.findOne({
            username,
        });
        if (user === undefined) throw new Error('User does not exist.');

        const actualPassword: string = user.password;
        if (oldPassword !== actualPassword)
            throw new Error('Incorrect password.');

        await this.userRepo.update({ username }, { password: newPassword });
    }

    public async sendForgotPasswordEmail(email: string): Promise<void> {
        const user = await this.userRepo.findOne({ where: { email } });
        if (user === undefined) {
            throw new Error('No user with given email address found.');
        }

        const token: string = '';
        await sendEmail(
            email,
            'Forgot password',
            `<a href="${
                this.configService.get<string>('CLIENT.PUBLIC_URL') ?? ''
            }/reset-password/${token}">
                Click here to reset your password.
            </a>`
        );
    }

    public async resetPassword(email: string): Promise<void> {
        await this.userRepo.findOneOrFail({
            where: { email },
        });
    }

    public async deleteById(userId: string): Promise<void> {
        const user = await this.userRepo.findOneOrFail(userId);
        await this.userRepo.delete(user);
    }
}
