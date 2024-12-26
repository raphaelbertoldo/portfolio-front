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
                        ><v-icon class="mr-1" small>
                          mdi-desktop-classic
                        </v-icon>
                        UI
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
                      >
                        <v-icon class="mr-1" small> mdi-xml </v-icon>
                        Code
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
import movieStorm from "../assets/images/projects/movieStorm.png";
import movieStormApi from "../assets/images/projects/movieStormApi.png";
import atomicImage from "../assets/images/projects/atomic.png";
import oraculoImg from "../assets/images/projects/oraculo.png";
import oraculoApiImg from "../assets/images/projects/oraculo-api.png";
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
          name: "Brazilians in USA - Community Portal",
          img: `https://pub-2ef3f3f83051412fb2c3429d023b815f.r2.dev/screencapture-ass-br-eua-demo-netlify-app-2024-12-26-20_23_55.png`,
          description:
            "Institutional portal developed to connect and assist Brazilians in the United States. The site provides essential resources such as informative guides on immigration, employment, housing, and education, along with a directory of Brazilian services and professionals. ",
          link: "https://ass-br-eua-demo.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/abeua-demo",
        },
        {
          name: "European Citizenship Services - Institutional Portal",
          img: "https://pub-2ef3f3f83051412fb2c3429d023b815f.r2.dev/site-inst-cid-ue.png",
          description:
            "An institutional portal designed to provide information and assistance for European citizenship services. The site features essential resources including guides on citizenship applications, legal requirements, and a directory of professionals offering related services.",
          link: "https://cidadania-ue-demo.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/ue-cid-demo",
        },
        {
          name: "Movie Storm",
          img: movieStorm,
          description:
            "A user interface where users can explore various hit movies from the past year, rate these movies, and get more recommendations.",
          link: "https://movie-storm.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/moviestorm-frontend",
        },

        {
          name: "API - Movie Storm",
          img: movieStormApi,
          description:
            "This project is a GraphQL API for managing movies, genres, and users. It also includes search and recommendation algorithms.",
          skills: ["GraphQL", "Node.js", "MongoDB", "JavaScript"],
          repository: "https://github.com/raphaelbertoldo/moviestorm-backend",
        },
        {
          name: "E-commerce Microservices API",
          img: ecommerceImage,
          description:
            "This project was developed to improve my architecture skills, using Node.js, Express, MongoDB, and RabbitMQ.",
          skills: ["Node.js", "Express", "RabbitMQ", "MongoDB"],
          repository: "https://github.com/raphaelbertoldo/ecommerce-ms",
        },
        {
          name: "The Hash Game",
          img: "https://i.ibb.co/qmWBVQv/Novo-Projeto.png",
          description:
            "A classic tic-tac-toe project, fully designed by me with the goal of enhancing problem-solving skills.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/the-hashgame",
        },

        {
          name: "Oráculo Beats",
          img: oraculoImg,
          description:
            "A website for a beatmaker to sell beats, instrumentals, and other services. The site features a track listing and music player.",
          link: "https://oraculobeats.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/oraculo-front",
        },
        {
          name: "API - Oráculo Beats",
          img: oraculoApiImg,
          description:
            "A Nest.js and MongoDB API providing CRUD functionality for track management.",
          repository: "https://github.com/raphaelbertoldo/oraculo-back",
        },
        {
          name: "Atomic App",
          img: atomicImage,
          description:
            "A project for skill improvement and study, developed with Vue 3.",
          link: "https://atomic-raphaels-projects-281f551e.vercel.app/",
          repository: "https://github.com/raphaelbertoldo/atomic",
        },
        {
          name: "API for a Social Network",
          img: nestIcon,
          description:
            "A backend project featuring user authentication, a photo upload system, and user posts management.",
          link: "",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
        },
        {
          name: "Midi Online",
          img: "https://i.ibb.co/9hb8SPb/Novo-Projeto-4.png",
          description:
            "A digital piano project developed using only HTML, CSS, and JavaScript.",
          link: "https://midi-online.netlify.app/",
          repository: "https://github.com/raphaelbertoldo/midi-online",
        },
        {
          name: "To-do List",
          img: "https://i.ibb.co/42CpgHV/Novo-Projeto-5.png",
          description: "A to-do list created using Vue.js and Vuetify.",
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
