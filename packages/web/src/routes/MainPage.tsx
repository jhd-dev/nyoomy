import type { FC } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

const MainPage: FC = () => (
    <Container component="main" maxWidth="md" data-testid="App" className="App">
        <Box>
            <Header />
            <Outlet />
        </Box>
    </Container>
);

export default MainPage;
