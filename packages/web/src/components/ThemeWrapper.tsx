import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { MySettingsQuery } from '@nyoomy/graphql';
import { ThemePreference, useMySettingsQuery } from '@nyoomy/graphql';
import { ThemeContext } from '../context/ThemeContext';
import { themes } from '../themes';

export const ThemeWrapper: FC = ({ children }) => {
    const devicePrefersDark = useMediaQuery('(prefers-color-scheme: dark)');

    const [themeId, setThemeId] = useState<ThemePreference>(
        devicePrefersDark ? ThemePreference.Dark : ThemePreference.Light
    );

    const theme = useMemo(
        () =>
            themeId === ThemePreference.Device
                ? themes[
                      devicePrefersDark
                          ? ThemePreference.Dark
                          : ThemePreference.Light
                  ]
                : themes[themeId],
        [devicePrefersDark, themeId]
    );

    useMySettingsQuery({
        onCompleted(data: MySettingsQuery) {
            setThemeId((prev) => data.mySettings?.themePreference ?? prev);
        },
    });

    return (
        <ThemeContext.Provider
            value={{ themeId, setThemeId, devicePrefersDark }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
