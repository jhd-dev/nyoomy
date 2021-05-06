import { APP_NAME } from '@nyoomy/global';
import React, { FC } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useMeQuery, useLogoutMutation } from '@nyoomy/graphql';
import { setAccessToken } from '../utils/accessToken';

export const Header: FC = () => {
    const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' });
    const [logout, { client }] = useLogoutMutation();

    let userStatus: JSX.Element | null;
    if (loading) {
        userStatus = null;
    } else if (data?.currentUser != null) {
        userStatus = (
            <div>
                <div>Logged in as: {data.currentUser.name}</div>
                <button
                    className="btn"
                    onClick={async () => {
                        await logout();
                        setAccessToken('');
                        await client.resetStore();
                    }}
                >
                    Logout
                </button>
            </div>
        );
    } else {
        userStatus = (
            <>
                <button>
                    <Link to="/register">Register</Link>
                </button>
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </>
        );
    }

    return (
        <header>
            <Link to="/">{APP_NAME}</Link>
            {userStatus}
        </header>
    );
};
