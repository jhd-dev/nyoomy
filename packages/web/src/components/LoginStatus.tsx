import type { FC } from 'react';
import React from 'react';
import { AppRegistration, Person } from '@mui/icons-material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMeQuery, useLogoutMutation } from '@nyoomy/graphql';
import { Link } from 'react-router-dom';
import { AvatarButton } from './AvatarButton';

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
            <>
                <AvatarButton />
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
            </>
        );
    }
    return (
        <>
            <Link to="/login">
                <Button
                    variant="contained"
                    type="button"
                    endIcon={<Person />}
                    color="primary"
                >
                    Login
                </Button>
            </Link>
            <Link to="/register">
                <Button
                    variant="contained"
                    type="button"
                    endIcon={<AppRegistration />}
                    color="secondary"
                >
                    Register
                </Button>
            </Link>
        </>
    );
};
