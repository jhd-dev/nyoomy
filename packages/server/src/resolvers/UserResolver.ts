/* eslint-disable @typescript-eslint/no-unsafe-return */
import { COOKIE_NAME } from '@nyoomy/global';
import { compare, hash } from 'bcryptjs';
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
import { getConnection } from 'typeorm';
import { User } from '../entities';
import { PUBLIC_URL } from '../env';
import { isAuthorized } from '../middleware/isAuthorized';
import { UserLoginInfo } from '../types/inputs/UserLoginInfo';
import { UserRegistrationInfo } from '../types/inputs/UserRegistrationInfo';
import { IContext } from '../types/interfaces/IContext';
import { LoginResponse } from '../types/responses/LoginResponse';
import { RegistrationResponse } from '../types/responses/RegistrationResponse';
import sendEmail from '../utils/sendEmail';
import { validateRegistration } from '../utils/validateRegistration';
import type { FieldError } from '../types/responses/FieldError';
import type { Repository } from 'typeorm';

/**
 * GraphQL resolver for the user table.
 */
@Resolver(() => User)
export class UserResolver {
    private readonly userRepo: Repository<User> =
        getConnection().getRepository(User);

    /**
     * Queries **all** users in the database.
     *
     * @returns {Promise<User[]>} a list of all users in the database
     */
    @Query(() => [User])
    public getAllUsers(): Promise<User[]> {
        return this.userRepo.find();
    }

    @Query(() => User, { nullable: true })
    public async currentUser(@Ctx() { req }: IContext): Promise<User | null> {
        const id = req?.session?.userId;
        if (typeof id !== 'string' || id.length === 0) return null;
        return (await this.userRepo.findOne({ id })) ?? null;
    }

    /**
     * Attempts to add a user to the database,
     *
     * @param {UserRegistrationInfo} param0 { name, email, username, password }
     * @returns {Promise<RegistrationResponse>} the user
     */
    @Mutation(() => RegistrationResponse)
    public async registerUser(
        @Args() { displayName, email, username, password }: UserRegistrationInfo
    ): Promise<RegistrationResponse> {
        const hashedPassword: string = await hash(password, 12);

        const errors: FieldError[] = await validateRegistration({
            displayName,
            email,
            username,
            password,
        });

        if (errors.length > 0) return { user: null, errors };

        const user: User = this.userRepo.create({
            displayName,
            username,
            email,
            password: hashedPassword,
        });
        await this.userRepo.save(user);
        return { user, errors: null };
    }

    @Mutation(() => RegistrationResponse)
    public async addDummyUser(): Promise<RegistrationResponse> {
        const displayName = 'q';
        const email = 'q@q.com';
        const username = 'q';
        const password = 'qqqqqqqq';

        const hashedPassword: string = await hash(password, 12);

        const errors: FieldError[] = await validateRegistration({
            displayName,
            email,
            username,
            password,
        });

        if (errors.length > 0) return { user: null, errors };

        const user: User = this.userRepo.create({
            displayName,
            username,
            email,
            password: hashedPassword,
        });
        await this.userRepo.save(user);

        return { user, errors: null };
    }

    @Mutation(() => LoginResponse)
    public async login(
        @Args() { usernameOrEmail, password }: UserLoginInfo,
        @Ctx() { req }: IContext
    ): Promise<LoginResponse> {
        const user: User | undefined = await this.userRepo.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
        if (user === undefined) return { user: null, error: 'User not found.' };

        const isValid: boolean = await compare(password, user.password);
        if (!isValid)
            return {
                user: null,
                error: 'Your username or password was incorrect.',
            };

        // successful login
        if (req == null) throw new Error('res not defined');
        req.session.userId = user.id;
        return { user, error: null };
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
        const user: User | undefined = await this.userRepo.findOne({
            where: { email },
        });
        if (user === undefined) return false; // email not in DB

        const token: string = '';

        await sendEmail(
            email,
            'Forgot password',
            `<a href="${PUBLIC_URL.origin}/reset-password/${token}">
                Click here to reset your password.
            </a>`
        );
        return true;
    }

    @Mutation(() => Boolean)
    public async resetPassword(@Arg('email') email: string): Promise<boolean> {
        await this.userRepo.findOneOrFail({
            where: { email },
        });
        return true;
    }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            await this.userRepo.delete(id);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthorized)
    public async deleteUser(@Ctx() { req, res }: IContext): Promise<boolean> {
        try {
            await this.userRepo.delete({ id: req.session.userId });
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
            const user: User | undefined = await this.userRepo.findOne({
                username,
            });
            if (user === undefined) throw new Error('User does not exist.');

            const actualPassword: string = user.password;
            if (oldPassword !== actualPassword)
                throw new Error('Incorrect password.');

            await this.userRepo.update({ username }, { password: newPassword });
            return true;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}
/* eslint-enable @typescript-eslint/no-unsafe-return */
