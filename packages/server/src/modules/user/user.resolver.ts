/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'reflect-metadata';
import { Injectable, Logger, UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query, Args, ID, Context } from '@nestjs/graphql';
import { COOKIE_NAME } from '@nyoomy/global';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { IContext } from '../../types/interfaces/context.interface';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { UpdatePasswordInput } from './dto/update-password.input';
import { User } from './models/user.entity';
import { UserService } from './user.service';

/**
 * GraphQL resolver for the user table.
 */
@Injectable()
@Resolver(() => User)
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Query(() => [User], { nullable: true, name: 'users' })
    @UseGuards(AuthenticatedGuard)
    public getAllUsers(@CurrentUser() user: User): Promise<User[]> {
        return this.userService.getAll(user);
    }

    @Query(() => User, { nullable: true, name: 'me' })
    @UseGuards(AuthenticatedGuard)
    public getCurrentUser(@CurrentUser() user: User): User {
        Logger.log(user);
        return user;
    }

    // @Mutation(() => RegistrationResponse)
    // public addDummyUser(): Promise<RegistrationResponse> {
    //     return this.registerUser({
    //         displayName: 'q',
    //         email: 'q@q.com',
    //         username: 'q',
    //         password: 'qqqqqqqq',
    //     });
    // }

    @Mutation(() => Boolean)
    public async deleteUserById(
        @Args({ name: 'id', type: () => ID }) id: string
    ): Promise<boolean> {
        try {
            await this.userService.deleteById(id);
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
            await this.userService.deleteById(req.session.userId);
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
