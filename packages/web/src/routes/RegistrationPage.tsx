import type { FormEvent, FC } from 'react';
import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import type { IInputEvent } from '@nyoomy/common';
import type { FieldError } from '@nyoomy/graphql';
import { useRegisterMutation } from '@nyoomy/graphql';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import InputTextField from '../components/InputTextField';

const RegistrationPage: FC = () => {
    const navigate = useNavigate();

    const [displayName, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldErrors, setFieldErrors] = useState([] as FieldError[]);

    const [register, { error }] = useRegisterMutation();
    if (error !== undefined) console.error(error);

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const response = await register({
            variables: {
                input: { displayName, email, username, password },
            },
        });
        console.log(response);
        if (response?.data?.registerUser?.user) {
            navigate('/');
            // return;
        }
        // setFieldErrors(response.data.registerUser.errors);
    };

    const handleChangeBuilder =
        (
            field: string,
            setter: (value: React.SetStateAction<string>) => void
        ) =>
        (e: IInputEvent): void => {
            setter(e.target.value);
            setFieldErrors(fieldErrors.filter((err) => err.field !== field));
        };

    return (
        <>
            <Header />
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                className="credentialsForm registrationForm"
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <InputTextField
                            field="name"
                            label="Display Name"
                            inputType="text"
                            errors={fieldErrors.filter(
                                (err) => err.field === 'name'
                            )}
                            handleChange={handleChangeBuilder('name', setName)}
                            placeholder="Johnny Appleseed"
                            required
                            autoFocus
                        />
                        <InputTextField
                            field="email"
                            label="Email Address"
                            inputType="email"
                            errors={fieldErrors.filter(
                                (err) => err.field === 'email'
                            )}
                            handleChange={handleChangeBuilder(
                                'email',
                                setEmail
                            )}
                            /* eslint-disable pii/no-email */
                            placeholder="address@example.com"
                            /* eslint-enable pii/no-email */
                            required
                        />
                        <InputTextField
                            field="username"
                            label="Username"
                            inputType="text"
                            errors={fieldErrors.filter(
                                (err) => err.field === 'username'
                            )}
                            handleChange={handleChangeBuilder(
                                'username',
                                setUsername
                            )}
                            placeholder="johnny_123"
                            required
                        />
                        <InputTextField
                            field="password"
                            label="Password"
                            inputType="password"
                            errors={fieldErrors.filter(
                                (err) => err.field === 'password'
                            )}
                            handleChange={handleChangeBuilder(
                                'password',
                                setPassword
                            )}
                            placeholder="********"
                            required
                        />
                        <Button
                            type="submit"
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
