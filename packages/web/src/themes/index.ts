import { ThemePreference } from '@nyoomy/graphql';
import { darkTheme } from './darkTheme';
import { highContrastTheme } from './highContrastTheme';
import { lightTheme } from './lightTheme';
import { oledTheme } from './oledTheme';

export * from './darkTheme';
export * from './lightTheme';
export * from './highContrastTheme';
export * from './oledTheme';

export const themes = {
    [ThemePreference.Dark]: darkTheme,
    [ThemePreference.Light]: lightTheme,
    [ThemePreference.Oled]: oledTheme,
    [ThemePreference.HighContrast]: highContrastTheme,
};
