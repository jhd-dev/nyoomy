import type { FC } from 'react';
import React from 'react';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { APP_NAME } from '@nyoomy/global';
import { Link } from 'react-router-dom';
import { LoginStatus } from './LoginStatus';

export const Header: FC = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Link to="/">{APP_NAME}</Link>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexGrow: 1 }}
                    justifyContent="end"
                >
                    <LoginStatus />
                </Stack>
            </Toolbar>
        </AppBar>
    </Box>
);
