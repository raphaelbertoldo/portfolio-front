<template>
  <div>
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6"
        >mdi-hammer-wrench
      </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 42pt">
        Projetos
      </h1>
    </div>
    <v-row class="px-10">
      <v-col cols="4" v-for="(proj, i) in projects" :key="i">
        <!-- <v-card dark class="glass-fx ma-4 mx-10 mt-10 pa-6 glass=fx"
          >proj.name</v-card
        > -->
        <v-card
          max-height="250px"
          min-height="250px"
          dark
          v-if="$vuetify.breakpoint.width > 1500"
          class="align-center justify-center d-flex glass-fx rounded-xl"
        >
          <div
            class="mx-4 d-flex align-center justify-center"
            style="height: auto"
          >
            <div class="ma-4 my-8">
              <v-img
                class="shadow-2 rounded-xl"
                :src="proj.img"
                width="150px"
                height="150px"
              />
            </div>
            <div style="width: 350px" key="" class="my-10">
              <v-card-title class="font-weight-bold">
                {{ proj.name }}
              </v-card-title>
              <v-card-subtitle class="mt-1">
                {{ proj.description }}
              </v-card-subtitle>
              <v-card-subtitle class="mt-1">
                <a
                  :href="proj.link"
                  target="blank"
                  style="text-decoration: none"
                  ><v-btn class="secondary black--text">Ir</v-btn></a
                >
              </v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Jogo da Velha",
          img: "https://i.ibb.co/0K9H72X/Screenshot-from-2022-09-19-12-06-58.png",
          description:
            "Projeto 100% autoral e indepedente para evolução dos meus estudos.",
          link: "https://the-hash-game.netlify.app/",
        },
        {
          name: "Jogo da Velha",
          img: "https://i.ibb.co/0K9H72X/Screenshot-from-2022-09-19-12-06-58.png",
          description:
            "Projeto 100% autoral e indepedente para evolução dos meus estudos.",
          link: "",
        },
      ],
    };
  },
};
</script>
