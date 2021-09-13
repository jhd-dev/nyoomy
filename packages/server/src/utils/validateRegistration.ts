import { getConnection } from 'typeorm';
import isEmail from 'validator/lib/isEmail';
import { User } from '../entities/user.entity';
import type { RegisterUserInput } from '../modules/user/dto/register.input';
import type { FieldError } from '../types/responses/field-error.model';

export const validateRegistration = async ({
    email,
    username,
    password,
}: RegisterUserInput): Promise<FieldError[]> => {
    if (!isEmail(String(email)))
        return [
            {
                field: 'email',
                message: 'Email address is invalid.',
            },
        ];

    if (username.includes('@'))
        return [
            {
                field: 'username',
                message: 'Username cannot contain symbol "@".',
            },
        ];

    if (password.length < 8)
        return [
            {
                field: 'password',
                message: 'Password must be at least 8 characters long.',
            },
        ];

    const existingUser: User | undefined = await getConnection()
        .getRepository(User)
        .findOne({
            where: [{ email }, { username }],
        });
    if (existingUser !== undefined) {
        const takenField: string =
            existingUser.email === email ? 'email' : 'username';
        const takenFieldCapitalized: string =
            takenField[0].toUpperCase() + takenField.substring(1);
        return [
            {
                field: takenField,
                message: `${takenFieldCapitalized} is already used by another account.`,
            },
        ];
    }

    return [];
};
