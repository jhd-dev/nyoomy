import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserLoginInput } from './dto/login.input';
import { RegisterUserInput } from './dto/register.input';
import type { User } from '../../entities/user.entity';

@Resolver()
export class AuthResolver {
    public constructor(private readonly authService: AuthService) {}

    @Mutation('registerUser')
    public register(
        @Args({ name: 'input', type: () => UserLoginInput })
        input: RegisterUserInput
    ): Promise<User> {
        return this.authService.registerUser(input);
    }

    @Mutation()
    public login(
        @Args({ name: 'input', type: () => RegisterUserInput })
        input: UserLoginInput
    ): Promise<User> {
        return this.authService.validateUser(input);
    }
}
