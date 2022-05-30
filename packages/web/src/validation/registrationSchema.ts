import * as yup from 'yup';

export const registrationSchema = yup.object({
    displayName: yup.string().required('Name is required'),
    username: yup.string().required('Username is required'),
    email: yup
        .string()
        .email('Enter a valid email address')
        .required('Email address is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
});
