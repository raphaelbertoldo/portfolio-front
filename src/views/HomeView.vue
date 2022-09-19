<template>
  <div class="flex size-all">
    <div class="d-flex" style="min-height: 100%; margin: 0">
      <v-img
        src="../assets/ufo.png"
        style="position: absolute; padding-left: -100px"
        class="float-air"
      />
      <v-img
        src="../assets/ufo.png"
        style="position: absolute"
        class="float-air-2"
      />
      <v-img
        src="../assets/ufo.png"
        style="position: absolute"
        class="float-air-3"
      />
      <v-img
        src="../assets/ufo.png"
        style="position: absolute"
        class="float-air-4"
      />
      <v-row class="align-center d-flex justify-center pa-n16 mx-md-16">
        <v-col cols="12" md="6">
          <div
            v-if="!$vuetify.breakpoint.mobile"
            style="width: auto; max-width: 8em"
            class="d-flex flex-column justify-center"
          >
            <p
              class="
                gradiente-yellow-1
                no-flex
                line
                typing-animation
                content
                pl-8
              "
            >
              Olá, meu nome e Raphael,
            </p>
            <p class="gradiente-yellow-1 line typing-animation2 pl-10">
              sou desenvolvedor web.
            </p>
          </div>
          <div
            v-if="$vuetify.breakpoint.mobile"
            class="d-flex justify-center mx-auto mt-n14"
          >
            <div class="mx-auto" style="width: 330px">
              <p
                class="
                  gradiente-yellow-1
                  no-flex
                  line-b
                  typing-animation-b
                  content
                "
              >
                Olá, meu nome e Raphael,
              </p>
              <p class="gradiente-yellow-1 line-b typing-animation2-b">
                sou desenvolvedor web.
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
              v-for="(btn, b) in routesBtns"
              :key="b"
              :to="btn.to"
              color="primary"
              class="mx-10 my-2 blue-neon"
              :class="btn.class"
            >
              {{ btn.title }}
            </v-btn>
            <!-- <v-btn
              outlined
              color="primary"
              class="mx-10 my-2 show-me-2 blue-neon"
            >
              PORTFÓLIO
            </v-btn>
            <v-btn
              outlined
              color="primary"
              class="mx-10 my-2 show-me-1 blue-neon"
            >
              EXPERIÊNCIA
            </v-btn> -->
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="flex d-flex align-center justify-center mt-md-n10 mt-6 mb-n16"
        >
          <div
            style="position: absolute"
            class="shadow-fx-1 avatar mx-auto pl-6"
          ></div>
          <!-- <v-img
            src="../assets/me-photo.png"
            class="
              blue-neon
              rounded-circle
              gradiente-1
              d-flex
              align-center
              justify-center
            "
            style="max-width: 420px"
          /> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
.shadow-fx-1 {
  filter: drop-shadow(0px 0px 40px #07aff2a6);
}
.avatar {
  margin-top: 80px;
  height: 702px;
  width: 702px;
  background: url(https://i.ibb.co/bmvSS7D/avatar.png) no-repeat;
}

.float-air {
  opacity: 0;
  margin-left: 300px;
  margin-top: 300px;
  animation: float-airplane 3s 4s;
  animation-fill-mode: unset;
}
.float-air-2 {
  /* opacity: 0; */
  margin-left: 100%;
  margin-top: 300px;
  animation: float-airplane-2 2s 10s;
  animation-fill-mode: unset;
}
.float-air-3 {
  max-width: 200px;
  margin-left: 100%;
  margin-top: 300px;
  animation: float-airplane-2 3s 11s;
  animation-fill-mode: unset;
}
.float-air-4 {
  max-width: 150px;
  margin-left: 100%;
  margin-top: 300px;
  animation: float-airplane-2 3s 11.2s;
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
    /* opacity: 1; */
    filter: brightness(1);
  }
  to {
    /* opacity: 0.8; */
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
  font-size: 3em;
  white-space: nowrap;
  overflow: hidden;
}
.line-b {
  border-right: 2px solid rgba(254, 106, 55, 0);
  font-size: 22px;
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

