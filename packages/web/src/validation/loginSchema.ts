import { string, object } from 'yup';

export const loginSchema = object({
    usernameOrEmail: string().required('Enter your username or email address'),
    password: string().required('Enter your password'),
});
