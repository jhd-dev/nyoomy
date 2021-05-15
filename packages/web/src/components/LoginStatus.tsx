import type { FC } from 'react';
import React from 'react';
import { useMeQuery, useLogoutMutation } from '@nyoomy/graphql';
import { Link } from 'react-router-dom';

export const LoginStatus: FC = () => {
    const { data, loading, error } = useMeQuery({
        fetchPolicy: 'network-only',
    });
    const [logout, { client }] = useLogoutMutation();

    if (error !== undefined) {
        console.error(error);
        return <></>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (data?.currentUser != null) {
        return (
            <div>
                <div>Logged in as: {data.currentUser.displayName}</div>
                <button
                    className="btn"
                    type="button"
                    onClick={async () => {
                        await logout();
                        await client.resetStore();
                    }}
                >
                    Logout
                </button>
            </div>
        );
    }
    return (
        <>
            <button type="button">
                <Link to="/register">Register</Link>
            </button>
            <button type="button">
                <Link to="/login">Login</Link>
            </button>
        </>
    );
};
