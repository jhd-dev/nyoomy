import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { MeDocument, useLoginMutation, MeQuery } from '../../generated/graphql';

interface IProps extends RouteComponentProps {}

export const LoginPage: React.FC<IProps> = ({ history }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { error }] = useLoginMutation();
    if (error) console.error(error);

    return (
        <form
            className="createUser"
            onSubmit={async (e): Promise<void> => {
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
            }}
        >
            <label>
                <span>Username or Email: </span>
                <input
                    type="text"
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};
