import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import { useRegisterMutation } from '@nyoomy/graphql';
import { useNavigate } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { RegistrationForm } from '../forms/RegistrationForm';
import type { RegistrationFormValues } from '../forms/RegistrationForm';

const RegistrationPage: FC = () => {
    const navigate = useNavigate();

    const [register, { error }] = useRegisterMutation();
    if (error !== undefined) console.error(error);

    const onSubmit = async (values: RegistrationFormValues) => {
        const { displayName, email, username, password } = values;
        const response = await register({
            variables: {
                input: {
                    displayName,
                    email,
                    username,
                    password,
                },
            },
        });
        if (response?.data?.registerUser?.user) {
            // user now exists
            navigate('/');
        }
    };

    return (
        <Box>
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
                <RegistrationForm onSubmit={onSubmit} />
            </Box>
        </Box>
    );
};

export default RegistrationPage;
