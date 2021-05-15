import type { FormEvent, FC } from 'react';
import React, { useState } from 'react';
import type { IInputEvent } from '@nyoomy/common';
import type { FieldError } from '@nyoomy/graphql';
import { useRegisterMutation } from '@nyoomy/graphql';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import type { RouteComponentProps } from 'react-router-dom';
import { Header } from '../components/Header';
import InputTextField from '../components/InputTextField';

const RegistrationPage: FC<RouteComponentProps> = ({ history }) => {
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
                displayName,
                email,
                username,
                password,
            },
        });
        console.log(response);
        if (response?.data?.registerUser?.errors == null) {
            history.push('/');
            return;
        }
        setFieldErrors(response.data.registerUser.errors);
    };

    const handleChangeBuilder = (
        field: string,
        setter: (value: React.SetStateAction<string>) => void
    ) => (e: IInputEvent): void => {
        setter(e.target.value);
        setFieldErrors(fieldErrors.filter((err) => err.field !== field));
    };

    return (
        <>
            <Header />
            <Form
                className="credentialsForm registrationForm"
                onSubmit={handleSubmit}
            >
                <Container>
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
                        handleChange={handleChangeBuilder('email', setEmail)}
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
                    >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Form.ControlGroupPrepend">
                                @
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputTextField>
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
                    <Button type="submit">Create Account</Button>
                </Container>
            </Form>
        </>
    );
};

export default RegistrationPage;
