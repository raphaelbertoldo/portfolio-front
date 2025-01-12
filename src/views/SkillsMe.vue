<template>
  <div class="">
    <div class="align-center my-md-10 my-4 flex d-flex block ml-md-16 pl-md-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-md-6">mdi-bee </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 36pt">
        {{ $t('skills.title') }}
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
          v-for="(skill, i) in skillsWithDescriptions"
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
import htmlIcon from "../assets/images/skills/html_icon.png";
import cssIcon from "../assets/images/skills/css_icon.png";
import jsIcon from "../assets/images/skills/js_icon.png";
import tsIcon from "../assets/images/skills/ts_icon.png";
import nodeIcon from "../assets/images/skills/node_icon.png";
import nestIcon from "../assets/images/skills/nestjs_icon.png";
import awsIcon from "../assets/images/skills/aws.png";
import bedrockIcon from "../assets/images/skills/bedrock-1.png";
import ecsIcon from "../assets/images/skills/ecs.png";
import sqsIcon from "../assets/images/skills/sqs.svg";
import ec2Icon from "../assets/images/skills/ec2.png";
import lambdaIcon from "../assets/images/skills/lambda.png";
import s3Icon from "../assets/images/skills/s3.svg";
import cloudfrontIcon from "../assets/images/skills/cloudfront.svg";
import vueIcon from "../assets/images/skills/vue_icon.png";
import dockerIcon from "../assets/images/skills/docker_icon.png";
import gitIcon from "../assets/images/skills/git_icon.png";
import mongoIcon from "../assets/images/skills/mongodb_icon.png";
import graphqlIcon from "../assets/images/skills/graphql_icon.png";
import expressIcon from "../assets/images/skills/express_icon.webp";
import mariadbIcon from "../assets/images/skills/mariadb_icon.png";
import neo4jIcon from "../assets/images/skills/neo4j_icon.webp";
import redisIcon from "../assets/images/skills/redis_icon.webp";
import nuxtIcon from "../assets/images/skills/nuxt_icon.svg";
import pyIcon from "../assets/images/skills/python.webp";
import ModalSelectSkill from "../components/ModalSelectSkill.vue";

export default {
  components: { ModalSelectSkill },
  mounted() {},
  methods: {
    selectSkill(i) {
      this.dialog = true;
      this.selectSkillCard = this.skillsWithDescriptions[i];
    },
    async selectNextSkill() {
      let index = this.skillsWithDescriptions.indexOf(this.selectSkillCard);
      if (index + 1 < this.skillsWithDescriptions.length) {
        this.selectSkillCard = await this.skillsWithDescriptions[index + 1];
      }
      if (index == this.skillsWithDescriptions.length - 1) {
        this.selectSkillCard = await this.skillsWithDescriptions[0];
      }
    },
    async selectPrevSkill() {
      let index = this.indexSkill;
      index = this.skillsWithDescriptions.indexOf(this.selectSkillCard);
      if (index > 0) {
        this.selectSkillCard = await this.skillsWithDescriptions[index - 1];
      }
      if (index == 0) {
        this.selectSkillCard = await this.skillsWithDescriptions[this.skillsWithDescriptions.length - 1];
      }
    },
  },
  data() {
    return {
      selectSkillCard: "",
      dialog: false,
      indexSkill: null,
      skills: [
        {
          name: "JavaScript",
          img: jsIcon,
          key: 'javascript'
        },
        {
          name: "NodeJs",
          img: nodeIcon,
          key: 'nodejs'
        },
        {
          name: "TypeScript",
          img: tsIcon,
          key: 'typescript'
        },
        {
          name: "NestJs",
          img: nestIcon,
          key: 'nestjs'
        },
        {
          name: "GraphQL",
          img: graphqlIcon,
          key: 'graphql'
        },
        {
          name: "Vue",
          img: vueIcon,
          key: 'vue'
        },
        {
          name: "Vuetify",
          img: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg",
          key: 'vuetify'
        },
        {
          name: "Nuxt",
          img: nuxtIcon,
          key: 'nuxt'
        },
        {
          name: "Express",
          img: expressIcon,
          key: 'express'
        },
        {
          name: "Docker",
          img: dockerIcon,
          key: 'docker'
        },
        {
          name: "Git",
          img: gitIcon,
          key: 'git'
        },
        {
          name: "Neo4j",
          img: neo4jIcon,
          key: 'neo4j'
        },
        {
          name: "MongoDB",
          img: mongoIcon,
          key: 'mongodb'
        },
        {
          name: "MariaDB",
          img: mariadbIcon,
          key: 'mariadb'
        },
        {
          name: "Redis",
          img: redisIcon,
          key: 'redis'
        },
        {
          name: "HTML5",
          img: htmlIcon,
          key: 'html5'
        },
        {
          name: "CSS3",
          img: cssIcon,
          key: 'css3'
        },
        {
          name: "Python",
          img: pyIcon,
          key: 'python'
        },
        {
          name: "AWS",
          img: awsIcon,
          key: 'aws'
        },
        {
          name: "SQS",
          img: sqsIcon,
          key: 'sqs'
        },
        {
          name: "Bedrock",
          img: bedrockIcon,
          key: 'bedroc'
        },
        {
          name: "ECS",
          img: ecsIcon,
          key: 'ecs'
        },
        {
          name: "EC2",
          img: ec2Icon,
          key: 'ec2'
        },
        {
          name: "Lambda",
          img: lambdaIcon,
          key: 'lambda'
        },
        {
          name: "S3",
          img: s3Icon,
          key: 's3'
        },
        {
          name: "Cloudfront",
          img: cloudfrontIcon,
          key: 'cloudfront'
        },
      ],
    };
  },
  computed: {
    skillsWithDescriptions() {
      return this.skills.map(skill => ({
        ...skill,
        description: this.$t(`skills.descriptions.${skill.key}`)
      }));
    }
  },
};
</script>
