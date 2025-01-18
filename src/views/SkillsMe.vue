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
          :max-width="`500`"
          min-width="300"
          >
          <!-- <v-card>
          :width="$vuetify.breakpoint.mobile ? 'mobile-card' : 'desktop-card'"
          zxczxc
        </v-card> -->
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
      bucketURL: "https://pub-2ef3f3f83051412fb2c3429d023b815f.r2.dev",
      selectSkillCard: "",
      dialog: false,
      indexSkill: null,
    };
  },
  computed: {
    skills() {
      return[
        {
          name: "JavaScript",
          img: `${this.bucketURL}/skills-badges/js_icon.png`,
          key: 'javascript'
        },
        {
          name: "NodeJs",
          img: `${this.bucketURL}/skills-badges/node_icon.png`,
          key: 'nodejs'
        },
        {
          name: "TypeScript",
          img: `${this.bucketURL}/skills-badges/ts_icon.png`,
          key: 'typescript'
        },
        {
          name: "NestJs",
          img: `${this.bucketURL}/skills-badges/nestjs_icon.png`,
          key: 'nestjs'
        },
        {
          name: "GraphQL",
          img: `${this.bucketURL}/skills-badges/graphql_icon.png`,
          key: 'graphql'
        },
        {
          name: "Vue",
          img: `${this.bucketURL}/skills-badges/vue_icon.png`,
          key: 'vue'
        },
        {
          name: "Vuetify",
          img: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg",
          key: 'vuetify'
        },
        {
          name: "Nuxt",
          img: `${this.bucketURL}/skills-badges/nuxt_icon.svg`,
          key: 'nuxt'
        },
        {
          name: "Express",
          img: `${this.bucketURL}/skills-badges/express_icon.webp`,
          key: 'express'
        },
        {
          name: "Docker",
          img: `${this.bucketURL}/skills-badges/docker_icon.png`,
          key: 'docker'
        },
        {
          name: "Git",
          img: `${this.bucketURL}/skills-badges/git_icon.png`,
          key: 'git'
        },
        {
          name: "Neo4j",
          img: `${this.bucketURL}/skills-badges/neo4j_icon.webp`,
          key: 'neo4j'
        },
        {
          name: "MongoDB",
          img: `${this.bucketURL}/skills-badges/mongodb_icon.png`,
          key: 'mongodb'
        },
        {
          name: "MariaDB",
          img: `${this.bucketURL}/skills-badges/mariadb_icon.png`,
          key: 'mariadb'
        },
        {
          name: "Redis",
          img: `${this.bucketURL}/skills-badges/redis_icon.webp`,
          key: 'redis'
        },
        {
          name: "HTML5",
          img: `${this.bucketURL}/skills-badges/html_icon.png`,
          key: 'html5'
        },
        {
          name: "CSS3",
          img: `${this.bucketURL}/skills-badges/css_icon.png`,
          key: 'css3'
        },
        {
          name: "Python",
          img: `${this.bucketURL}/skills-badges/python.webp`,
          key: 'python'
        },
        {
          name: "RabbitMQ",
          img: `${this.bucketURL}/skills-badges/rabbitmq.png`,
          key: 'rabbitmq'
        },
        {
          name: "AWS",
          img: `${this.bucketURL}/skills-badges/aws.png`,
          key: 'aws'
        },
        {
          name: "SQS",
          img: `${this.bucketURL}/skills-badges/sqs.svg`,
          key: 'sqs'
        },
        {
          name: "Bedrock",
          img: `${this.bucketURL}/skills-badges/bedrock-1.png`,
          key: 'bedroc'
        },
        {
          name: "ECS",
          img: `${this.bucketURL}/skills-badges/ecs.png`,
          key: 'ecs'
        },
        {
          name: "EC2",
          img: `${this.bucketURL}/skills-badges/ec2.png`,
          key: 'ec2'
        },
        {
          name: "Lambda",
          img: `${this.bucketURL}/skills-badges/lambda.png`,
          key: 'lambda'
        },
        {
          name: "S3",
          img: `${this.bucketURL}/skills-badges/s3.svg`,
          key: 's3'
        },
        {
          name: "Cloudfront",
          img: `${this.bucketURL}/skills-badges/cloudfront.svg`,
          key: 'cloudfront'
        },
      ]
    },
    skillsWithDescriptions() {
      return this.skills.map(skill => ({
        ...skill,
        description: this.$t(`skills.descriptions.${skill.key}`)
      }));
    }
  },
};
</script>
