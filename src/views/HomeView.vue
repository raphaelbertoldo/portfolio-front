<template>
  <div class="flex size-all">
    <div class="d-flex" style="min-height: 100%; margin: 0">
      <v-img
        src="../assets/animations/ufo.gif"
        style="position: absolute; padding-left: -100px"
        class="float-air"
        :style="$vuetify.breakpoint.mobile ? 'transform: scale(0.4)' : ''"
      />
      <v-img
        src="../assets/animations/ufo.gif"
        style="position: absolute"
        class="float-air-2"
        :style="$vuetify.breakpoint.mobile ? 'transform: scale(0.1)' : ''"
      />
      <v-img
        src="../assets/animations/ufo.gif"
        style="position: absolute"
        class="float-air-3"
        :style="!$vuetify.breakpoint.mobile ? 'transform: scale(0.1)' : ''"
      />
      <v-img
        src="../assets/animations/ufo.gif"
        style="position: absolute"
        class="float-air-4"
        :style="!$vuetify.breakpoint.mobile ? 'transform: scale(0.1)' : ''"
      />
      <v-row class="align-center d-flex justify-center pa-n16 mx-md-16">
        <v-col cols="12" md="6">
          <div
            v-if="!$vuetify.breakpoint.mobile"
            style="width: auto; max-width: 8em"
            class="d-flex flex-column justify-center"
          >
            <p
              class="gradiente-yellow-1 no-flex line typing-animation content pl-8"
            >
              Raphael F. Bertoldo,
            </p>
            <p class="gradiente-yellow-1 line typing-animation2 pl-10">
              Software Engineer.
            </p>
          </div>
          <div
            v-if="$vuetify.breakpoint.mobile"
            class="d-flex justify-center mx-auto mt-n14"
          >
            <div class="mx-auto" style="width: 330px">
              <p
                class="gradiente-yellow-1 no-flex line-b typing-animation-b content"
              >
                Raphael F. Bertoldo,
              </p>
              <p class="gradiente-yellow-1 line-b typing-animation2-b">
                Software Engineer.
              </p>
            </div>
          </div>
          <div
            class="mt-16 d-flex mx-1 flex-row-reverse mb-16"
            v-if="!$vuetify.breakpoint.mobile"
          >
            <v-btn
              v-for="(btn, b) in routesBtns"
              :key="b"
              :to="btn.to"
              color="primary"
              outlined
              class="mx-4 my-2 blue-neon"
              :class="btn.class"
            >
              {{ btn.title }}
            </v-btn>
          </div>
          <div
            class="flex-column d-flex mx-16 mb-16"
            v-if="$vuetify.breakpoint.mobile"
          >
            <v-btn
              outlined
              v-for="(btn, b) in routesBtns"
              :key="b"
              :to="btn.to"
              color="primary"
              class="mx-10 my-2 blue-neon"
              :class="btn.class"
            >
              {{ btn.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="flex d-flex align-center justify-center mt-md-n10 mt-md-6 mt-n16 mb-0 mb-md-n16"
        >
          <div
            style="position: absolute"
            class="shadow-fx-1 avatar mx-auto pl-6"
            :style="$vuetify.breakpoint.mobile ? 'transform: scale(0.7)' : ''"
          ></div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    this.handleLoad();
  },

  methods: {
    handleLoad() {
      this.$vloading.show();
      setTimeout(() => {
        this.$vloading.hide();
      }, 1000);
    },
  },
  data: () => ({
    me: {
      name: "Raphael",
      lastname: "Ferreira Bertoldo",
    },
    routesBtns: [
      { title: "Habilidades", to: "/habilidades", class: "show-me-1" },
      { title: "Projetos", to: "/projetos", class: "show-me-2" },
      { title: "Contato", to: "/contato", class: "show-me-3" },
    ],
  }),
};
</script>
<style scoped>
.avatar {
  bottom: 0px;
  height: 702px;
  width: 702px;
  background: url(../assets/images/ReadyPlayerMe-Avatar2.png) no-repeat;
}

