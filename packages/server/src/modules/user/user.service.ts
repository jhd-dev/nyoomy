import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistrationProblem } from '../../types/enums/registration-problem';
import sendEmail from '../../utils/sendEmail';
import { Profile } from './models/profile.entity';
import { User } from './models/user.entity';
import { UserRepo } from './user.repository';
import type { RegisterUserInput } from '../auth/dto/register.input';
import type { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(User)
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

    public findByGoogleId(googleId: string): Promise<User | undefined> {
        return this.userRepo.findOne({ where: { googleId } });
    }

    public async createUser({
        displayName,
        email,
        username,
        password,
    }: RegisterUserInput): Promise<User> {
        const user = this.userRepo.create({ username, email, password });
        const profile = this.profileRepo.create({ user, displayName });
        await this.profileRepo.save(profile);
        return this.userRepo.findOneOrFail(user.id);
    }

    public async createGoogleUser(
        googleId: string,
        emails: string[],
        displayName: string
    ): Promise<User> {
        const username = displayName
            .toLocaleLowerCase()
            .padEnd(16, String(Math.random()).substring(2));
        const password = '';
        const user: User = this.userRepo.create({
            username,
            email: emails[0],
            password,
            googleId,
        });
        const profile = this.profileRepo.create({ user, displayName });
        await this.profileRepo.save(profile);
        return this.userRepo.findOneOrFail(user.id);
    }

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

    private async validateRegistration({
        email,
        username,
    }: RegisterUserInput): Promise<RegistrationProblem | null> {
        const existingUsers = await this.userRepo.find({
            where: [{ username }, { email }],
        });
        if (existingUsers.length > 0) {
            return existingUsers[0].email === email
                ? RegistrationProblem.EMAIL_TAKEN
                : RegistrationProblem.USERNAME_TAKEN;
        }
        return null;
    }
}
