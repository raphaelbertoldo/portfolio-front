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
                {{ itemDrawerBar.title }}
              </h2></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block to="/admin/login">
            <v-icon small class="mr-2">mdi-lock-open-outline</v-icon>
            Painel Admin
          </v-btn>
        </div>
      </template> -->
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
      <v-icon color="white" @click="drawerbar = !drawerbar">mdi-menu</v-icon>

      <v-tabs
        v-if="!$vuetify.breakpoint.md && $vuetify.breakpoint.width > 600"
        class="d-flex justify-center"
        center-active
        dark
        color="secondary"
      >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab v-for="(item, ii) in items" :key="ii" :to="item.to">
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawerbar: false,
      topbar: true,
      items: [
        { title: "Inicio", to: "/" },
        { title: "Habilidades", to: "/habilidades" },
        { title: "Projetos", to: "/projetos" },
        { title: "Contato", to: "/contato" },
      ],
      right: null,
    };
  },
};
</script>
