/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Query, Args, ID, Context } from '@nestjs/graphql';
import { COOKIE_NAME } from '@nyoomy/global';
import { InvalidCredentialsError } from '../../common/errors/InvalidCredentialsError';
import { User } from '../../entities/user.entity';
import { IContext } from '../../types/context.interface';
import { UserLoginInfo } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';
import { UpdatePasswordInput } from './dto/update-password.input';
import { LoginResponse } from './models/login-response.model';
import { RegistrationResponse } from './models/registration-response.model';
import { UserService } from './user.service';
import type { FieldError } from '../../types/responses/field-error.model';

/**
 * GraphQL resolver for the user table.
 */
@Injectable()
@Resolver(() => User)
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Query(() => User, { nullable: true, name: 'me' })
    public currentUser(@Context() { req }: IContext): Promise<User | null> {
        return this.userService.getCurrentUser(req?.session?.userId);
    }

    /**
     * Attempts to add a user to the database,
     *
     * @param {RegisterUserInput} param0 { displayName, email, username, password }
     * @param id
     * @returns {Promise<RegistrationResponse>} the user
     */
    // @Mutation(() => RegistrationResponse)
    // public async registerUser(
    //     @Args('registrationInput')
    //     { displayName, email, username, password }: RegisterUserInput
    // ): Promise<RegistrationResponse> {
    //     const errors: FieldError[] =
    //         await this.userService.validateRegistration(
    //             displayName,
    //             email,
    //             username,
    //             password
    //         );
    //     if (errors.length > 0) return { user: null, errors };
    //     const user = await this.userService.register(
    //         displayName,
    //         email,
    //         username,
    //         password
    //     );
    //     return { user, errors: [] };
    // }

    // @Mutation(() => RegistrationResponse)
    // public addDummyUser(): Promise<RegistrationResponse> {
    //     return this.registerUser({
    //         displayName: 'q',
    //         email: 'q@q.com',
    //         username: 'q',
    //         password: 'qqqqqqqq',
    //     });
    // }

    // @Mutation(() => LoginResponse)
    // public async login(
    //     @Args() { usernameOrEmail, password }: UserLoginInfo,
    //     @Context() { req }: IContext
    // ): Promise<LoginResponse> {
    //     try {
    //         const user = await this.userService.login(
    //             usernameOrEmail,
    //             password
    //         );
    //         if (req == null) throw new Error('res not defined');
    //         req.session.userId = user.id;
    //         return { user, error: null };
    //     } catch (error: unknown) {
    //         if (error instanceof InvalidCredentialsError) {
    //             return {
    //                 user: null,
    //                 error: 'Your username or password was incorrect.',
    //             };
    //         }
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // @Mutation(() => Boolean)
    // public logout(@Context() { req, res }: IContext): Promise<boolean> {
    //     return new Promise((resolve, reject) =>
    //         // eslint-disable-next-line promise/prefer-await-to-callbacks
    //         req.session.destroy((err: unknown): void => {
    //             res.clearCookie(COOKIE_NAME);
    //             if (err != null) {
    //                 console.error(err);
    //                 reject(new Error(String(err)));
    //             }
    //             resolve(true);
    //         })
    //     );
    // }

    // @Mutation(() => Boolean)
    // public async forgotPassword(
    //     @Args('email') email: string
    // ): Promise<boolean> {
    //     await this.userService.sendForgotPasswordEmail(email);
    //     return true;
    // }

    // @Mutation(() => Boolean)
    // public async resetPassword(@Args('email') email: string): Promise<boolean> {
    //     await this.userService.resetPassword(email);
    //     return true;
    // }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Args({ name: 'id', type: () => ID }) id: string
    ): Promise<boolean> {
        try {
            await this.userService.delete(id);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    public async deleteUser(
        @Context() { req, res }: IContext
    ): Promise<boolean> {
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
        @Args('input')
        { username, oldPassword, newPassword }: UpdatePasswordInput
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
