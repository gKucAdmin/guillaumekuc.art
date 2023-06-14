import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import i18n from './i18n.js';

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
