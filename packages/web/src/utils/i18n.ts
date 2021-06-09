import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import en from '../../../../assets/locales/en/translation.json';
import jp from '../../../../assets/locales/jp/translation.json';

const supportedLocales = ['en', 'es', 'jp', 'pt'];

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: supportedLocales,
        resources: {
            en: { translation: en },
            es: { translation: {} },
            jp: { translation: jp },
            pt: { translation: {} },
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        debug: true,
    });
