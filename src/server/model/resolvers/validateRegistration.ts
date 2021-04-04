import isEmail from 'validator/lib/isEmail';
import type { UserRegistrationInfo } from './UserRegistrationInfo';
import { User } from '../entity/User';
import type { FieldError } from './FieldError';

export const validateRegistration = async ({
    email,
    username,
    password,
}: UserRegistrationInfo): Promise<FieldError[]> => {
    if (!isEmail(email))
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

    const existingUser = await User.findOne({
        where: [{ email }, { username }],
    });
    if (existingUser) {
        const takenField = existingUser.email === email ? 'email' : 'username';
        const takenFieldCapitalized =
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
