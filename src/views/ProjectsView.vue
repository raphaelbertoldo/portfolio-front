<template>
  <div>
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6"
        >mdi-hammer-wrench
      </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 36pt">
        Projetos
      </h1>
    </div>
    <v-row class="px-4 px-md-10">
      <v-col cols="12" md="3" v-for="(proj, i) in projects" :key="i">
        <!-- <v-card dark class="glass-fx ma-4 mx-10 mt-10 pa-6 glass=fx"
          >proj.name</v-card
        > -->
        <v-card
          :max-height="$vuetify.breakpoint.mobile ? '' : '250px'"
          min-height="450px"
          dark
          class="align-center justify-center d-flex glass-fx rounded-xl"
        >
          <div
            class="mx-4 d-flex align-center justify-center"
            style="height: auto"
            :class="$vuetify.breakpoint.mobile ? 'd-flex flex-column' : ''"
          >
            <div class="ma-md-4 my-md-8 my-0 mt-6 ma-0"></div>
            <div key="" class="my-4">
              <v-img
                class="shadow-2 rounded-xl mx-auto"
                :src="proj.img"
                :style="
                  $vuetify.breakpoint.mobile
                    ? 'max-width: 100px'
                    : 'max-width: 120px'
                "
              />
              <v-card-title
                class="d-flex flex-column font-weight-bold text-center"
              >
                <h4 class="mx-auto">{{ proj.name }}</h4>
                <v-card-subtitle class="mt-1">
                  {{ proj.description }}
                </v-card-subtitle>
              </v-card-title>

              <v-card-subtitle class="px-auto d-flex mt-1 text-center">
                <div class="mx-auto flex d-flex">
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
            "Projeto clássico do jogo da velha, projetado 100% por mim com intenção de ampliar hailidades para resolução de idéias.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["HTML", "css", "JavaScript", "VueJs"],
          repository: "https://github.com/raphaelbertoldo/the-hashgame",
        },

        {
          name: "Midi Online",
          img: "https://i.ibb.co/9hb8SPb/Novo-Projeto-4.png",
          description:
            "O projeto foi criado usando apenas HTML, CSS e JavaScript.",
          link: "https://midi-online.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/midi-online",
        },
        {
          name: "Oráculo Beats",
          img: "https://i.ibb.co/BC84Dsn/image.png",
          description: "Projeto ainda está sendo conluído...",
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
