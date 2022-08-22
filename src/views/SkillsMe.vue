<template>
  <div class="d-flex flex-wrap ma-10">
    <v-row>
      <v-col cols="8" class="d-flex flex-wrap">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          :class="
            i === 6 || i === 18 || i === 30 || i === 42 ? 'ml-7 mt-n4' : ''
          "
        >
          <div
            class="hexagon ma-2 d-flex align-center justify-center text-center"
            :class="
              i === 6 || i === 18 || i === 30 || i === 42
                ? 'ml-16 mt-n4'
                : '' || i > 5
                ? 'mt-n8'
                : ''
            "
          >
            {{ skill.skillName }}
          </div>
        </div>
      </v-col>
      {{ skills }}
    </v-row>
  </div>
</template>
<style scoped>
</style>
<script>
import skills from "@/services/skills";
export default {
  mounted() {
    this.getSkills();
  },
  methods: {
    getSkills() {
      return skills
        .list()
        .then((res) => {
          this.skills = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data: () => ({
    skills: [],
  }),
};
</script>

