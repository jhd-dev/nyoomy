import 'reflect-metadata';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './utils/i18n';
import './style/index.scss';
import './style/App.scss';
import React, { StrictMode } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import fetch from 'cross-fetch';
import { render } from 'react-dom';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';

global.fetch = fetch;

const rootElement = document.getElementById('root');
if (rootElement == null) throw new Error('Could not find #root element.');

const theme = createTheme();

render(
    <StrictMode>
        <ApolloWrapper>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container
                    component="main"
                    maxWidth="xs"
                    data-testid="App"
                    className="App"
                >
                    <Router />
                </Container>
            </ThemeProvider>
        </ApolloWrapper>
    </StrictMode>,
    rootElement
);
