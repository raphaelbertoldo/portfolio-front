import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      
    themes: {
      light: {
        primary: '#07b0f2',
        primaryL: '#68e2ff',
        primaryD: '#0081bf',
        secondary: '#ffcb29',
        complementary: '#ff9100',
        accent: '#07b0f2',
        error: '#f2073a',
      },
      dark: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
