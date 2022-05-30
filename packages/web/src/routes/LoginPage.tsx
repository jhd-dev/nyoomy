import type { FC } from 'react';
import React from 'react';
import { CircleOutlined, Google as GoogleIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useLoginMutation } from '@nyoomy/graphql';
import type { LoginMutation } from '@nyoomy/graphql';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { loginSchema } from '../validation/loginSchema';

interface IFormValues {
    usernameOrEmail: string;
    password: string;
}

const LoginPage: FC = () => {
    const navigate = useNavigate();

    const [login, { error }] = useLoginMutation({
        onCompleted(data: LoginMutation) {
            if (data?.login?.user != null) {
                navigate('/', { replace: true });
            }
        },
    });
    if (error !== undefined) console.error(error);

    const formik = useFormik<IFormValues>({
        initialValues: {
            usernameOrEmail: '',
            password: '',
        },
        validationSchema: loginSchema,
        async onSubmit(values: IFormValues) {
            const { usernameOrEmail, password } = values;
            await login({
                variables: {
                    input: { usernameOrEmail, passwordInput: password },
                },
            });
        },
        validateOnBlur: true,
    });

    return (
        <>
            <PageTitle>Log In</PageTitle>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className="credentialsForm loginForm"
            >
                <Grid container spacing={2}>
                    <TextField
                        name="usernameOrEmail"
                        value={formik.values.usernameOrEmail}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.usernameOrEmail &&
                            Boolean(formik.errors.usernameOrEmail)
                        }
                        helperText={
                            formik.touched.usernameOrEmail &&
                            formik.errors.usernameOrEmail
                        }
                        type="text"
                        label="Username/Email"
                        placeholder="Username or Email Address"
                        required
                        autoFocus
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
                            formik.touched.password && formik.errors.password
                        }
                        type="password"
                        label="Password"
                        placeholder="********"
                        required
                    />
                </Grid>
                <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
                <Divider />
                <Typography>Or log in with:</Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Tooltip title="Log in with Google">
                        <Link href="auth/google/">
                            <IconButton
                                sx={{
                                    backgroundColor: '#ddeeff',
                                }}
                            >
                                <GoogleIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <IconButton disabled>
                        <CircleOutlined />
                    </IconButton>
                    <IconButton disabled>
                        <CircleOutlined />
                    </IconButton>
                </Stack>
            </Box>
        </>
    );
};

export default LoginPage;
