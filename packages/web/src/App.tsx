import type { FC } from 'react';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';
import { ThemeWrapper } from './components/ThemeWrapper';

export const App: FC = () => (
    <ApolloWrapper data-testid="app">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeWrapper>
                <CssBaseline />
                <Router />
            </ThemeWrapper>
        </LocalizationProvider>
    </ApolloWrapper>
);
