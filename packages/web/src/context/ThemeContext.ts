import { createContext } from 'react';

export enum ThemeId {
    DEVICE = 'device',
    LIGHT = 'light',
    DARK = 'dark',
    OLED = 'oled',
    HIGH_CONTRAST = 'highContrast',
}

export interface IThemeContext {
    themeId: ThemeId;
    setThemeId?: (newTheme: ThemeId) => void;
}

export const ThemeContext = createContext<IThemeContext>({
    themeId: ThemeId.DEVICE,
});
