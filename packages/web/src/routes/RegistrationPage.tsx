import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useRegisterMutation } from '@nyoomy/graphql';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { registrationSchema } from '../validation/registrationSchema';

interface IFormValues {
    displayName: string;
    username: string;
    email: string;
    password: string;
}

const RegistrationPage: FC = () => {
    const navigate = useNavigate();

    const formik = useFormik<IFormValues>({
        initialValues: {
            displayName: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: registrationSchema,
        async onSubmit(values: IFormValues) {
            const { displayName, email, username, password } = values;
            const response = await register({
                variables: {
                    input: { displayName, email, username, password },
                },
            });
            if (response?.data?.registerUser?.user) {
                // user now exists
                navigate('/');
            }
        },
        validateOnBlur: true,
    });

    const [register, { error }] = useRegisterMutation();
    if (error !== undefined) console.error(error);

    return (
        <>
            <PageTitle>Register</PageTitle>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className="credentialsForm registrationForm"
            >
                <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <TextField
                            name="displayName"
                            value={formik.values.displayName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.displayName &&
                                Boolean(formik.errors.displayName)
                            }
                            helperText={
                                formik.touched.displayName &&
                                formik.errors.displayName
                            }
                            label="Name"
                            placeholder="Johnny Appleseed"
                            required
                            autoFocus
                        />
                        <TextField
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            type="email"
                            label="Email Address"
                            /* eslint-disable pii/no-email */
                            placeholder="address@example.com"
                            /* eslint-enable pii/no-email */
                            required
                        />
                        <TextField
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.username &&
                                Boolean(formik.errors.username)
                            }
                            helperText={
                                formik.touched.username &&
                                formik.errors.username
                            }
                            label="Username"
                            placeholder="johnny_123"
                            required
                        />
                        <TextField
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            type="password"
                            label="Password"
                            placeholder="********"
                            required
                        />
                        <Button
                            type="submit"
                            disabled={formik.isSubmitting}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Account
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default RegistrationPage;
