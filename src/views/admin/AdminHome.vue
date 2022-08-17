<template>
  <div>
    <h1 class="white--text ml-16 pl-10 mt-16 mb-10" style="font-size: 32pt">
      Painel do administrador
    </h1>
    <v-row class="mx-16">
      <v-col cols="4" class="mt-10 px-10" v-for="(card, c) in cards" :key="c">
        <div
          :aspect-ratio="1 / 2"
          style="min-width: 400px"
          class="
            px-6
            rounded-xl
            primary
            primaryD--text
            pa-6
            d-flex
            flex-column
            align-center
          "
          to="/admin"
        >
          <v-icon size="100" :color="card.color">{{ card.icon }}</v-icon>
          <h1>{{ card.title }}</h1>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Habilidades",
          icon: "mdi-head-lightbulb-outline",
          color: "primaryD",
          to: "/admin/addinfos",
        },
        {
          title: "Portfolio",
          icon: "mdi-note-outline",
          color: "primaryD",
        },
        {
          title: "Experiência",
          icon: "mdi-hammer-wrench",
          color: "primaryD",
        },
        {
          title: "Contato",
          icon: "mdi-phone",
          color: "primaryD",
        },
      ],
    };
  },
};
</script>
