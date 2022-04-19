import { ThemeId } from '../context/ThemeContext';
import { darkTheme } from './darkTheme';
import { highContrastTheme } from './highContrastTheme';
import { lightTheme } from './lightTheme';
import { oledTheme } from './oledTheme';

export * from './darkTheme';
export * from './lightTheme';
export * from './highContrastTheme';
export * from './oledTheme';

export const themes = {
    [ThemeId.DARK]: darkTheme,
    [ThemeId.LIGHT]: lightTheme,
    [ThemeId.OLED]: oledTheme,
    [ThemeId.HIGH_CONTRAST]: highContrastTheme,
};
