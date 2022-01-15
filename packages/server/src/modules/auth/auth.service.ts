import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { UserService } from '../user/user.service';
import type { User } from '../../entities';
import type { SafeUser } from '../user/models/safe-user.model';
import type { UserLoginInput } from './dto/login.input';
import type { RegisterUserInput } from './dto/register.input';
import type { IAuthService } from './interfaces/auth.service.interface';
import type { LoginResponse } from './models/login-response.model';
import type { RegistrationResponse } from './models/registration-response.model';
import type { Profile } from 'passport-google-oauth20';

@Injectable()
export class AuthService implements IAuthService {
    public constructor(private readonly userService: UserService) {}

    public async registerUser({
        password,
        displayName,
        ...registrationData
    }: RegisterUserInput): Promise<RegistrationResponse> {
        const hashedPassword = await hash(password, 10);
        try {
            const user = await this.userService.createUser({
                ...registrationData,
                displayName,
                password: hashedPassword,
            });

            if (user == null) {
                return { user: null, errors: [] };
            }
            return { user: this.makeUserSafe(user), errors: [] };
        } catch (error) {
            throw new HttpException(
                'Something went wrong',
                HttpStatus.BAD_REQUEST
            );
        }
    }

    public async getLoginResponse({
        usernameOrEmail,
        passwordInput,
    }: UserLoginInput): Promise<LoginResponse> {
        const user = await this.validateCredentials(
            usernameOrEmail,
            passwordInput
        );
        if (user == null) {
            return { user: null, error: 'Login failed' };
        }
        return { user: this.makeUserSafe(user), error: null };
    }

    public async validateCredentials(
        usernameOrEmail: string,
        passwordInput: string
    ): Promise<User | null> {
        console.log('authservice.validatecredentials');
        const user = await this.userService.findByCredentials(usernameOrEmail);
        if (user === undefined) {
            return null;
        }
        if (await this.doesPasswordMatch(passwordInput, user.password)) {
            return user;
        }
        return null;
    }

    public async validateGoogle(profile: Profile): Promise<User | null> {
        const { id, emails, name } = profile;
        const existingUser = await this.userService.findByGoogleId(id);
        if (existingUser != null) {
            return existingUser;
        }
        return this.userService.createGoogleUser(
            id,
            Array.isArray(emails) ? emails.map(({ value }) => value) : [],
            name?.givenName ?? 'New User'
        );
    }

    private async doesPasswordMatch(
        passwordInput: string,
        hashedPassword: string
    ): Promise<boolean> {
        const isPasswordCorrect = await compare(passwordInput, hashedPassword);
        if (!isPasswordCorrect) {
            // throw new UnauthorizedException('Invalid credentials.');
        }
        return isPasswordCorrect;
    }

    public makeUserSafe(user: User): SafeUser {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...safeUser } = user;
        return safeUser;
    }
}
