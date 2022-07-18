<template>
  <div class="d-flex" style="min-height: 100%">
    <div class="">
      <v-img
        src="../assets/ufo.png"
        style="max-width: 320px; position: absolute; padding-left: -100px"
        class="float-air"
      ></v-img>
    </div>
    <v-row class="align-center justify-center px-n16 mx-16 mt-n16">
      <v-col cols="6" class="flex align-center">
        <!-- <h2 class="yellow--text">{{ me }}</h2> -->
        <div
          style="width: auto; max-width: 15em"
          class="d-flex flex-column justify-center"
        >
          <p
            class="gradiente-text-1 no-flex line typing-animation content pl-8"
          >
            Olá, meu nome e {{ me[0].firstName }},
          </p>
          <p class="gradiente-text-1 line typing-animation2 pl-10">
            sou desenvolvedor web.
          </p>
        </div>
        <div class="d-flex flex flex-row-reverse mt-16">
          <v-btn outlined color="primary" class="ml-8 show-me-3 blue-neon"
            >HABILIDADES</v-btn
          >
          <v-btn outlined color="primary" class="ml-8 show-me-2 blue-neon"
            >PORTFÓLIO</v-btn
          >
          <v-btn outlined color="primary" class="ml-8 show-me-1 blue-neon"
            >EXPERIÊNCIA</v-btn
          >
        </div>
      </v-col>
      <v-col cols="6" class="flex d-flex align-center justify-center mt-n10">
        <v-img
          src="../assets/me-photo.png"
          style="max-width: 720px"
          class="pulse-op mt-n16"
        >
        </v-img>
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
</template>

<script>
import me from "../services/me";
export default {
  created() {
    this.postMe();
  },
  methods: {
    // deleteUser(item) {
    //   const id = item._id;
    //   api
    //     .delete(`/me/delete/${id}`)
    //     .then(() => {
    //       console.log("Usuário deletado com sucesso");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  data() {
    return {
      me: null,
    };
  },
  mounted() {
    me.list()
      .then((res) => {
        this.me = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  name: "HomeView",

  components: {},
};
</script>
<style scoped>
.float-air {
  opacity: 0;
  margin-left: -300px;
  margin-top: -300px;

  animation: float-airplane 8s 1s infinite normal;
}
.pulse-op {
  animation: pulseop 1s 0s 5s backwards alternate;
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

  animation: delay 0.5s 10s forwards normal, pulse-neon 3s 12s infinite normal;
}
.show-me-2 {
  opacity: 0;

  animation: delay 0.5s 10.5s forwards normal, pulse-neon 3s 12s infinite normal;
}
.show-me-3 {
  opacity: 0;

  animation: delay 0.5s 11s forwards normal, pulse-neon 3s 12s infinite normal;
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
.typing-animation {
  animation: blinkCursor 0.5s infinite normal,
    hideCursor 0.5s 5s forwards normal, typing 3s steps(40) 1s normal both;
}
.typing-animation2 {
  animation: blinkCursor 0.5s 5s infinite normal,
    typing2 3s steps(40) 6s normal both;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 15em;
    padding-right: -120px;
  }
}
@keyframes typing2 {
  from {
    width: 0;
  }
  to {
    width: 14em;
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

