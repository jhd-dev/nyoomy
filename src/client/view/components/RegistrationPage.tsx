import React, { useState } from 'react';
import { useRegisterMutation } from '../../generated/graphql';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {}

export const RegistrationPage: React.FC<IProps> = ({ history }) => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                        username,
                        password,
                    },
                });
                console.log(response);
                history.push("/");
            }}
        >
            <input
                type="text"
                placeholder="name"
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Create user</button>
        </form>
    );
};
