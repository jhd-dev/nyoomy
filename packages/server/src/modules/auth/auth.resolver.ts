/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable require-await */
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { COOKIE_NAME } from '../../constants';
import { IContext } from '../../types/interfaces/context.interface';
import { AuthService } from './auth.service';
import { UserLoginInput } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';
import { GqlLocalAuthGuard } from './guards/gql-local-auth.guard';
import { LoginResponse } from './models/login-response.model';
import { RegistrationResponse } from './models/registration-response.model';

@Resolver()
export class AuthResolver {
    public constructor(private readonly authService: AuthService) {}

    @Mutation(() => LoginResponse, { nullable: true })
    @UseGuards(GqlLocalAuthGuard)
    public login(
        @Args({ name: 'input', type: () => UserLoginInput })
        input: UserLoginInput
    ): Promise<LoginResponse> {
        return this.authService.getLoginResponse(input);
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

    @Mutation(() => RegistrationResponse)
    public registerUser(
        @Args('input') input: RegisterUserInput
    ): Promise<RegistrationResponse> {
        return this.authService.registerUser(input);
    }
}
