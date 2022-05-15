import type { FC } from 'react';
import React from 'react';
import {
    AppRegistration,
    Message as MessageIcon,
    Person,
} from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMeQuery } from '@nyoomy/graphql';
import { AvatarButton } from './AvatarButton';
import { RouteLink } from './RouteLink';

export const LoginStatus: FC = () => {
    const { data, loading, error } = useMeQuery();

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
                <RouteLink to="/messages">
                    <IconButton color="secondary">
                        <MessageIcon />
                    </IconButton>
                </RouteLink>
                <AvatarButton />
            </>
        );
    }
    return (
        <>
            <RouteLink to="/login">
                <Button
                    variant="contained"
                    type="button"
                    endIcon={<Person />}
                    color="primary"
                >
                    Login
                </Button>
            </RouteLink>
            <RouteLink to="/register">
                <Button
                    variant="contained"
                    type="button"
                    endIcon={<AppRegistration />}
                    color="secondary"
                >
                    Register
                </Button>
            </RouteLink>
        </>
    );
};
