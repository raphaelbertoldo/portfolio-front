<template>
  <div class="d-flex flex-wrap ma-md-10">
    <v-row>
      <v-col
        style="position: fixed"
        cols="12"
        :md="$vuetify.breakpoint.width ? 8 : 8"
        class="d-flex flex-wrap mx-md-16 px-md-16"
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          :class="
            (i === 6 || i === 18 || i === 30 || i === 42) &&
            !$vuetify.breakpoint.mobile
              ? 'ml-md-7 mt-md-n4'
              : ''
          "
        >
          <div
            class="
              hexagon
              ma-md-2
              d-flex
              align-center
              justify-center
              text-center
            "
            :class="
              i === 6 || i === 18 || i === 30 || i === 42
                ? 'ml-md-16 mt-md-n4'
                : '' || i > 5
                ? 'mt-md-n8'
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
      {
        skillName: "HTML5",
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

