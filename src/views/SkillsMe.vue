<template>
  <div class="">
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6">mdi-bee </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 42pt">
        Skills
      </h1>
    </div>
    <div class="d-flex" style="overflow: auto">
      <div
        :style="
          $vuetify.breakpoint.width > 650
            ? 'min-width: 1125px; max-width: 1125px'
            : 'width: 375px'
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
            class="
              hexagon
              gradiente-blue
              ma-2
              d-flex
              align-center
              justify-center
              text-center
            "
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
              <v-img max-width="80px" :src="skill.url"></v-img>
            </div>
          </div>
        </div>
      </div>
      <v-card
        v-if="$vuetify.breakpoint.width > 1500"
        class="
          ml-n8 ml-md-n16
          d-flex
          mx-auto
          glass-fx
          gradiente-blue
          rounded-xl
        "
        style="width: 500px"
      >
        <div class="d-flex ma-4">
          <v-img
            class="mt-6"
            :src="selectSkillCard.url"
            max-width="100px"
            max-height="100px"
          />
          <div style="width: 350px">
            <v-card-title class="font-weight-bold">{{
              selectSkillCard.skillName
            }}</v-card-title>
            <v-card-subtitle class="mt-1">{{
              selectSkillCard.description
            }}</v-card-subtitle>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  methods: {
    selectSkill(i) {
      this.selectSkillCard = this.skills[i];
    },
  },
  data: () => ({
    selectSkillCard: "",
    skills: [
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 1",
        experience: "HTML5",
        url: "https://i.ibb.co/Rhfbxqz/Novo-Projeto.png",
        description:
          "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
      },
      {
        skillName: "CSS3",
        experience: "HTML5",
        url: "https://i.ibb.co/58NrLLW/640px-Devicon-css3-plain-svg-1.png",
      },
      {
        skillName: "HTML5 3",
        experience: "HTML5",
        url: "https://i.ibb.co/yVPC9B8/640px-Devicon-css3-plain-svg.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5 4",
        experience: "HTML5",
        url: "https://i.ibb.co/2ydnRRm/640px-Devicon-css3-plain-svg-2.png",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
    ],
  }),
};
</script>

