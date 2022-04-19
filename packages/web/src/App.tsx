import type { FC } from 'react';
import React, { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';
import { ThemeId, ThemeContext } from './context/ThemeContext';
import { themes } from './themes';

export const App: FC = () => {
    const devicePrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [themeId, setThemeId] = useState<ThemeId>(
        devicePrefersDarkMode ? ThemeId.DARK : ThemeId.LIGHT
    );

    const theme = useMemo(
        () =>
            themeId === ThemeId.DEVICE
                ? themes[devicePrefersDarkMode ? ThemeId.DARK : ThemeId.LIGHT]
                : themes[themeId],
        [devicePrefersDarkMode, themeId]
    );

    return (
        <ApolloWrapper>
            <ThemeContext.Provider value={{ themeId, setThemeId }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router />
                </ThemeProvider>
            </ThemeContext.Provider>
        </ApolloWrapper>
    );
};
