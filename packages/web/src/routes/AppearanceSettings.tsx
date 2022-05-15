import type { FC, ReactNode } from 'react';
import React, { useMemo, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import type { MySettingsQuery } from '@nyoomy/graphql';
import {
    ThemePreference,
    useMySettingsQuery,
    useUpdateSettingsMutation,
} from '@nyoomy/graphql';
import { ThemeContext } from '../context/ThemeContext';
import type { SelectChangeEvent } from '@mui/material/Select';

const themePreferences = [
    ThemePreference.Device,
    ThemePreference.Light,
    ThemePreference.Dark,
    ThemePreference.Oled,
    ThemePreference.HighContrast,
];

interface IThemeInfo {
    label: string;
    description?: ReactNode;
}

const themePreferenceMapFn = (
    prefersDark: boolean = false
): Record<ThemePreference, IThemeInfo> => ({
    [ThemePreference.Device]: {
        label: 'Match Device Theme (Default)',
        description: `Your device seems to prefer ${
            prefersDark ? 'dark' : 'light'
        } mode.`,
    },
    [ThemePreference.Light]: { label: 'Light' },
    [ThemePreference.Dark]: { label: 'Dark' },
    [ThemePreference.Oled]: {
        label: 'Black / OLED',
        description: (
            <span>
                This dark mode is ideal for{' '}
                <Link
                    href="https://en.wikipedia.org/wiki/OLED"
                    target="_blank"
                    rel="noopener"
                    color="secondary"
                >
                    OLED
                </Link>{' '}
                screens.
            </span>
        ),
    },
    [ThemePreference.HighContrast]: { label: 'High Contrast' },
});

export const AppearanceSettings: FC = () => {
    const [themePreference, setThemePreference] = useState<ThemePreference>(
        ThemePreference.Device
    );
    const themeContext = useContext(ThemeContext);

    const themePreferenceMap = useMemo(
        () => themePreferenceMapFn(themeContext.devicePrefersDark),
        [themeContext]
    );

    const { loading } = useMySettingsQuery({
        onCompleted(data: MySettingsQuery) {
            setThemePreference(
                (prev) => data.mySettings?.themePreference ?? prev
            );
        },
    });
    const [updateSettings] = useUpdateSettingsMutation({
        refetchQueries: ['MySettings'],
        variables: { input: { themePreference } },
    });

    const handleThemeSelect = async (e: SelectChangeEvent<ThemePreference>) => {
        const value = e.target.value as ThemePreference;
        setThemePreference(value);
        if (themeContext?.setThemeId) {
            themeContext.setThemeId(value);
        }
        await updateSettings({
            variables: { input: { themePreference: value } },
        });
    };

    return (
        <Box>
            {loading && <LinearProgress />}
            <Stack>
                <FormControl>
                    <InputLabel id="theme-preference-select-label">
                        Theme
                    </InputLabel>
                    <Select
                        id="theme-preference-select"
                        labelId="theme-preference-select-label"
                        label="Theme"
                        value={themePreference}
                        onChange={handleThemeSelect}
                    >
                        {themePreferences.map((pref) => (
                            <MenuItem key={pref} value={pref}>
                                {themePreferenceMap[pref].label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>
                        {themePreferenceMap[themePreference]?.description}
                    </FormHelperText>
                </FormControl>
            </Stack>
        </Box>
    );
};
