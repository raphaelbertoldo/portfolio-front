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
    <v-row class="px-4 px-md-10">
      <v-col cols="12" md="4" v-for="(proj, i) in projects" :key="i">
        <!-- <v-card dark class="glass-fx ma-4 mx-10 mt-10 pa-6 glass=fx"
          >proj.name</v-card
        > -->
        <v-card
          :max-height="$vuetify.breakpoint.mobile ? '' : '250px'"
          min-height="250px"
          dark
          class="align-center justify-center d-flex glass-fx rounded-xl"
        >
          <div
            class="mx-4 d-flex align-center justify-center"
            style="height: auto"
            :class="$vuetify.breakpoint.mobile ? 'd-flex flex-column' : ''"
          >
            <div class="ma-md-4 my-md-8 my-0 mt-6 ma-0">
              <v-img
                class="shadow-2 rounded-xl"
                :src="proj.img"
                :style="
                  $vuetify.breakpoint.mobile
                    ? 'max-width: 100px'
                    : 'max-width: 120px'
                "
              />
            </div>
            <div key="" class="my-4">
              <v-card-title class="font-weight-bold text-center">
                {{ proj.name }}
              </v-card-title>
              <v-card-subtitle class="mt-1">
                {{ proj.description }}
              </v-card-subtitle>

              <v-card-subtitle class="mt-1 text-center">
                <a
                  class=""
                  v-if="proj.link"
                  :href="proj.link"
                  target="blank"
                  style="text-decoration: none"
                  ><v-btn block class="secondary black--text block d-flex flex"
                    >Ir</v-btn
                  ></a
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
  name: "ProjectsView",

  data() {
    return {
      projects: [
        {
          name: "Jogo da Velha",
          img: "https://i.ibb.co/qmWBVQv/Novo-Projeto.png",
          description:
            "Projeto 100% autoral e indepedente para evolução dos meus estudos no Front-end.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["HTML", "css", "JavaScript"],
        },

        {
          name: "Em breve !",
          img: "",
          description: "",
          link: "",
        },
        {
          name: "Em breve !",
          img: "",
          description: "",
          link: "",
        },
        {
          name: "Em breve !",
          img: "",
          description: "",
          link: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.v-card__title {
  word-break: break-word;
}
</style>
