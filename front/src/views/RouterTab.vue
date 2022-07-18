<template>
  <div>
    <v-app-bar
      app
      v-model="topbar"
      class="elevation-0"
      style="
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
      "
    >
      <v-icon
        v-if="$vuetify.breakpoint.xsOnly && drawerbar === false"
        @click="drawerbar = true"
        >mdi-menu
      </v-icon>
      <v-icon v-if="drawerbar === true" @click="drawerbar = false"
        >mdi-arrow-left
      </v-icon>
      <v-tabs
        class="d-flex justify-center"
        center-active
        dark
        color="secondary"
      >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/habilidades">Habilidades</v-tab>
        <v-tab>Portfólio</v-tab>
        <v-tab>Experiência</v-tab>
        <v-tab>Contato</v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>