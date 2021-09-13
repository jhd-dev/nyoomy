/* eslint-disable max-classes-per-file */
import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcryptjs';
import { InvalidCredentialsError } from '../../common/errors/InvalidCredentialsError';
import { PUBLIC_URL } from '../../env';
import sendEmail from '../../utils/sendEmail';
import { validateRegistration as validateRegInput } from '../../utils/validateRegistration';
import { UserRepo } from './user.repository';
import type { User } from '../../entities/user.entity';
import type { FieldError } from '../../types/responses/field-error.model';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(UserRepo)
        private readonly userRepo: UserRepo
    ) {}

    public getAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    public async getCurrentUser(id: unknown): Promise<User | null> {
        if (typeof id !== 'string' || id.length === 0) return null;
        return (await this.userRepo.findOne({ id })) ?? null;
    }

    /**
     * @param {string} usernameOrEmail the inputted username or email
     * @param {string} passwordInput the inputted password
     * @returns {Promise<User>} successfully logged in User
     * @throws When no user with the given credentials is found
     */
    public async login(
        usernameOrEmail: string,
        passwordInput: string
    ): Promise<User> {
        const user: User | undefined = await this.userRepo.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
        if (user === undefined) {
            throw new InvalidCredentialsError();
        }

        const isPasswordCorrect = await compare(passwordInput, user.password);
        if (!isPasswordCorrect) {
            throw new InvalidCredentialsError();
        }

        return user;
    }

    public async register(
        displayName: string,
        email: string,
        username: string,
        passwordInput: string
    ): Promise<User> {
        const hashedPassword: string = await hash(passwordInput, 12);
        const user: User = this.userRepo.create({
            displayName,
            username,
            email,
            password: hashedPassword,
        });
        await this.userRepo.save(user);
        return user;
    }

    public validateRegistration(
        displayName: string,
        email: string,
        username: string,
        passwordInput: string
    ): Promise<FieldError[]> {
        return validateRegInput({
            displayName,
            email,
            username,
            password: passwordInput,
        });
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
            `<a href="${PUBLIC_URL.origin}/reset-password/${token}">
                Click here to reset your password.
            </a>`
        );
    }

    public async resetPassword(email: string): Promise<void> {
        await this.userRepo.findOneOrFail({
            where: { email },
        });
    }

    public async delete(userId: string): Promise<void> {
        const user = await this.userRepo.findOneOrFail(userId);
        await this.userRepo.delete(user);
    }
}
