import React, { useState, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { MeDocument, useLoginMutation, MeQuery } from '../../generated/graphql';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputTextField from '../components/InputTextField';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error }] = useLoginMutation();
    if (error) console.error(error);

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const response = await login({
            variables: {
                usernameOrEmail,
                password,
            },
            update: (store, { data }) => {
                if (!data) return null;
                store.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                        currentUser: data.login.user,
                    },
                });
            },
        });
        console.log(response);
        history.push('/');
    };

    return (
        <Form className="credentialsForm loginForm" onSubmit={handleSubmit}>
            <Container>
                <InputTextField
                    field="usernameOrEmail"
                    label="Username/Email"
                    inputType="text"
                    handleChange={(e: any) =>
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
                    handleChange={(e: any) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                />
                <Button type="submit">Login</Button>
                <Button type=""></Button>
            </Container>
        </Form>
    );
};

export default LoginPage;
