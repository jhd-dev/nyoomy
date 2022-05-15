import type { FC } from 'react';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { APP_NAME } from '@nyoomy/global';
import { DarkModeToggle } from './DarkModeToggle';
import { LoginStatus } from './LoginStatus';
import { RouteLink } from './RouteLink';

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
                    <RouteLink to="/">
                        <Typography
                            variant="h1"
                            fontSize="2em"
                            color={(theme) => theme.palette.text.secondary}
                        >
                            {APP_NAME}
                        </Typography>
                    </RouteLink>
                    <RouteLink to="todo">
                        <Typography
                            variant="button"
                            color={(theme) => theme.palette.text.secondary}
                        >
                            To-Do
                        </Typography>
                    </RouteLink>
                </Stack>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexGrow: 1 }}
                    justifyContent="end"
                >
                    <DarkModeToggle />
                    <LoginStatus />
                </Stack>
            </Toolbar>
        </AppBar>
    </Box>
);
