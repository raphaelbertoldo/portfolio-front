<template>
  <div class="">
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6">mdi-bee </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 36pt">
        Skills
      </h1>
    </div>
    <v-row class="d-flex" style="overflow: auto">
      <v-col
        cols="12"
        md="4"
        :style="
          $vuetify.breakpoint.width > 650
            ? 'min-width: 1125px; max-width: 1125px'
            : 'min-width: 375px; max-width: 375px;'
        "
        class="d-flex flex-wrap px-4"
        :class="$vuetify.breakpoint.width > 650 ? 'mx-16' : 'mx-auto'"
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          :class="
            $vuetify.breakpoint.width > 650
              ? i === 6 || i === 18 || i === 30 || i === 42
                ? 'ml-7 mt-n4'
                : ''
              : i === 2 ||
                i === 5 ||
                i === 8 ||
                i === 11 ||
                i === 14 ||
                i === 17 ||
                i === 20 ||
                i === 23 ||
                i === 26 ||
                i === 29 ||
                i === 32 ||
                i === 35 ||
                i === 38 ||
                i === 41 ||
                i === 44 ||
                i === 47
              ? 'ml-7'
              : ''
          "
        >
          <div
            @click="selectSkill(i)"
            class="hexagon ma-2 glass-fx d-flex align-center justify-center"
            :class="
              $vuetify.breakpoint.width > 650
                ? i === 6 || i === 18 || i === 30 || i === 42
                  ? 'ml-16 mt-n4'
                  : '' || i > 5
                  ? 'mt-n8'
                  : ''
                : i === 2 ||
                  i === 5 ||
                  i === 8 ||
                  i === 11 ||
                  i === 14 ||
                  i === 17 ||
                  i === 20 ||
                  i === 23 ||
                  i === 26 ||
                  i === 29 ||
                  i === 32 ||
                  i === 35 ||
                  i === 38 ||
                  i === 41 ||
                  i === 44 ||
                  i === 47
                ? 'mx-16 my-n8'
                : ''
            "
          >
            <div class="">
              <v-img max-width="80px" :src="skill.img" class="shadow-2"></v-img>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="align-center d-flex justify-center ml-n8">
        <ModalSelectSkill
          v-if="$vuetify.breakpoint.width > 1800"
          @close="dialog = false"

          :selectSkillCard="selectSkillCard"
          @selectNextSkill="selectNextSkill"
          @selectPrevSkill="selectPrevSkill"
        />
        <v-dialog
          v-else
          v-model="dialog"
          class="d-flex"  
          :min-width="$vuetify.breakpoint.mobile ? '300px' : '600px'"
          overlay-opacity="0"
        >
            <ModalSelectSkill
            @close="dialog = false"
              :selectSkillCard="selectSkillCard"
              @selectNextSkill="selectNextSkill"
              @selectPrevSkill="selectPrevSkill"
            />
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.shadow-2 {
  filter: drop-shadow(-5px 10px 1px #000000a6);
}
</style>
<script>
import skills from "@/services/skills";
import ModalSelectSkill from "../components/ModalSelectSkill.vue";
import nestSvg from '../assets/icons/nest.svg';
import graphqlLogo from '../assets/icons/GraphQL_Logo.svg.png'
import cssSvg from '../assets/icons/css_logo.svg'
import expressLogo from '../assets/icons/express-2.webp'
import mariadbLogo from '../assets/icons/mariadb-1.png'
import neo4jLogo from '../assets/icons/neo4j-white.webp'
import redisLogo from '../assets/icons/redis-1.webp'
import nuxtLogo from '../assets/icons/nuxt.svg'

export default {
  components: { ModalSelectSkill },
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
    selectSkill(i) {
      this.dialog = true;
      this.selectSkillCard = this.skills[i];
    },
    async selectNextSkill() {
      let index = this.skills.indexOf(this.selectSkillCard);
      if (index + 1 < this.skills.length) {
        this.selectSkillCard = await this.skills[index + 1];
      }
      if(index == this.skills.length - 1){
        this.selectSkillCard = await this.skills[0];
      }
    },
    async selectPrevSkill() {
      let index = this.indexSkill;
      index = this.skills.indexOf(this.selectSkillCard);
      if (index > 0) {
        this.selectSkillCard = await this.skills[index - 1];
      }
      if(index == 0){
        this.selectSkillCard = await this.skills[this.skills.length - 1];
      }
    },
    getSkills() {
      return skills
        .list()
        .then((res) => (this.skills = res.data))
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data: () => ({
    selectSkillCard: "",
    dialog: false,
    indexSkill: null,

    skills: [
      {
        name: "HTML5",
        img: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
      },
      {
        name: "CSS3",
        img: cssSvg,
        description:
          "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.",
      },
      {
        name: "JavaScript",
        img: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
      },
      {
        name: "NodeJs",
        img: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. ",
      },
      {
        name: "TypeScript",
        img: "https://i.ibb.co/hWzqGzs/640px-Devicon-css3-plain-svg-3.png",
        description:
          "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
      },
      {
        name: "NestJs",
        img: nestSvg,
        description:
          "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.",
      },
      {
        name: "GraphQL",
        img: graphqlLogo,
        description:
          "GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.",
      },
      {
        name: "Vue",
        img: "https://i.ibb.co/swCHVYh/vue.png",
        description:
          "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
      },
      {
        name: "Vuetify",
        img: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg",
        description:
          "Vuetify é uma biblioteca de interface do usuário Vue com componentes de material lindamente artesanais.",
      },
      {
        name: "Nuxt",
        img: nuxtLogo,
        description:
          "Nuxt.js é um framework para aplicações web de código aberto baseado em Vue.js, Node.js, Webpack and Babel.js. O framework foi inspirado pelo Next.js, um framework com propósito similar porém baseado em React.",
      },
      {
        name: "Express",
        img: expressLogo,
        description:
          "Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js",
      },
      {
        name: "Docker",
        img: "https://i.ibb.co/c8qvkD8/Novo-Projeto-8.png",
        description:
          "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.",
      },
      {
        name: "Git",
        img: "https://i.ibb.co/L5wV7wZ/Novo-Projeto-6.png",
        description:
          "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
      },
      {
        name: "Neo4j",
        img: neo4jLogo,
        description:
          "Neo4j é um sistema de gerenciamento de banco de dados gráfico desenvolvido pela Neo4j Inc. Os elementos de dados que o Neo4j armazena são nós, arestas que os conectam e atributos de nós e arestas.",
      },
      {
        name: "MongoDB",
        img: "https://i.ibb.co/f2VsqW3/Novo-Projeto-9.png",
        description:
          "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
      },
      {
        name: "MariaDB",
        img: mariadbLogo,
        description:
          "MariaDB é um sistema de gerenciamento de banco de dados que surgiu como fork do MySQL, criado pelo próprio fundador do projeto após sua aquisição pela Oracle.",
      },
      {
        name: "Redis",
        img: redisLogo,
        description:
          "Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional.",
      },
      
    ],
  }),
};
</script>

