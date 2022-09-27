<template>
  <div class="">
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6">mdi-bee </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 42pt">
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
          style="position: absolute"
          v-if="$vuetify.breakpoint.width > 1800"
          :selectSkillCard="selectSkillCard"
          @selectNextSkill="selectNextSkill"
          @selectPrevSkill="selectPrevSkill"
        />
        <v-dialog
          v-else
          v-model="dialog"
          class="size-all"
          :max-width="$vuetify.breakpoint.mobile ? '100%' : '50%'"
        >
          <div class="pa-10 glass-fx-dark d-flex align-center justify-center">
            <!-- <div class="d-flex align-center">
              <v-icon
                class=""
                color="white"
                size="50"
                @click="$emit('selectPrevSkill')"
                >mdi-arrow-left</v-icon
              >
            </div> -->
            <ModalSelectSkill
              :selectSkillCard="selectSkillCard"
              @selectNextSkill="selectNextSkill"
              @selectPrevSkill="selectPrevSkill"
            /></div
        ></v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.shadow-2 {
  /* -8px 11px 7px 18px rgba(0,0,0,0.89) */
  filter: drop-shadow(-5px 10px 1px #000000a6);
}
</style>
<script>
import skills from "@/services/skills";
import ModalSelectSkill from "@/components/modalSelectSkill.vue";
export default {
  components: { ModalSelectSkill },
  computed: {},
  methods: {
    selectSkill(i) {
      this.dialog = true;
      this.selectSkillCard = this.skills[i];
      console.log(
        this.skills.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    },
    async selectNextSkill() {
      let index = this.skills.indexOf(this.selectSkillCard);
      if (index + 1 < this.skills.length) {
        this.selectSkillCard = await this.skills[index + 1];
      }
      return console.log(this.skills[index]);
    },
    async selectPrevSkill() {
      let index = this.indexSkill;
      index = this.skills.indexOf(this.selectSkillCard);
      if (index > 0) {
        this.selectSkillCard = await this.skills[index - 1];
      }
      return console.log(this.skills[index]);
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
  // mounted() {
  //   return this.getSkills();
  // },
  data: () => ({
    selectSkillCard: "",
    dialog: false,
    indexSkill: null,
    // skills: [],
    skills: [
      {
        name: "HTML5",
        img: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
      },
      {
        name: "CSS3",
        img: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
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
        img: "https://i.ibb.co/jV1DTsX/640px-Devicon-css3-plain-svg-4.png",
        description:
          "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.",
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
    ],
  }),
};
</script>

