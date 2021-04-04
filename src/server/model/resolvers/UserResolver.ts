import { compare, hash } from 'bcryptjs';
import { Resolver, Mutation, Arg, Int, Query, Field, Args, ArgsType, ObjectType, Ctx,
    UseMiddleware, MiddlewareFn } from 'type-graphql';
import { User } from '../entity/User';
import { IExpressContext, ContextPayload } from '../../../shared/types';
import { createAccessToken, createRefreshToken, sendRefreshToken } from '../../controller/auth';
import { verify } from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../../../shared/env';

@ObjectType()
class LoginResponse {
    @Field()
    accessToken?: string;

    @Field(() => User)
    user?: User;
}

@ArgsType()
class UserLoginInfo {
    @Field()
    username!: string;

    @Field()
    password!: string;
}

@ArgsType()
class UserRegistrationInfo extends UserLoginInfo {
    @Field()
    name!: string
}

const isAuth: MiddlewareFn<IExpressContext> = ({ context }, next) => {
    try {
        const authorization = context.req.headers["authorization"];
        if (!authorization) throw new Error("Not authenticated.");

        const token = authorization.split(" ")[1];
        const payload = verify(token, ACCESS_TOKEN_SECRET);
        context.payload = payload as ContextPayload;
        return next();
    } catch (err) {
        console.error(err);
        throw new Error("Not authenticated.");
    }
};

@Resolver()
export class UserResolver {

    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
        return await User.find();
    }

    @Mutation(() => User)
    async createUser(
        @Args() { name, username, password }: UserRegistrationInfo,
    ): Promise<User> {
        const hashedPassword = await hash(password, 12);
        return await User.create({
            name,
            username,
            password: hashedPassword,
        }).save();
    }

    @Mutation(() => LoginResponse)
    async login(
        @Args() { username, password }: UserLoginInfo,
        @Ctx() { res }: IExpressContext
    ): Promise<LoginResponse> {
        const user = await User.findOne({ where: { username } });
        if (!user) throw new Error("User not found.");

        const isValid = await compare(password, user.password);
        if (!isValid) throw new Error("Incorrect password.");

        // successful login
        if (!res) throw new Error("res not defined");
        sendRefreshToken(res, createRefreshToken(user));
        return {
            accessToken: createAccessToken(user),
            user
        };
    }

    @Mutation(() => Boolean)
    logout(
        @Ctx() { res }: IExpressContext
    ): boolean {
        sendRefreshToken(res, "");
        return true;
    }

    @Query(() => User, { nullable: true })
    async currentUser(
        @Ctx() context: IExpressContext
    ): Promise<User | null> {
        const authorization = context.req.headers["authorization"];
        if (!authorization) return null;

        try {
            const token = authorization.split(" ")[1];
            const payload = verify(token, ACCESS_TOKEN_SECRET) as ContextPayload;
            context.payload = payload;
            return await User.findOne(parseInt(payload.userId)) ?? null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    @Mutation(() => Boolean)
    async deleteUserById(
        @Arg("id", () => Int) id: number,
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
    async deleteUser(
        @Ctx() { payload }: IExpressContext
    ): Promise<boolean> {
        try {
            await User.delete(payload!.userId);
            return true;
        } catch {
            return false;
        }
    }

    @Mutation(() => Boolean)
    async updateUserPassword(
        @Arg("username") username: string,
        @Arg("oldPassword") oldPassword: string,
        @Arg("newPassword") newPassword: string,
    ): Promise<boolean> {
        try {
            const user = await User.findOne({ username });
            if (!user) throw new Error("User does not exist.");

            const actualPassword = user?.password;
            if (oldPassword !== actualPassword) throw new Error("Incorrect password.")

            await User.update({ username }, { password: newPassword });
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
