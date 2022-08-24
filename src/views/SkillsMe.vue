<template>
  <div class="d-flex flex-wrap ma-10">
    <v-row>
      <v-col cols="8" class="d-flex flex-wrap">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          :class="
            (i === 6 || i === 18 || i === 30 || i === 42) &&
            !$vuetify.breakpoint.mobile
              ? 'ml-7 mt-n4'
              : ''
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
      <!-- {{ skills }} -->
    </v-row>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data: () => ({
    skills: [
      {
        skillame: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillame: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillame: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillame: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
    ],
  }),
};
</script>

