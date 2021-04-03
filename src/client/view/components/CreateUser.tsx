import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/Mutations';

const CreateUser: React.FC<any> = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER);
    if (error) console.error(error);

    return (
        <div className="createUser">
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
                type="text"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button
                onClick={() => createUser({
                    variables: {
                        name,
                        username,
                        password,
                    },
                })}
            >Create user</button>
        </div>
    );
};

export default CreateUser;