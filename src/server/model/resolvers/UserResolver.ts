import { compare, hash } from 'bcryptjs';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    Args,
    Ctx,
    UseMiddleware,
    MiddlewareFn,
    ID,
} from 'type-graphql';
import { User } from '../entity/User';
import type { IExpressContext, IContextPayload } from '../../../shared/types';
import {
    createAccessToken,
    createRefreshToken,
    sendRefreshToken,
} from '../../utils/auth';
import { verify } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../../../shared/env';
import { UserRegistrationInfo } from './UserRegistrationInfo';
import { UserLoginInfo } from './UserLoginInfo';
import { LoginResponse } from './LoginResponse';
import { RegistrationResponse } from './RegistrationResponse';
import { validateRegistration } from './validateRegistration';
import sendEmail from '../../utils/sendEmail';

/**
 * Verifies that the client's context has a valid access token.
 * @const
 * @type {MiddlewareFn<IExpressContext>}
 * @throws when the user is not authenticated
 */
const isAuth: MiddlewareFn<IExpressContext> = ({ context }, next) => {
    try {
        const authorization: string | undefined =
            context.req.headers['authorization'];
        if (authorization === undefined || authorization === '')
            throw new Error('Not authenticated.');

        const token: string = authorization.split(' ')[1];
        const payload: IContextPayload = verify(
            token,
            ACCESS_TOKEN_SECRET
        ) as IContextPayload;
        context.payload = payload;
        return next();
    } catch (err) {
        console.error(err);
        throw new Error('Not authenticated.');
    }
};

/**
 * GraphQL resolver for the user table.
 * @export
 * @class UserResolver
 */
@Resolver()
export class UserResolver {
    /**
     * Queries **all** users in the database.
     * @async
     * @returns {Promise<User[]>} a list of all users in the database
     */
    @Query(() => [User])
    public getAllUsers(): Promise<User[]> {
        return User.find();
    }

    /**
     * Attempts to add a user to the database,
     * @param {UserRegistrationInfo} param0 { name, email, username, password }
     *      @param
     * @returns {Promise<RegistrationResponse>} the user
     */
    @Mutation(() => RegistrationResponse)
    public async registerUser(
        @Args() { name, email, username, password }: UserRegistrationInfo
    ): Promise<RegistrationResponse> {
        const hashedPassword = await hash(password, 12);

        const errors = await validateRegistration({
            name,
            email,
            username,
            password,
        });

        if (errors.length > 0)
            return {
                errors,
            };

        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword,
        }).save();

        return { user };
    }

    @Mutation(() => LoginResponse)
    public async login(
        @Args() { usernameOrEmail, password }: UserLoginInfo,
        @Ctx() { res }: IExpressContext
    ): Promise<LoginResponse> {
        const user = await User.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
        if (user == null) throw new Error('User not found.');

        const isValid = await compare(password, user.password);
        if (!isValid) throw new Error('Incorrect password.');

        // successful login
        if (res == null) throw new Error('res not defined');
        sendRefreshToken(res, createRefreshToken(user));
        return {
            accessToken: createAccessToken(user),
            user,
        };
    }

    @Mutation(() => Boolean)
    public logout(@Ctx() { res }: IExpressContext): boolean {
        sendRefreshToken(res, '');
        return true;
    }

    @Query(() => User, { nullable: true })
    public async currentUser(
        @Ctx() context: IExpressContext
    ): Promise<User | null> {
        const authorization = context.req.headers['authorization'];
        if (authorization === undefined || authorization === '') return null;

        try {
            const token = authorization.split(' ')[1];
            const payload = verify(
                token,
                ACCESS_TOKEN_SECRET
            ) as IContextPayload;
            context.payload = payload;
            return (await User.findOne(payload.userId)) ?? null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    public async forgotPassword(@Arg('email') email: string): Promise<boolean> {
        const user = await User.findOne({ where: { email } });
        if (user == null) return false; // email not in DB

        const token = '';

        await sendEmail(
            email,
            'Forgot password',
            `<a href="http://localhost:4000/reset-password/${token}">` +
                'Click here to reset your password.' +
                '</a>'
        );
        return true;
    }

    @Mutation(() => Boolean)
    public async resetPassword(
        @Arg('email') email: string
        //@Arg('password') password: string
    ): Promise<boolean> {
        const user = await User.findOne({ where: { email } });
        if (user == null) return false; // email not in DB

        return true;
    }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Arg('id', () => ID) id: string
    ): Promise<boolean> {
        try {
            await User.delete(id);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    public async deleteUser(
        @Ctx() { payload }: IExpressContext
    ): Promise<boolean> {
        if (payload === undefined || payload.userId === undefined) return false;
        try {
            await User.delete(payload.userId);
            return true;
        } catch {
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
            const user = await User.findOne({ username });
            if (user == null) throw new Error('User does not exist.');

            const actualPassword = user?.password;
            if (oldPassword !== actualPassword)
                throw new Error('Incorrect password.');

            await User.update({ username }, { password: newPassword });
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
