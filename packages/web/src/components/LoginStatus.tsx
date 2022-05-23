import type { FC } from 'react';
import React from 'react';
import {
    AppRegistration as AppRegistrationIcon,
    Message as MessageIcon,
    Person as PersonIcon,
} from '@mui/icons-material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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
                    endIcon={<PersonIcon />}
                    color="primary"
                >
                    Login
                </Button>
            </RouteLink>
            <RouteLink to="/register">
                <Button
                    variant="contained"
                    type="button"
                    endIcon={<AppRegistrationIcon />}
                    color="secondary"
                >
                    Register
                </Button>
            </RouteLink>
        </>
    );
};
