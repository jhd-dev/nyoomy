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
import { Link } from 'react-router-dom';
import { AvatarButton } from './AvatarButton';

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
                <Link to="/messages">
                    <IconButton color="secondary">
                        <MessageIcon />
                    </IconButton>
                </Link>
                <AvatarButton />
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
