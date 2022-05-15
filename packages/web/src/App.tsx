import type { FC } from 'react';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';
import { ThemeWrapper } from './components/ThemeWrapper';

export const App: FC = () => (
    <ApolloWrapper>
        <ThemeWrapper>
            <CssBaseline />
            <Router />
        </ThemeWrapper>
    </ApolloWrapper>
);
