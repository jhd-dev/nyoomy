import type { FormEvent, FC } from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { IInputEvent } from '@nyoomy/common';
import { useLoginMutation } from '@nyoomy/graphql';
import InputTextField from '../components/InputTextField';

const LoginPage: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

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
            </Box>
        </>
    );
};

export default LoginPage;
