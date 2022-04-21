import type ThemePreference from '../../../types/enums/theme-preference.enum';

export interface IUserSettings {
    language: string;
    pin?: string;
    pinTimeout?: number;
    themePreference: ThemePreference;
    isPublic: boolean;
}
