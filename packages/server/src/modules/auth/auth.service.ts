import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import {
    adjectives,
    animals,
    colors,
    NumberDictionary,
    uniqueNamesGenerator,
} from 'unique-names-generator';
import { UserService } from '../user/user.service';
import type { SafeUser } from '../user/models/safe-user.model';
import type { User } from '../user/models/user.entity';
import type { AvailabilityDto } from './dto/availability.dto';
import type { UserLoginInput } from './dto/login.input';
import type { RegisterUserInput } from './dto/register.input';
import type { IAuthService } from './interfaces/auth.service.interface';
import type { LoginResponse } from './models/login-response.model';
import type { RegistrationResponse } from './models/registration-response.model';
import type { Profile } from 'passport-google-oauth20';

const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });

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
        const user = await this.userService.findByCredentials(usernameOrEmail);
        if (user == null) {
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

    public async getUsernameAvailability(
        username?: string,
        recommendations: number = 0
    ): Promise<AvailabilityDto> {
        if (!username) {
            return {
                fieldName: 'username',
                timeChecked: new Date(),
                isAvailable: false,
                alternatives:
                    recommendations > 0
                        ? ((
                              await Promise.all(
                                  new Array(recommendations).map(() =>
                                      this.generateRandomUsername()
                                  )
                              )
                          ).filter((name) => name != null) as string[])
                        : undefined,
            };
        }
        const user = await this.userService.findByCredentials(username);
        if (user == null) {
            return {
                fieldName: 'username',
                attemptedInput: username,
                isAvailable: true,
                timeChecked: new Date(),
            };
        }
        const alternatives = await this.findAvailableUsernames(
            username,
            recommendations
        );
        return {
            fieldName: 'username',
            attemptedInput: username,
            isAvailable: false,
            timeChecked: new Date(),
            alternatives,
        };
    }

    public async findAvailableUsernames(
        baseUsername: string,
        recommendationsExpected: number = 1,
        maxAttempts: number = 1
    ): Promise<string[]> {
        const availableNames: string[] = [];
        for (let rec = 0; rec < recommendationsExpected; rec++) {
            for (let attempt = 0; attempt < maxAttempts; attempt++) {
                const username = uniqueNamesGenerator({
                    dictionaries: [[baseUsername], numberDictionary],
                    length: 2,
                    separator: '',
                });
                // eslint-disable-next-line no-await-in-loop
                const existingUser = await this.userService.findByCredentials(
                    username
                );
                if (existingUser == null) {
                    availableNames.push(username);
                }
            }
        }
        return availableNames;
    }

    public async generateRandomUsername(
        maxAttempts: number = 1
    ): Promise<string | null> {
        for (let i = 0; i < maxAttempts; i++) {
            const username = uniqueNamesGenerator({
                dictionaries: [adjectives, colors, animals],
                length: 3,
                separator: '_',
            });
            // eslint-disable-next-line no-await-in-loop
            const existingUser = await this.userService.findByCredentials(
                username
            );
            if (existingUser == null) {
                return username;
            }
        }
        return null;
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
