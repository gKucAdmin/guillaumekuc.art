
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
// import other language files as needed


const i18n = createI18n({
  locale: 'en',
  messages: { en }
});


export default i18n;