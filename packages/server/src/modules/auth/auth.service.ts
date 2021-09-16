import {
    BadRequestException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { BAD_REQUEST } from 'http-status-codes';
import { UserService } from '../user/user.service';
import type { User } from '../../entities';
import type { IUser } from '../user/interfaces/user.interface';
import type { UserLoginInput } from './dto/login.input';
import type { RegisterUserInput } from './dto/register.input';

@Injectable()
export class AuthService {
    public constructor(private readonly userService: UserService) {}

    public async register({
        password,
        displayName,
        ...registrationData
    }: RegisterUserInput): Promise<IUser> {
        const hashedPassword = await hash(password, 10);
        try {
            return this.userService.createUser({
                ...registrationData,
                displayName,
                password: hashedPassword,
            });
        } catch (error) {
            throw new HttpException(
                'Something went wrong',
                HttpStatus.BAD_REQUEST
            );
        }
    }

    public async validateUser({
        usernameOrEmail,
        passwordInput,
    }: UserLoginInput): Promise<User | null> {
        const user = await this.userService.findByCredentials(usernameOrEmail);
        if (user === undefined) return null;
        await this.verifyPassword(passwordInput, user.password);
        return user;
    }

    private async verifyPassword(
        passwordInput: string,
        hashedPassword: string
    ): Promise<void> {
        const isPasswordCorrect = await compare(passwordInput, hashedPassword);
        if (!isPasswordCorrect) {
            throw new UnauthorizedException('Invalid credentials.');
        }
    }

    // public async login({
    //     usernameOrEmail,
    //     passwordInput,
    // }: UserLoginInput): Promise<User | null> {
    //     const user = await this.userService.findByCredentials(usernameOrEmail);
    //     if (user === undefined) return null;

    //     const isPasswordCorrect = await compare(passwordInput, user.password);
    //     if (!isPasswordCorrect) return null;

    //     return user;
    // }

    // public async registerUser({
    //     displayName,
    //     username,
    //     email,
    //     password,
    // }: RegisterUserInput): Promise<User> {
    //     const existingUser = await this.userService.findByCredentials(email);
    //     if (typeof existingUser !== 'undefined') {
    //         throw new BadRequestException('Bad request: Registration failed.');
    //     }

    //     const hashedPassword: string = await hash(password, 12);
    //     const newUser = this.userService.createUser({
    //         username,
    //         displayName,
    //         email,
    //         password: hashedPassword,
    //     });
    //     await this.userService.save(newUser);

    //     return newUser;
    // }
}
