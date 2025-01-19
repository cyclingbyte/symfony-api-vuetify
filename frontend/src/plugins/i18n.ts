import { createI18n } from 'vue-i18n';

// localization from vuetify
import { en, th /*, de*/ } from 'vuetify/locale';

// localization from project
import enI18n from '@/locales/en.json';

const defaultLocale = 'en';

const getStartingLocale = () => {
  const browserLocale = navigator?.language?.split('-')[0];
  const lastLocale = localStorage.getItem('last-locale');

  return lastLocale && Object.keys(messages).includes(lastLocale)
    ? lastLocale
    : browserLocale && Object.keys(messages).includes(browserLocale)
      ? browserLocale
      : defaultLocale;
};

const messages = {
  en: { ...enI18n, $vuetify: { ...en } },
};

const instance = createI18n({
  legacy: false,
  locale: getStartingLocale(),
  fallbackLocale: 'en',
  messages,
});

export default instance;

export const i18n = instance.global;
