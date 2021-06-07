import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import en from './en'
import fr from './fr'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true
  },
  lang: {
    locales: { en, fr },
    current: 'fr'
  }
});