.float-air {
  opacity: 0;
  width: 200px;
  background-size: contain;
  transform: scaleX(-1);
  animation: float-airplane 5s 1s;
  animation-fill-mode: unset;
}

.float-air-2 {
  margin-top: 180px;
  margin-left: 100%;
  animation: float-airplane-2 4s 10s;
  animation-fill-mode: unset;
}
.float-air-3 {
  max-width: 1810px;
  margin-left: 100%;
  animation: float-airplane-2 5s 11s;
  animation-fill-mode: unset;
}
.float-air-4 {
  max-width: 150px;
  margin-left: 100%;
  animation: float-airplane-2 7s 11.2s;
  animation-fill-mode: unset;
}
.pulse-op {
  animation: pulseop 1s 0s 5s backwards alternate;
}
@keyframes float-airplane-2 {
  0% {
    transform: rotate(10deg);
    margin-top: 300px;
    margin-left: 100%;
  }
  100% {
    transform: rotate(30deg);
    transform: scale(0.4);

    margin-top: 0px;
    margin-left: -100%;
  }
}
@keyframes float-airplane {
  0% {
    opacity: 0;
    margin-left: -300px;
    margin-top: -300px;
  }
  20% {
    opacity: 1;
  }
  21% {
    opacity: 0;
  }
  22% {
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  28% {
    opacity: 1;
  }

  50% {
    opacity: 1;

    margin-top: 250px;
  }

  100% {
    opacity: 0;

    margin-left: 100%;
    margin-right: -300px;
    margin-top: -50px;
  }
}

@keyframes pulseop {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(0.9);
  }
}
* {
  margin: 0;
  padding: 0;
}
.show-me-1 {
  opacity: 0;
  animation: delay 0.5s 8s forwards normal, pulse-neon 3s 12s infinite normal;
}
.show-me-2 {
  opacity: 0;
  animation: delay 0.5s 8.5s forwards normal, pulse-neon 3s 12s infinite normal;
}
.show-me-3 {
  opacity: 0;
  animation: delay 0.5s 9s forwards normal, pulse-neon 3s 12s infinite normal;
}

@keyframes delay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes pulse-neon {
  0% {
    box-shadow: 0px 0px 150px 50px rgb(7, 176, 242, 0.2);
  }
  50% {
    box-shadow: 0px 0px 50px 50px rgb(7, 176, 242, 0.1);
  }
  100% {
    box-shadow: 0px 0px 150px 50px rgb(7, 176, 242, 0.2);
  }
}
.line {
  border-right: 2px solid rgba(254, 106, 55, 0);
  font-size: 3.7em;
  white-space: nowrap;
  overflow: hidden;
}
.line-b {
  border-right: 2px solid rgba(254, 106, 55, 0);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
}
.typing-animation {
  animation: blinkCursor 0.5s infinite normal,
    hideCursor 0.5s 5s forwards normal, typing 1.5s steps(40) 1s normal both;
}
.typing-animation2 {
  animation: blinkCursor 0.5s 5s infinite normal,
    typing2 1.5s steps(40) 6s normal both;
}
.typing-animation-b {
  animation: blinkCursor 0.5s infinite normal,
    hideCursor 0.5s 5s forwards normal, typing-b 1.5s steps(40) 1s normal both;
}
.typing-animation2-b {
  animation: blinkCursor 0.5s 5s infinite normal,
    typing2-b 1.5s steps(40) 6s normal both;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 740px;
    padding-right: -120px;
  }
}
@keyframes typing-b {
  from {
    width: 0;
  }
  to {
    width: 330px;
    padding-right: -120px;
  }
}
@keyframes typing2 {
  from {
    width: 0;
  }
  to {
    width: 700px;
  }
}
@keyframes typing2-b {
  from {
    width: 0;
  }
  to {
    width: 300px;
  }
}
@keyframes blinkCursor {
  from {
    border-right-color: transparent;
  }
  to {
    border-right-color: rgba(255, 203, 41, 1);
  }
}
@keyframes hideCursor {
  from {
    border-right-color: rgba(255, 203, 41);
  }
  to {
    border-right: none;
  }
}
</style>
