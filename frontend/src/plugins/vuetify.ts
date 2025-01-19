// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import * as allComponents from 'vuetify/components';
import { VuetifyDateAdapter } from 'vuetify/lib/composables/date/adapters/vuetify';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { useI18n } from 'vue-i18n';
import i18n from './i18n';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...allComponents,
  },
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
  },
  date: {
    adapter: VuetifyDateAdapter,
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
