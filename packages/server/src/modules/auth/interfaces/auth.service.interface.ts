import type { IUser } from '../../user/interfaces/user.interface';
import type { RegisterUserInput } from '../dto/register.input';
import type { RegistrationResponse } from '../models/registration-response.model';

export interface IAuthService {
    registerUser(
        registerUserInput: RegisterUserInput
    ): Promise<RegistrationResponse>;
    validateCredentials(
        usernameOrEmail: string,
        passwordInput: string
    ): Promise<IUser | null>;
}
