import type { FC } from 'react';
import React, { useState } from 'react';
import {
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { ThemeContext, ThemeId } from '../context/ThemeContext';
import type { IThemeContext } from '../context/ThemeContext';

export const DarkModeToggle: FC = () => {
    const theme = useTheme();
    const [isDark, setIsDark] = useState<boolean>(
        theme.palette.mode === 'dark'
    );

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Consumer>
            {({ setThemeId }: IThemeContext) => (
                <Tooltip title={isDark ? 'Light Mode' : 'Dark Mode'}>
                    <IconButton
                        onClick={() => {
                            toggleDarkMode();
                            if (setThemeId)
                                setThemeId(
                                    isDark ? ThemeId.DARK : ThemeId.LIGHT
                                );
                        }}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Tooltip>
            )}
        </ThemeContext.Consumer>
    );
};
