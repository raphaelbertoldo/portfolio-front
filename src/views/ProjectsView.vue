<template>
  <div>
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6"
        >mdi-hammer-wrench
      </v-icon>
      <h1 class="block gradiente-yellow-1" style="font-size: 36pt">Projetos</h1>
    </div>
    <v-row class="px-4 px-md-10">
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
          class="pa-2 pa-md-4 d-flex align-content-space-between flex-wrap justify-center glass-fx"
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
                <v-col cols="8">
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
import nestIcon from "../assets/images/projects/nestjs.png";
import ecommerceImage from "../assets/images/projects/ecom.webp";
import atomicImage from "../assets/images/projects/atomic.png";
import oraculoImg from "../assets/images/projects/oraculo.png";
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
          name: "E-commerce Microservices API",
          img: ecommerceImage,
          description:
            "This project has development to improve my architeture skills, has used Node.js, Express, MongoDB, and RabbitMQ.",
          skills: ["Nodes.js", "Express", "RabbitMQ", "MongoDB"],
          repository: "https://github.com/raphaelbertoldo/ecommerce-ms",
        },
        {
          name: "The Hash Game",
          img: "https://i.ibb.co/qmWBVQv/Novo-Projeto.png",
          description:
            "Classic tic-tac-toe project, designed 100% by me with the intention of enhancing skills for idea resolution.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/the-hashgame",
        },
        {
          name: "Atomic App",
          img: atomicImage,
          description:
            "Project for skill improvement and study created with Vue 3.",
          link: "https://atomic-raphaels-projects-281f551e.vercel.app/",
          repository: "https://github.com/raphaelbertoldo/atomic",
        },
        {
          name: "API for a social network",
          img: nestIcon,
          description:
            "Backend project with user authentication, photo upload system, and user posts.",
          link: "",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
        },
        {
          name: "Oráculo Beats",
          img: oraculoImg,
          description: "Project started but still being completed...",
          link: "https://oraculobeats.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
        },
        {
          name: "Midi Online",
          img: "https://i.ibb.co/9hb8SPb/Novo-Projeto-4.png",
          description:
            "The project of a digital piano that was created using only HTML, CSS, and JavaScript.",
          link: "https://midi-online.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/midi-online",
        },
        {
          name: "To-do list",
          img: "https://i.ibb.co/42CpgHV/Novo-Projeto-5.png",
          description: "To-do list created using vue.js and vuetify.",
          link: "https://curso-vuetify.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/to-do-list",
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
