import React, { useState } from 'react';
import { useRegisterMutation, FieldError } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {}

export const RegistrationPage: React.FC<IProps> = ({ history }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fieldErrorsInit: FieldError[] = [];
    const [fieldErrors, setFieldErrors] = useState(fieldErrorsInit);

    const [register, { error }] = useRegisterMutation();
    if (error) console.error(error);

    return (
        <form
            className="createUser"
            onSubmit={async (e): Promise<void> => {
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
            }}
        >
            <label>
                <span>Display Name: </span>
                <input
                    type="text"
                    id="name"
                    placeholder="Johnny Appleseed"
                    onChange={(e) => {
                        setName(e.target.value);
                        setFieldErrors(
                            fieldErrors.filter((err) => err.field !== 'name')
                        );
                    }}
                    required
                    autoFocus
                />
                {fieldErrors
                    .filter((err) => err.field === 'name')
                    .map((err) => (
                        <div>{err.message}</div>
                    ))}
            </label>
            <br />
            <label>
                <span>Email Address: </span>
                <input
                    type="email"
                    id="email"
                    placeholder="address@domain.com"
                    onChange={(e) => {
                        setEmail(e.target.value.toLowerCase());
                        setFieldErrors(
                            fieldErrors.filter((err) => err.field !== 'email')
                        );
                    }}
                    required
                />
                {fieldErrors
                    .filter((err) => err.field === 'email')
                    .map((err) => (
                        <div>{err.message}</div>
                    ))}
            </label>
            <br />
            <label>
                <span>Username: @</span>
                <input
                    type="text"
                    id="username"
                    placeholder="johnny123"
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setFieldErrors(
                            fieldErrors.filter(
                                (err) => err.field !== 'username'
                            )
                        );
                    }}
                    required
                />
                {fieldErrors
                    .filter((err) => err.field === 'username')
                    .map((err) => (
                        <div>{err.message}</div>
                    ))}
            </label>
            <br />
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setFieldErrors(
                            fieldErrors.filter(
                                (err) => err.field !== 'password'
                            )
                        );
                    }}
                    required
                />
                {fieldErrors
                    .filter((err) => err.field === 'password')
                    .map((err) => (
                        <div>{err.message}</div>
                    ))}
            </label>
            <br />
            <button type="submit">Create Account</button>
        </form>
    );
};
