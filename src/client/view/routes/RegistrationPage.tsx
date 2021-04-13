import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import { useRegisterMutation, FieldError } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputTextField from '../components/InputTextField';

const RegistrationPage: React.FC<RouteComponentProps> = ({ history }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fieldErrorsInit: FieldError[] = [];
    const [fieldErrors, setFieldErrors] = useState(fieldErrorsInit);

    const [register, { error }] = useRegisterMutation();
    if (error) console.error(error);

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        const response = await register({
            variables: {
                name,
                email,
                username,
                password,
            },
        });
        console.log(response);
        if (!response?.data) return;
        if (response.data.registerUser?.errors) {
            setFieldErrors(response.data.registerUser.errors);
            return;
        }
        history.push('/');
    };

    const handleChangeBuilder = (
        field: string,
        setter: (value: React.SetStateAction<string>) => void
    ): ChangeEventHandler => (e: any): void => {
        setter(e?.target?.value);
        setFieldErrors(fieldErrors.filter((err) => err.field !== field));
    };

    return (
        <Form
            className="credentialsForm registrationForm"
            onSubmit={handleSubmit}
        >
            <Container>
                <InputTextField
                    field="name"
                    label="Display Name"
                    inputType="text"
                    errors={fieldErrors.filter((err) => err.field === 'name')}
                    handleChange={handleChangeBuilder('name', setName)}
                    placeholder="Johnny Appleseed"
                    required
                    autoFocus
                />
                <InputTextField
                    field="email"
                    label="Email Address"
                    inputType="email"
                    errors={fieldErrors.filter((err) => err.field === 'email')}
                    handleChange={handleChangeBuilder('email', setEmail)}
                    placeholder="address@domain.com"
                    required
                />
                <InputTextField
                    field="username"
                    label="Username"
                    inputType="text"
                    errors={fieldErrors.filter(
                        (err) => err.field === 'username'
                    )}
                    handleChange={handleChangeBuilder('username', setUsername)}
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
                    handleChange={handleChangeBuilder('password', setPassword)}
                    placeholder="********"
                    required
                />
                <Button type="submit">Create Account</Button>
            </Container>
        </Form>
    );
};

export default RegistrationPage;
