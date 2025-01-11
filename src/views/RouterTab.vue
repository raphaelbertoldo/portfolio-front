<template>
  <div class="">
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawerbar"
      class="d-flex elevation-0"
      style="
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
      "
    >
      <v-list dense nav class="mt-16">
        <v-list-item
          v-for="(itemDrawerBar, i) in items"
          :key="i"
          link
          :to="itemDrawerBar.to"
          class=""
        >
          <v-list-item-content>
            <v-list-item-title to="/habilidades" class="my-6 gradiente-yellow-1"
              ><h2>
                {{ $t(itemDrawerBar.title) }}
              </h2></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      v-model="topbar"
      class="elevation-0"
      style="
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
      "
    >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          class="text-none px-2"
          color="white"
          rounded
          dark
        >
          <span class="text-h5 mr-2">{{ languages.find(l => l.code === currentLanguage).flag }}</span>
          {{ $t(`language.${currentLanguage}`) }}
        </v-btn>
      </template>
      <v-list dark>
        <v-list-item
          v-for="(lang, i) in languages"
          :key="i"
          @click="changeLanguage(lang.code)"
          class="px-4"
        >
          <v-list-item-title class="d-flex align-center">
            <span class="text-h5 mr-2">{{ lang.flag }}</span>
            {{ $t(`language.${lang.code}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>

      <v-tabs
        v-if="!$vuetify.breakpoint.md && $vuetify.breakpoint.width > 600"
        class="d-flex justify-center"
        center-active
        dark
        color="secondary"
      >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab v-for="(item, ii) in items" :key="ii" :to="item.to">
          {{ $t(item.title) }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>
      <v-icon color="white" @click="drawerbar = !drawerbar">mdi-menu</v-icon>

    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawerbar: false,
      topbar: true,
      currentLanguage: this.$i18n.locale,
      languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' }
      ],
      items: [
        { title: "nav.home", to: "/" },
        { title: "nav.skills", to: "/skills" },
        { title: "nav.projects", to: "/projects" },
        { title: "nav.contact", to: "/contact" },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
    }
  },
  created() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.$i18n.locale = savedLanguage;
    }
  }
};
</script>
