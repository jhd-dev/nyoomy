import type { FormEvent, FC } from 'react';
import React, { useState } from 'react';
import type { IInputEvent } from '@nyoomy/common';
// import type { MeQuery } from '@nyoomy/graphql';
import { /* MeDocument, */ useLoginMutation } from '@nyoomy/graphql';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputTextField from '../components/InputTextField';

const LoginPage: FC = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error }] = useLoginMutation();
    if (error !== undefined) console.error(error);

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const response = await login({
            variables: {
                input: {
                    usernameOrEmail,
                    passwordInput: password,
                },
            },
            // update: (store, { data }): void => {
            //     if (data == null) return;
            //     store.writeQuery<MeQuery>({
            //         query: MeDocument,
            //         data: {
            //             me: data.login.user,
            //         },
            //     });
            // },
        });
        console.log(response);
        // history.push('/');
    };

    return (
        <Form className="credentialsForm loginForm" onSubmit={handleSubmit}>
            <Container>
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
                <Button type="submit">Login</Button>
            </Container>
        </Form>
    );
};

export default LoginPage;
