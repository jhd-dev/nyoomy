/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable require-await */
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { COOKIE_NAME } from '../../constants';
import { IContext } from '../../types/interfaces/context.interface';
import { LoggerService } from '../logger/logger.service';
import { AuthService } from './auth.service';
import { AvailabilityDto } from './dto/availability.dto';
import { UserLoginInput } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';
import { UsernameAvailabilityArgs } from './dto/username-availability.args';
import { GqlLocalAuthGuard } from './guards/gql-local-auth.guard';
import { LoginResponse } from './models/login-response.model';
import { RegistrationResponse } from './models/registration-response.model';

@Resolver()
export class AuthResolver {
    public constructor(
        private readonly authService: AuthService,
        private readonly logger: LoggerService
    ) {
        this.logger.setContext(AuthResolver.name);
    }

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
                    this.logger.error(err);
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

    @Query(() => AvailabilityDto, { name: 'usernameAvailability' })
    public getUsernameAvailability(
        @Args({ name: 'input', type: () => UsernameAvailabilityArgs })
        { username, recommendationsWanted }: UsernameAvailabilityArgs
    ): Promise<AvailabilityDto> {
        return this.authService.getUsernameAvailability(
            username,
            recommendationsWanted
        );
    }

    @Query(() => String, { name: 'randomAvailableUsername', nullable: true })
    public getRandomAvailableUsername(): Promise<string | null> {
        return this.authService.generateRandomUsername();
    }
}
