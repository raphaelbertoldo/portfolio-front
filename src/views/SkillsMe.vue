<template>
  <div class="">
    <div class="align-centermy-md-10 my-4 flex d-flex block ml-16 pl-16">
      <v-icon size="80" class="gradiente-yellow-1 mx-6"
        >mdi-account-hard-hat-outline
      </v-icon>
      <h1 class="block gradiente-yellow-1 mt-4" style="font-size: 42pt">
        Skills
      </h1>
    </div>
    <v-row class="d-flex flex-columns" style="overflow: auto">
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
            class="hexagon ma-2 d-flex align-center justify-center text-center"
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
            <span>{{ skill.skillName }}</span>
          </div>
        </div>
      </div>
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
        skillName: "HTML5",
        experience: "HTML5",
        description:
          "HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5HTML5",
      },
    ],
  }),
};
</script>

