import React, { useState } from 'react';
import { useRegisterMutation } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {}

export const RegistrationPage: React.FC<IProps> = ({ history }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);

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
                if (response.data.registerUser?.error) {
                    switch (response.data.registerUser?.error.taken) {
                        case 'email':
                            setEmailTaken(true);
                            break;
                        case 'username':
                            setUsernameTaken(true);
                            break;
                        default:
                            console.error('Unknown registerUser error');
                            break;
                    }
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
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoFocus
                />
            </label>
            <br />
            <label>
                <span>Email Address: </span>
                <input
                    type="email"
                    id="email"
                    placeholder="address@domain.com"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailTaken(false);
                    }}
                    required
                />
                {emailTaken && (
                    <div className="err">
                        Email address "{email}" is already taken.
                    </div>
                )}
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
                        setUsernameTaken(false);
                    }}
                    required
                />
                {usernameTaken && (
                    <div className="err">
                        Username "@{username}" is already taken.
                    </div>
                )}
            </label>
            <br />
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Create Account</button>
        </form>
    );
};
