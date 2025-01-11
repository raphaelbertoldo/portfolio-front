<template>
  <div class="projects-container">
    <div class="header-section my-md-10 my-4">
      <div class="title-container ml-md-16 pl-md-16 d-flex align-center">
        <v-icon size="80" class="title-icon gradiente-yellow-1 mx-md-6 animate-float">
          mdi-hammer-wrench
        </v-icon>
        <h1 class="title-text gradiente-yellow-1" style="font-size: 36pt">
          {{ $t('projects.title') }}
        </h1>
      </div>
    </div>

    <v-row class="projects-grid px-4 px-md-10">
      <transition-group
        name="project-transition"
        tag="div"
        class="row w-100"
        appear
      >
        <v-col
          v-for="(proj, i) in projects"
          :key="i"
          cols="12"
          :md="$vuetify.breakpoint.width < 1800 ? '6' : '4'"
          class="project-col"
        >
          <v-card
            class="project-card glass-morphism h-100 d-flex flex-column"
            :class="{'scale-up': hover === i}"
            @mouseover="hover = i"
            @mouseleave="hover = null"
            dark
          >
            <div class="project-header pa-4">
              <v-img
                :src="proj.img"
                class="project-image rounded-lg"
                height="200"
                :aspect-ratio="16/9"
                gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>

            <v-card-title class="project-title text-h5 font-weight-bold">
              {{ proj.name }}
            </v-card-title>

            <v-card-text class="project-description flex-grow-1">
              {{ proj.description }}
              
              <div class="skills-container mt-4" v-if="proj.skills">
                <v-chip
                  v-for="(skill, index) in proj.skills"
                  :key="index"
                  class="mr-2 mb-2 skill-chip"
                  small
                  outlined
                >
                  {{ skill }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions class="project-actions pa-4">
              <v-spacer></v-spacer>
              <v-btn
                v-if="proj.repository"
                :href="proj.repository"
                target="_blank"
                class="action-button mr-2"
                outlined
                color="primary"
              >
                <v-icon left>mdi-github</v-icon>
                {{ $t('projects.viewCode') }}
              </v-btn>
              <v-btn
                v-if="proj.link"
                :href="proj.link"
                target="_blank"
                class="action-button"
                outlined
                color="secondary"
              >
                <v-icon left>mdi-web</v-icon>
                {{ $t('projects.viewProject') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition-group>
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
  data() {
    return {
      hover: null,
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
          name: "Prowess - Institutional Technology Portal",
          img: "https://pub-2ef3f3f83051412fb2c3429d023b815f.r2.dev/prowerss.png",
          description:
            "An institutional demo portal for a technology company, Prowess showcases innovative solutions and services. The site provides essential information about technology trends, project showcases, and a directory of services offered by the company.",
          link: "https://expertise-ti-demo.netlify.app/",
          skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
          repository: "https://github.com/raphaelbertoldo/expertise-demo",
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
          skills: ["Vue.js", "Vuetify", "JavaScript"],
        },
        {
          name: "API - Oráculo Beats",
          img: oraculoApiImg,
          description:
            "A Nest.js and MongoDB API providing CRUD functionality for track management.",
          repository: "https://github.com/raphaelbertoldo/oraculo-back",
          skills: ["NestJS", "MongoDB", "TypeScript"],
        },
        {
          name: "Atomic App",
          img: atomicImage,
          description:
            "A project for skill improvement and study, developed with Vue 3.",
          link: "https://atomic-raphaels-projects-281f551e.vercel.app/",
          repository: "https://github.com/raphaelbertoldo/atomic",
          skills: ["Vue 3", "Composition API", "TypeScript"],
        },
        {
          name: "API for a Social Network",
          img: nestIcon,
          description:
            "A backend project featuring user authentication, a photo upload system, and user posts management.",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
          skills: ["NestJS", "MongoDB", "TypeScript", "AWS S3"],
        },
        // {
        //   name: "Midi Online",
        //   img: "https://i.ibb.co/9hb8SPb/Novo-Projeto-4.png",
        //   description:
        //     "A digital piano project developed using only HTML, CSS, and JavaScript.",
        //   link: "https://midi-online.netlify.app/",
        //   repository: "https://github.com/raphaelbertoldo/midi-online",
        //   skills: ["HTML", "CSS", "JavaScript"],
        // },
        // {
        //   name: "To-do List",
        //   img: "https://i.ibb.co/42CpgHV/Novo-Projeto-5.png",
        //   description: "A to-do list created using Vue.js and Vuetify.",
        //   link: "https://curso-vuetify.netlify.app/",
        //   repository: "https://github.com/raphaelbertoldo/to-do-list",
        //   skills: ["Vue.js", "Vuetify", "JavaScript"],
        // },
      ],
    };
  },
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
};
</script>

<style scoped>
.projects-container {
  min-height: 100vh;
  position: relative;
}

.header-section {
  position: relative;
}

.title-icon {
  animation: float 3s ease-in-out infinite;
}

.project-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-image {
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-title {
  background: linear-gradient(to right, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-chip {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.skill-chip:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.action-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.action-button:hover::before {
  left: 100%;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.glass-morphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.scale-up {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.project-transition-move {
  transition: transform 0.8s ease;
}

.project-transition-enter-active {
  transition: all 0.8s ease;
  transition-delay: calc(0.1s * v-bind(index));
}

.project-transition-leave-active {
  transition: all 0.8s ease;
  position: absolute;
}

.project-transition-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.project-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-col {
  animation: reveal 0.8s ease-out forwards;
  animation-delay: calc(0.1s * v-bind(index));
  opacity: 0;
}

/* Responsividade para telas menores */
@media (max-width: 600px) {
  .project-card {
    margin-bottom: 20px;
  }
  
  .project-title {
    font-size: 1.5rem !important;
  }
  
  .action-button {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
