<template>
  <div>
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6"
        >mdi-hammer-wrench
      </v-icon>
      <h1 class="block gradiente-yellow-1" style="font-size: 36pt">
        Projetos
      </h1>
    </div>
    <v-row class="px-4 px-md-10">
      <!-- cols="12" -->
      <v-col
        cols="12"
        :md="
          $vuetify.breakpoint.width < 1800
            ? '6'
            : '' && $vuetify.breakpoint.width < 900
            ? '12'
            : '3'
        "
        v-for="(proj, i) in projects"
        :key="i"
        class=""
      >
        <v-card
          :height="$vuetify.breakpoint.mobile ? '' : '100%'"
          class="
            pa-2 pa-md-4
            d-flex
            align-content-space-between
            flex-wrap
            justify-center
            glass-fx
          "
          dark
        >
          <v-card-text class="mx-auto">
            <div class="d-flex">
              <v-row class="d-flex">
                <v-col cols="4" class="d-flex my-auto">
                  <v-img
                  :aspect-ratio="1 / 1"
                  class="my-auto shadow-2 rounded-xl mx-auto"
                  :src="proj.img"
                  :style="
                  $vuetify.breakpoint.mobile
                  ? 'max-width: 100px; max-height: 100px; min-width: 100px; min-height: 100px; border: solid 1px rgba(60, 60, 60, 0.8'
                  : 'max-width: 120px; max-height: 120px; min-width: 120px; min-height: 120px; border: solid 1px rgba(60, 60, 60, 0.8'
                  "
                  />
                </v-col>
                <v-col cols="8" >
                  <h2 class="mb-4">{{ proj.name }}</h2>
                  {{ proj.description }}
                  <div class="mx-auto flex d-flex mt-4">
                    <a
                      class="mx-2"
                      v-if="proj.link"
                      :href="proj.link"
                      target="blank"
                      style="text-decoration: none"
                    >
                      <v-btn
                        block
                        outlined
                        color="secondary"
                        class="black--text block d-flex flex"
                        >Acessar
                      </v-btn>
                    </a>
                    <a
                      class="mx-2"
                      v-if="proj.repository"
                      :href="proj.repository"
                      target="blank"
                      style="text-decoration: none"
                    >
                      <v-btn
                        block
                        outlined
                        color="primary"
                        class="black--text block d-flex flex"
                        >Repositório
                      </v-btn>
                    </a>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
         
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ProjectsView",
  mounted() {
    this.handleLoad();
  },

  methods: {
    handleLoad() {
      this.$vloading.show();
      setTimeout(() => {
        this.$vloading.hide();
      }, 1000);
    },
  },

  data() {
    return {
      projects: [
        {
          name: "Jogo da Velha",
          img: "https://i.ibb.co/qmWBVQv/Novo-Projeto.png",
          description:
            "Projeto clássico do jogo da velha, projetado 100% por mim com intenção de ampliar hailidades para resolução de idéias.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["HTML", "css", "JavaScript", "VueJs"],
          repository: "https://github.com/raphaelbertoldo/the-hashgame",
        },
        {
          name: "Midi Online",
          img: "https://i.ibb.co/9hb8SPb/Novo-Projeto-4.png",
          description:
            "O projeto de um piano digital que foi criado usando apenas HTML, CSS e JavaScript.",
          link: "https://midi-online.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/midi-online",
        },
        {
          name: "Atomic App",
          img: "https://i.ibb.co/ZSCBFWH/Captura-de-Tela-2024-05-07-a-s-23-17-16.png",
          description:
            "Projeto para aprimoramento das habilidades e para estudos criado com vue 3.",
          link: "https://atomic-raphaels-projects-281f551e.vercel.app/",
          repository: "https://github.com/raphaelbertoldo/atomic",
        },
        {
          name: "Oráculo Beats",
          img: "https://i.ibb.co/BC84Dsn/image.png",
          description: "Projeto iniciado mas ainda está sendo conluído...",
          link: "https://oraculobeats.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
        },
        {
          name: "Api para rede social",
          img: "https://i.ibb.co/jV1DTsX/640px-Devicon-css3-plain-svg-4.png",
          description:
            "Projeto backend com autenticação de usuários, sistema de upload de fotos e posts dos usuários.",
          link: "",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
        },
        {
          name: "Lista de tarefas",
          img: "https://i.ibb.co/42CpgHV/Novo-Projeto-5.png",
          description: "Meu primeiro projeto usando vuetify.",
          link: "https://curso-vuetify.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/Curso-Vuetify",
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
