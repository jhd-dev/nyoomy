import { registerEnumType } from '@nestjs/graphql';

enum ThemePreference {
    DEVICE = 'DEVICE',
    LIGHT = 'LIGHT',
    DARK = 'DARK',
    OLED = 'OLED',
    HIGH_CONTRAST = 'HIGH_CONTRAST',
}

registerEnumType(ThemePreference, {
    name: 'ThemePreference',
    description: 'The visual themes that can be used to style the app',
});

export default ThemePreference;

export const themePreferences: ThemePreference[] = [
    ThemePreference.DARK,
    ThemePreference.DEVICE,
    ThemePreference.HIGH_CONTRAST,
    ThemePreference.LIGHT,
    ThemePreference.OLED,
];
