import type { FC } from 'react';
import React from 'react';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { APP_NAME } from '@nyoomy/global';
import { Link } from 'react-router-dom';
import { LoginStatus } from './LoginStatus';

export const Header: FC = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexGrow: 1 }}
                    justifyContent="start"
                >
                    <Link to="/">
                        <Typography variant="h1" fontSize="2em">
                            {APP_NAME}
                        </Typography>
                    </Link>
                    <Link to="todo">
                        <Typography variant="button">To-Do</Typography>
                    </Link>
                </Stack>
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
