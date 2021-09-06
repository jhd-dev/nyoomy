/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'reflect-metadata';
import { COOKIE_NAME } from '@nyoomy/global';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Args,
    Ctx,
    UseMiddleware,
    ID,
} from 'type-graphql';
import { Inject, Service } from 'typedi';
import { User } from '../entities/User';
import { isAuthorized } from '../middleware/isAuthorized';
import { UserService } from '../services/UserService';
import { InvalidCredentialsError } from '../types/errors/InvalidCredentialsError';
import { UserLoginInfo } from '../types/inputs/UserLoginInfo';
import { UserRegistrationInfo } from '../types/inputs/UserRegistrationInfo';
import { IContext } from '../types/interfaces/IContext';
import { LoginResponse } from '../types/responses/LoginResponse';
import { RegistrationResponse } from '../types/responses/RegistrationResponse';
import type { FieldError } from '../types/responses/FieldError';

/**
 * GraphQL resolver for the user table.
 */
@Service()
@Resolver(() => User)
export class UserResolver {
    @Inject(() => UserService)
    private readonly userService: UserService;

    /**
     * Queries **all** users in the database.
     *
     * @returns {Promise<User[]>} a list of all users in the database
     */
    @Query(() => [User])
    public getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Query(() => User, { nullable: true })
    public currentUser(@Ctx() { req }: IContext): Promise<User | null> {
        return this.userService.getCurrentUser(req?.session?.userId);
    }

    /**
     * Attempts to add a user to the database,
     *
     * @param {UserRegistrationInfo} param0 { displayName, email, username, password }
     * @returns {Promise<RegistrationResponse>} the user
     */
    @Mutation(() => RegistrationResponse)
    public async registerUser(
        @Args() { displayName, email, username, password }: UserRegistrationInfo
    ): Promise<RegistrationResponse> {
        const errors: FieldError[] =
            await this.userService.validateRegistration(
                displayName,
                email,
                username,
                password
            );
        if (errors.length > 0) return { user: null, errors };
        const user = await this.userService.register(
            displayName,
            email,
            username,
            password
        );
        return { user, errors: [] };
    }

    @Mutation(() => RegistrationResponse)
    public addDummyUser(): Promise<RegistrationResponse> {
        return this.registerUser({
            displayName: 'q',
            email: 'q@q.com',
            username: 'q',
            password: 'qqqqqqqq',
        });
    }

    @Mutation(() => LoginResponse)
    public async login(
        @Args() { usernameOrEmail, password }: UserLoginInfo,
        @Ctx() { req }: IContext
    ): Promise<LoginResponse> {
        try {
            const user = await this.userService.login(
                usernameOrEmail,
                password
            );
            if (req == null) throw new Error('res not defined');
            req.session.userId = user.id;
            return { user, error: null };
        } catch (error: unknown) {
            if (error instanceof InvalidCredentialsError) {
                return {
                    user: null,
                    error: 'Your username or password was incorrect.',
                };
            }
            console.error(error);
            throw error;
        }
    }

    @Mutation(() => Boolean)
    public logout(@Ctx() { req, res }: IContext): Promise<boolean> {
        return new Promise((resolve, reject) =>
            // eslint-disable-next-line promise/prefer-await-to-callbacks
            req.session.destroy((err: unknown): void => {
                res.clearCookie(COOKIE_NAME);
                if (err != null) {
                    console.error(err);
                    reject(new Error(String(err)));
                }
                resolve(true);
            })
        );
    }

    @Mutation(() => Boolean)
    public async forgotPassword(@Arg('email') email: string): Promise<boolean> {
        await this.userService.sendForgotPasswordEmail(email);
        return true;
    }

    @Mutation(() => Boolean)
    public async resetPassword(@Arg('email') email: string): Promise<boolean> {
        await this.userService.resetPassword(email);
        return true;
    }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            await this.userService.delete(id);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthorized)
    public async deleteUser(@Ctx() { req, res }: IContext): Promise<boolean> {
        try {
            if (typeof req?.session?.userId !== 'string') return false;
            await this.userService.delete(req.session.userId);
            res.clearCookie(COOKIE_NAME);
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }

    @Mutation(() => Boolean)
    public async updateUserPassword(
        @Arg('username') username: string,
        @Arg('oldPassword') oldPassword: string,
        @Arg('newPassword') newPassword: string
    ): Promise<boolean> {
        try {
            await this.userService.updatePassword(
                username,
                oldPassword,
                newPassword
            );
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}
/* eslint-enable @typescript-eslint/no-unsafe-return */
