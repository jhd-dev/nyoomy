import type { FormEvent, FC } from 'react';
import React, { useState } from 'react';
import { CircleOutlined, Google as GoogleIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { IInputEvent } from '@nyoomy/common';
import { useLoginMutation } from '@nyoomy/graphql';
import type { LoginMutation } from '@nyoomy/graphql';
import { useNavigate } from 'react-router-dom';
import InputTextField from '../components/InputTextField';

const LoginPage: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [login, { error }] = useLoginMutation();
    if (error !== undefined) console.error(error);

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        await login({
            variables: {
                input: {
                    usernameOrEmail,
                    passwordInput: password,
                },
            },
            onCompleted(data: LoginMutation) {
                if (data?.login?.user != null) {
                    navigate('/', { replace: true });
                }
            },
        });
    };

    return (
        <>
            <Typography component="h1" variant="h5">
                Log In
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className="credentialsForm loginForm"
            >
                <Grid container spacing={2}>
                    <InputTextField
                        field="usernameOrEmail"
                        label="Username/Email"
                        inputType="text"
                        handleChange={(e: IInputEvent) =>
                            setUsernameOrEmail(e.target.value)
                        }
                        placeholder="Username or Email Address"
                        required
                        autoFocus
                    />
                    <InputTextField
                        field="password"
                        label="Password"
                        inputType="password"
                        handleChange={(e: IInputEvent) =>
                            setPassword(e.target.value)
                        }
                        placeholder="********"
                        required
                    />
                </Grid>
                <Button
                    type="submit"
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
                    <Tooltip title="Coming soon...">
                        <IconButton disabled>
                            <CircleOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Coming soon...">
                        <IconButton disabled>
                            <CircleOutlined />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>
        </>
    );
};

export default LoginPage;
