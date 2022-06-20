import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Field, Form, Formik } from 'formik';
import CustomTextField from '../components/form/CustomTextField';
import { registrationSchema } from '../validation/registrationSchema';

export interface RegistrationFormValues {
    displayName: string;
    username: string;
    email: string;
    password: string;
}

const initialValues: RegistrationFormValues = {
    displayName: '',
    username: '',
    email: '',
    password: '',
};

interface IRegistrationFormProps {
    onSubmit: (values: RegistrationFormValues) => Promise<void>;
}

export const RegistrationForm: FC<IRegistrationFormProps> = ({ onSubmit }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registrationSchema}
        validateOnBlur
    >
        {({ isSubmitting }) => (
            <Box component={Form} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Field
                        id="displayName"
                        name="displayName"
                        component={CustomTextField}
                        label="Name"
                        placeholder="Johnny Appleseed"
                        required
                        autoFocus
                    />
                    <Field
                        name="email"
                        component={CustomTextField}
                        type="email"
                        label="Email Address"
                        /* eslint-disable pii/no-email */
                        placeholder="address@example.com"
                        /* eslint-enable pii/no-email */
                        required
                    />
                    <Field
                        name="username"
                        component={CustomTextField}
                        label="Username"
                        placeholder="johnny_123"
                        required
                    />
                    <Field
                        name="password"
                        component={CustomTextField}
                        InputProps={{ type: 'password' }}
                        label="Password"
                        placeholder="********"
                        required
                    />
                    <Field name="termsAndConditions" component={Checkbox} />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create Account
                    </Button>
                </Grid>
            </Box>
        )}
    </Formik>
);
