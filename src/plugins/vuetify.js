import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#07b0f2",
        primaryL: "#68e2ff",
        primaryD: "#0081bf",
        secondary: "#ffcb29",
        complementary: "#ff9100",
        accent: "#07b0f2",
        error: "#f2073a",
      },
      dark: {
        primary: "#07b0f2",
        primaryL: "#68e2ff",
        primaryD: "#0081bf",
        secondary: "#ffcb29",
        complementary: "#ff9100",
        accent: "#07b0f2",
        error: "#f2073a",
      },
    },
  },
});
