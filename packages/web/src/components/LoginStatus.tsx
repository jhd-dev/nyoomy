import type { FC } from 'react';
import React from 'react';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMeQuery, useLogoutMutation } from '@nyoomy/graphql';
import { Link } from 'react-router-dom';

export const LoginStatus: FC = () => {
    const { data, loading, error } = useMeQuery();
    const [logout, { client }] = useLogoutMutation();

    if (error !== undefined) {
        console.error(error);
        return <></>;
    }
    if (loading) {
        return <Typography>Loading...</Typography>;
    }
    if (data?.me != null) {
        return (
            <Box>
                <Typography>Logged in as: {data.me.username}</Typography>
                <Button
                    className="btn"
                    type="button"
                    onClick={async () => {
                        await logout();
                        await client.resetStore();
                    }}
                >
                    Logout
                </Button>
            </Box>
        );
    }
    return (
        <>
            <Button type="button">
                <Link to="/register">Register</Link>
            </Button>
            <Button type="button">
                <Link to="/login">Login</Link>
            </Button>
        </>
    );
};
