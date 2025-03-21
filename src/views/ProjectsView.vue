<template>
  <div class="projects-wrapper">
    <div class="projects-container">
      <div class="header-section my-md-10 my-4">
        <div class="title-container ml-md-16 pl-md-16 d-flex align-center">
          <v-icon
            size="80"
            class="title-icon gradiente-yellow-1 mx-md-6 animate-float"
          >
            mdi-hammer-wrench
          </v-icon>
          <h1 class="title-text gradiente-yellow-1" style="font-size: 36pt">
            {{ $t("projects.title") }}
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
              class="project-card glass-morphism d-flex flex-column"
              :class="{ 'scale-up': hover === i }"
              @mouseover="hover = i"
              @mouseleave="hover = null"
              @click="openProjectModal(proj)"
              dark
              height="500"
            >
              <div class="project-header">
                <v-img
                  :src="proj.img"
                  :lazy-src="generateBlurHash(proj.name)"
                  class="project-image rounded-lg"
                  height="200"
                  position="top center"
                  :aspect-ratio="16 / 9"
                  gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%"
                  loading="lazy"
                  cover
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0 image-skeleton"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>

              <v-card-title
                class="project-title text-h5 font-weight-bold pt-4 pb-2"
              >
                {{ proj.name }}
              </v-card-title>

              <v-card-text
                class="project-description flex-grow-1 d-flex flex-column"
              >
                <div class="description-text">
                  {{ proj.description }}
                </div>

                <div class="skills-container mt-auto pt-4" v-if="proj.skills">
                  <div class="skill-icons-container mb-2">
                    <v-tooltip
                      bottom
                      v-for="(skill, index) in proj.skills"
                      :key="index"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                          class="skill-icon-wrapper"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-img
                            :src="skillIcons[skill]"
                            width="24"
                            height="24"
                            contain
                            class="skill-icon ma-1"
                          />
                        </div>
                      </template>
                      <span>{{ skill }}</span>
                    </v-tooltip>
                  </div>
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
                  {{ $t("projects.viewCode") }}
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
                  {{ $t("projects.viewProject") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </transition-group>
      </v-row>

      <!-- Modal de Detalhes do Projeto -->
      <v-dialog
        v-model="showModal"
        max-width="1200"
        @click:outside="closeModal"
        content-class="project-modal-dialog"
      >
        <v-card v-if="selectedProject" class="project-modal glass-morphism">
          <v-card-title class="modal-close-button">
            <v-btn icon @click="closeModal" class="close-button">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-container fluid class="pa-6">
            <v-row>
              <!-- Coluna da Imagem para Desktop -->
              <v-col cols="12" md="6" class="project-image-section">
                <v-img
                  :src="selectedProject.img"
                  class="project-full-image rounded-lg"
                  height="600"
                  position="top center"
                  gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%"
                  cover
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0 image-skeleton"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>

              <!-- Coluna de Informações -->
              <v-col cols="12" md="6" class="project-info-section">
                <h2 class="modal-title text-h4 font-weight-bold mb-6">
                  {{ selectedProject.name }}
                </h2>

                <div class="project-full-description mb-6">
                  {{ selectedProject.description }}
                </div>

                <div class="technologies-section mb-6">
                  <h3 class="text-h6 font-weight-medium mb-4">
                    {{ $t("projects.technologies") }}
                  </h3>
                  <div class="skill-icons-grid mb-4">
                    <v-tooltip
                      bottom
                      v-for="(skill, index) in selectedProject.skills"
                      :key="index"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                          class="skill-icon-wrapper-modal"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-img
                            :src="skillIcons[skill]"
                            width="40"
                            height="40"
                            contain
                            class="skill-icon-modal"
                          />
                        </div>
                      </template>
                      <span>{{ skill }}</span>
                    </v-tooltip>
                  </div>
                  <div class="skills-grid">
                    <v-chip
                      v-for="(skill, index) in selectedProject.skills"
                      :key="'chip-' + index"
                      class="mr-2 mb-2 skill-chip-modal"
                      outlined
                    >
                      {{ skill }}
                    </v-chip>
                  </div>
                </div>

                <div class="project-links">
                  <v-btn
                    v-if="selectedProject.repository"
                    :href="selectedProject.repository"
                    target="_blank"
                    class="modal-action-button mr-4 mb-4"
                    outlined
                    color="primary"
                    large
                  >
                    <v-icon left>mdi-github</v-icon>
                    {{ $t("projects.viewCode") }}
                  </v-btn>
                  <v-btn
                    v-if="selectedProject.link"
                    :href="selectedProject.link"
                    target="_blank"
                    class="modal-action-button mb-4"
                    outlined
                    color="secondary"
                    large
                  >
                    <v-icon left>mdi-web</v-icon>
                    {{ $t("projects.viewProject") }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bucketURL: "https://pub-2ef3f3f83051412fb2c3429d023b815f.r2.dev",
      projectsPath: "/demo-projects",
      skillsPath: "/skills-badges",
      hover: null,
      imageLoading: {},
      showModal: false,
      selectedProject: null,
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
    // optimizeImageUrl(url, width) {
    //   // Se a URL for uma importação local, retorna direto
    //   if (typeof url === "object" || !url.startsWith("http")) {
    //     return url;
    //   }

    //   // Para URLs do R2/Cloudflare, adiciona parâmetros de otimização
    //   if (url.includes("r2.dev")) {
    //     return `${url}?width=${width}&format=webp&quality=80`;
    //   }

    //   // Para URLs do ibb.co, usa o formato otimizado deles
    //   if (url.includes("ibb.co")) {
    //     return url.replace("/Novo-Projeto", "/Novo-Projeto_optimize");
    //   }

    //   return url;
    // },
    generateBlurHash(projectName) {
      // Gera um placeholder colorido único baseado no nome do projeto
      const hash = projectName
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const hue = hash % 360;
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='8' height='5' fill='hsl(${hue}, 20%, 20%)'/%3E%3C/svg%3E`;
    },
    handleImageLoad(projectName) {
      this.$set(this.imageLoading, projectName, false);
    },
    handleImageError(projectName) {
      console.error(`Failed to load image for project: ${projectName}`);
      // Usa uma imagem de fallback em caso de erro
      this.$set(
        this.projects.find((p) => p.name === projectName),
        "img",
        "/fallback-image.jpg"
      );
    },
    openProjectModal(project) {
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      setTimeout(() => {
        this.selectedProject = null;
      }, 300);
    },
  },
  computed: {
    skillIcons() {
      return {
        HTML: `${this.bucketURL}${this.skillsPath}/html_icon.png`,
        CSS: `${this.bucketURL}${this.skillsPath}/css_icon.png`,
        JavaScript: `${this.bucketURL}${this.skillsPath}/js_icon.png`,
        TypeScript: `${this.bucketURL}${this.skillsPath}/ts_icon.png`,
        "Node.js": `${this.bucketURL}${this.skillsPath}/node_icon.png`,
        NestJS: `${this.bucketURL}${this.skillsPath}/nestjs_icon.png`,
        "Vue.js": `${this.bucketURL}${this.skillsPath}/vue_icon.png`,
        Vuetify:
          "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg",
        Docker: `${this.bucketURL}${this.skillsPath}/docker_icon.png`,
        Git: `${this.bucketURL}${this.skillsPath}/git_icon.png`,
        MongoDB: `${this.bucketURL}${this.skillsPath}/mongodb_icon.png`,
        GraphQL: `${this.bucketURL}${this.skillsPath}/graphql_icon.png`,
        Express: `${this.bucketURL}${this.skillsPath}/express_icon.webp`,
        MariaDB: `${this.bucketURL}${this.skillsPath}/mariadb_icon.png`,
        Neo4j: `${this.bucketURL}${this.skillsPath}/neo4j_icon.webp`,
        Redis: `${this.bucketURL}${this.skillsPath}/redis_icon.webp`,
        "Nuxt.js": `${this.bucketURL}${this.skillsPath}/nuxt_icon.svg`,
        RabbitMQ: `${this.bucketURL}${this.skillsPath}/rabbitmq.png`,
      };
    },
    projects() {
      return [
        {
          name: "Brazilians in USA - Community Portal",
          img: `${this.bucketURL}${this.projectsPath}/eua.png`,
          description:
            "Institutional portal developed to connect and assist Brazilians in the United States. The site provides essential resources such as informative guides on immigration, employment, housing, and education, along with a directory of Brazilian services and professionals. ",
          link: "https://ass-br-eua-demo.netlify.app/",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "Vuetify",
            "Git",
            "Nuxt.js",
          ],
          repository: "https://github.com/raphaelbertoldo/abeua-demo",
        },
        {
          name: "European Citizenship Portal",
          img: `${this.bucketURL}${this.projectsPath}/ue.png`,
          description:
            "An institutional portal designed to provide information and assistance for European citizenship services. The site features essential resources including guides on citizenship applications, legal requirements, and a directory of professionals offering related services.",
          link: "https://cidadania-ue-demo.netlify.app/",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "Vuetify",
            "Git",
            "Nuxt.js",
          ],
          repository: "https://github.com/raphaelbertoldo/ue-cid-demo",
        },
        {
          name: "Prowess Technology",
          img: `${this.bucketURL}${this.projectsPath}/prowerss.png`,
          description:
            "An institutional demo portal for a technology company, Prowess showcases innovative solutions and services. The site provides essential information about technology trends, project showcases, and a directory of services offered by the company.",
          link: "https://expertise-ti-demo.netlify.app/",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "Vuetify",
            "Git",
            "Nuxt.js",
          ],
          repository: "https://github.com/raphaelbertoldo/expertise-demo",
        },
        {
          name: "Movie Storm",
          img: `${this.bucketURL}${this.projectsPath}/movieStorm.png`,
          description:
            "A user interface where users can explore various hit movies from the past year, rate these movies, and get more recommendations.",
          link: "https://movie-storm.netlify.app/",
          skills: ["Vue.js", "Node.js", "GraphQL", "MongoDB"],
          repository: "https://github.com/raphaelbertoldo/moviestorm-frontend",
        },
        {
          name: "API - Movie Storm",
          img: `${this.bucketURL}${this.projectsPath}/movieStormApi.png`,
          description:
            "This project is a GraphQL API for managing movies, genres, and users. It also includes search and recommendation algorithms.",
          skills: ["GraphQL", "Node.js", "MongoDB", "JavaScript"],
          repository: "https://github.com/raphaelbertoldo/moviee-storm-api",
        },
        {
          name: "E-commerce Microservices API",
          img: `${this.bucketURL}${this.projectsPath}/ecom.png`,
          description:
            "This project was developed to improve my architecture skills, using Node.js, Express, MongoDB, and RabbitMQ.",
          skills: ["Node.js", "Express", "RabbitMQ", "MongoDB"],
          repository:
            "https://github.com/raphaelbertoldo/microservices-ecommerce",
        },
        {
          name: "The Hash Game",
          img: `${this.bucketURL}${this.projectsPath}/the-hash-game.png`,
          description:
            "A classic tic-tac-toe project, fully designed by me with the goal of enhancing problem-solving skills.",
          link: "https://the-hash-game.netlify.app/",
          skills: ["Vue.js", "JavaScript", "HTML", "CSS"],
          repository: "https://github.com/raphaelbertoldo/the-hashgame",
        },
        {
          name: "Oráculo Beats",
          img: `${this.bucketURL}${this.projectsPath}/oraculo.png`,
          description:
            "A website for a beatmaker to sell beats, instrumentals, and other services. The site features a track listing and music player.",
          link: "https://oraculobeats.netlify.app/",
          skills: ["Vue.js", "Node.js", "MongoDB", "NestJS"],
          repository: "https://github.com/raphaelbertoldo/oraculo-front",
        },
        {
          name: "API - Oráculo Beats",
          img: `${this.bucketURL}${this.projectsPath}/oraculo-api.png`,
          description:
            "A Nest.js and MongoDB API providing CRUD functionality for track management.",
          repository: "https://github.com/raphaelbertoldo/oraculo-back",
          skills: ["NestJS", "MongoDB", "Node.js", "TypeScript"],
        },
        {
          name: "Atomic App",
          img: `${this.bucketURL}${this.projectsPath}/atomic.png`,
          description:
            "A project for skill improvement and study, developed with Vue 3.",
          link: "https://atomic-raphaels-projects-281f551e.vercel.app/",
          skills: ["Vue.js", "JavaScript", "HTML", "CSS"],
          repository: "https://github.com/raphaelbertoldo/atomic",
        },
        {
          name: "API for a Social Network",
          img: `${this.bucketURL}${this.projectsPath}/nestjs.png`,
          description:
            "A backend project featuring user authentication, a photo upload system, and user posts management.",
          repository: "https://github.com/raphaelbertoldo/nestjs-social-media",
          skills: ["NestJS", "MongoDB", "Node.js", "TypeScript"],
        },
      ];
    },
  },
};
</script>

<style scoped>
.projects-wrapper {
  min-height: 100vh;
  position: relative;
}

.projects-container {
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
  height: 500px !important;
  display: flex;
  flex-direction: column;
}

.project-header {
  height: 200px;
}

.project-title {
  min-height: 64px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  background: linear-gradient(to right, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-description {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.description-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  flex-grow: 1;
}

.skills-container {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.project-actions {
  margin-top: auto;
  padding: 16px !important;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-image {
  transition: opacity 0.3s ease;
  background-position: top center !important;
}

.project-image.loading {
  opacity: 0;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.skill-icons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
}

.skill-icon-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon-wrapper:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.skill-icon {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;
}

.skill-icons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
}

.skill-icon-wrapper-modal {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon-wrapper-modal:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.skill-icon-modal {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.action-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: "";
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

.image-skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.1) 63%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.v-image__image {
  background-position: top center !important;
}

.v-image__image--cover {
  background-position: top center !important;
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

/* Estilos do Modal */
.project-modal-dialog {
  overflow: hidden;
}

.project-modal {
  background: rgba(30, 30, 30, 0.8) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
}

.modal-close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}

.close-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.project-image-section {
  position: relative;
}

.project-full-image {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  min-height: 600px;
  max-height: 800px;
  object-fit: cover;
  object-position: top;
}

.project-info-section {
  padding: 24px;
}

.modal-title {
  background: linear-gradient(to right, #ffd700, #ffa500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
}

.project-full-description {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.technologies-section {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  margin: 24px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.technologies-section h3 {
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-chip-modal {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  padding: 0 16px;
  color: white !important;
  border-color: rgba(255, 215, 0, 0.5) !important;
}

.skill-chip-modal:hover {
  background: rgba(255, 215, 0, 0.2) !important;
  transform: translateY(-2px);
  border-color: #ffd700 !important;
}

.modal-action-button {
  min-width: 180px;
  height: 48px;
  font-size: 1rem;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.modal-action-button::before {
  content: "";
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

.modal-action-button:hover::before {
  left: 100%;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Responsividade */
@media (max-width: 960px) {
  .project-modal {
    margin: 16px;
  }

  .project-info-section {
    padding: 16px;
  }

  .modal-title {
    font-size: 1.8rem;
  }

  .project-full-description {
    font-size: 1rem;
  }

  .project-links {
    flex-direction: column;
  }

  .modal-action-button {
    width: 100%;
    margin: 8px 0;
  }

  .project-full-image {
    min-height: 400px;
    max-height: 500px;
  }

  .technologies-section {
    margin: 16px 0;
    padding: 16px;
  }
}
</style>
