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
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex aling-md-center justify-md-center"
        >
          <div class="window-os">
            <div class="window-os_header gradiente-1 d-flex">
              <div
                v-for="(icon, i) in icons"
                :key="i"
                :class="icon.color"
                class="window-os-option ml-2"
              >
                <v-icon size="10">
                  {{ icon.mdi }}
                </v-icon>
              </div>
            </div>
            <p
              class="gradiente-yellow-1 lineA line px-4"
              :style="`font-size: ${
                $vuetify.breakpoint.mobile ? `24px` : `48px`
              }`"
            >
              {{ lineA }}
            </p>
            <p
              class="gradiente-yellow-1 lineB line px-4"
              :style="`font-size: ${
                $vuetify.breakpoint.mobile ? `24px` : `48px`
              }`"
            >
              {{ lineB }}
            </p>
            <div
              class="mt-md-16 justify-center mb-16 d-flex"
              :class="$vuetify.breakpoint.mobile ? `flex-column` : ``"
            >
              <v-btn
                v-for="(btn, b) in routesBtns"
                :key="b"
                :to="btn.to"
                color="gradiente-1"
                class="mx-4 my-2 blue-neon"
                :class="btn.class"
              >
                {{ btn.title }}
              </v-btn>
            </div>
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
  data: () => ({
    lineA: "",
    lineB: "",
    routesBtns: [
      { title: "Skills", to: "/skills", class: "show-me-1" },
      { title: "Projects", to: "/projects", class: "show-me-2" },
      { title: "Contact", to: "/contact", class: "show-me-3" },
    ],
    icons: [
      { mdi: "mdi-close", color: "red" },
      { mdi: "mdi-minus", color: "yellow" },
      { mdi: "mdi-arrow-expand", color: "green" },
    ],
  }),

  mounted() {
    this.handleLoad();
    this.typingLines(`Raphael F. Bertoldo`, "lineA");
  },

  methods: {
    handleLoad() {
      this.$vloading.show();
      setTimeout(() => {
        this.$vloading.hide();
      }, 1000);
    },
    async typingLines(name, key) {
      window.document
        .querySelector(`.${key}`)
        .classList.add("typing-animation");
      let res = [];

      const initialDelay = 2000;
      const typingInterval = 100;

      let delay = initialDelay;

      this[key] = "";

      const typeCharacterByCharacter = () => {
        return new Promise((resolve) => {
          let currentDelay = delay;

          for (let l of name.split("")) {
            setTimeout(() => {
              res.push(l);
              this[key] = res.join("");

              if (res.length === name.length) {
                resolve();
              }
            }, currentDelay);

            currentDelay += typingInterval;
          }
        });
      };

      await typeCharacterByCharacter();

      if (key === "lineA") {
        await this.typingLines("Software Engineer", "lineB");
      }
    },
  },
};
</script>
<style scoped>
.window-os_header {
  height: 30px;
  margin-bottom: 12px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  align-items: center;
}
.window-os-option {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.window-os {
  border: 1px solid rgba(255, 255, 255, 0.514);
  min-height: 400px;
  max-height: 400px;
  max-width: 100%;
  min-width: 100%;
  margin-block: auto;
  margin-inline: auto;
  border-radius: 15px;
  border-radius: 15px;
}
@media (max-width: 960px) {
  .window-os {
    min-height: 310px;
    max-height: 310px;
    min-width: 90%;
    max-width: 90%;
    margin-block: 20%;
  }
}

@media (min-width: 960px) {
  .window-os {
    margin-left: 200px;
  }
}
/* TYPING ANIMATION */
.typing-animation {
  animation: blinkCursor 0.5s infinite normal,
    hideCursor 0.5s 5s forwards normal, typing 1.5s steps(40) 1s normal both;
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
  to {
    border-right: none;
  }
}
@keyframes typing {
  0% {
    width: 0;
  }

  100% {
    width: fit-content;
  }
}
.line {
  border-right: 2px solid rgba(254, 106, 55, 0);
  white-space: nowrap;
  overflow: hidden;
}

.avatar {
  height: 702px;
  width: 702px;
  background: url(../assets/images/avatar-me.png) no-repeat;
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
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
</style>
