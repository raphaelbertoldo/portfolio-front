<template>
  <div
    class="
      black
      d-flex
      align-center
      justify-center
      gradiente-blue-darken
      size-all
      h-full
    "
  >
    <div class="mt-n16 d-flex flex-column align-center justify-center">
      <!-- <v-btn @click="$emit('closeDialog')"></v-btn> -->
      closecomp: {{ closeComp }}
      <div class="tremble">
        <div class="satelite"></div>
      </div>
      <h1 class="mx-auto" style="position: fixed; margin-top: 350px">
        Carregando...
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingPage",
  props: ["dialog", "closeComp"],
};
</script>
<style scoped>
.satelite {
  height: 200px;
  width: 200px;
  background: url(https://i.ibb.co/ZVTYRRK/satelite-0.png) no-repeat;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: sateliteAnim 2s 0s infinite normal;
}
.tremble {
  margin-top: 0;
  animation: trembleAnim 3s 0s infinite normal;
}
.gradiente-blue-darken {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(25, 6, 197, 0.7) -50%,
    rgba(0, 212, 255, 1) 100%
  );
  animation: close 1s 3s both normal;
  display: none;
}

@keyframes trembleAnim {
  25% {
  }
  50% {
    margin-top: -75px;
  }
  75% {
  }
}
@keyframes sateliteAnim {
  25% {
    background: url(https://i.ibb.co/ZXqCGBc/satelite-1.png) no-repeat;
  }
  50% {
    background: url(https://i.ibb.co/FbQyKMZ/sateite-2.png) no-repeat;
  }

  75% {
    background: url(https://i.ibb.co/GCp6nFy/sateite.png) no-repeat;
  }
}
</style>
