import { createContext } from 'react';
import { ThemePreference } from '@nyoomy/graphql';

// export enum ThemeId {
//     DEVICE = 'device',
//     LIGHT = 'light',
//     DARK = 'dark',
//     OLED = 'oled',
//     HIGH_CONTRAST = 'highContrast',
// }

export interface IThemeContext {
    themeId: ThemePreference;
    setThemeId?: (newTheme: ThemePreference) => void;
    devicePrefersDark: boolean;
}

export const ThemeContext = createContext<IThemeContext>({
    themeId: ThemePreference.Device,
    devicePrefersDark: false,
});
