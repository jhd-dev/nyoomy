import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { COOKIE_NAME } from '../../constants';
import { IContext } from '../../types/interfaces/context.interface';
import { User } from '../user/models/user.entity';
import { AuthService } from './auth.service';
import { UserLoginInput } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';

@Resolver()
export class AuthResolver {
    public constructor(private readonly authService: AuthService) {}

    @Mutation(() => User, { name: 'registerUser' })
    public register(
        @Args({ name: 'input', type: () => RegisterUserInput })
        input: RegisterUserInput
    ): Promise<User> {
        return this.authService.register(input);
    }

    @Mutation(() => User, { nullable: true })
    public login(
        @Args({ name: 'input', type: () => UserLoginInput })
        input: UserLoginInput
    ): Promise<User | null> {
        return this.authService.validateUser(input);
    }

    @Mutation(() => Boolean)
    public logout(@Context() { req, res }: IContext): Promise<boolean> {
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
}
