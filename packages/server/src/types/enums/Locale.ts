import { registerEnumType } from 'type-graphql';

export enum Locale {
    EN_US = 'en-US',
    EN_UK = 'en-UK',
    JA_JP = 'ja-JP',
}

registerEnumType(Locale, {
    name: 'Locale',
    description: 'User locales',
});
