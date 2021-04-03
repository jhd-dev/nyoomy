import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { MeDocument, useLoginMutation, MeQuery } from '../../generated/graphql';

interface IProps extends RouteComponentProps {}

export const LoginPage: React.FC<IProps> = ({ history }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [login, { error }] = useLoginMutation();
    if (error) console.error(error);

    return (
        <form
            className="createUser"
            onSubmit={async (e): Promise<void> => {
                e.preventDefault();
                const response = await login({
                    variables: {
                        username,
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
                    }
                });
                console.log(response);
                history.push("/");
            }}
        >
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
