<template>
  <div class="mt-0 mt-md-16 d-flex justify-center outlined-card">
    <div class="d-flex align-center">
      <v-icon color="white" size="30" @click="$emit('selectPrevSkill')"
        >mdi-arrow-left</v-icon
      >
    </div>
  <v-card
    :style="
      $vuetify.breakpoint.mobile ? 'max-width: 300px' : 'max-width: 400px'
    "
    dark
    class="py-6 align-center justify-center d-flex glass-fx-dark rounded-xl mx-4"
  >
    <div
      class="mx-4 d-flex flex-md-column align-center justify-center"
      style="height: auto"
    >
      <div class="ma-0 ma-md-4">
        <v-img
          class="shadow-2"
          :src="selectSkillCard.img"
          :max-width="$vuetify.breakpoint.mobile ? '50px' : '100px'"
          :max-height="$vuetify.breakpoint.mobile ? '50px' : '100px'"
        />
      </div>
      <div
        :style="$vuetify.breakpoint.mobile ? 'width: 200px' : 'width:350px'"
        key=""
        :class="
          !selectSkillCard.name
            ? ' d-flex align-center justify-center flex-column'
            : 'd-flex align-center flex-column justify-center'
        "
      >
        <v-card-title
          class="font-weight-bold"
          :style="
            $vuetify.breakpoint.mobile ? 'font-size: 10pt' : 'font-size: 14pt'
          "
        >
          {{ selectSkillCard.name || "Selecione uma habilidade" }}
        </v-card-title>
        <v-card-subtitle
          class="mt-1"
          :style="
            $vuetify.breakpoint.mobile ? 'font-size: 10pt' : 'font-size: 12pt'
          "
        >
          {{ selectSkillCard.description }}
        </v-card-subtitle>
      </div>
    </div>
  </v-card>
  <div class="d-flex align-center">
      <v-icon color="white" size="30" @click="$emit('selectNextSkill')"
        >mdi-arrow-right</v-icon
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSelectSkill",
  props: ["selectSkillCard"],
};
</script>
<style></style>
