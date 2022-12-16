<template>
  <div class="size-all">
    <v-row class="size-all d-flex justify-md-center">
      <v-col
        cols="12"
        md="7"
        class="
          mt-8 mt-md-0
          ml-md-n4
          pl-md-16
          flex
          h-full
          d-flex
          justify-md-end justify-end
          align-center
        "
      >
        <v-card
          dark
          class="no-break glass-fx mt-n6 rounded-xl pa-md-10 pa-4 ma-4"
        >
          <v-card-title class="no-break"
            >Raphael Ferreira Bertoldo, 24 anos, Uberlândia-MG</v-card-title
          >
          <v-card-text>
            Trabalho com desenvlvimento de software há 3 anos, comecei como
            desenvolvedor front-end, hoje sou Full-Stack em uma empresa de
            marketing, onde desenvolvemos e mantemos um e-commerce, um produto
            WhiteLabel, com arquitetura para B2B2C. Sou muito interessado no
            trabalho e sempre busco dar o meu máximo em tudo que faço, sou
            apaixonado por música e já fui produtor músical, hoje sou um
            entusiasta da área de tecnólogia, amo trabalhar com o que faço, sou
            criativo e tenho muitas idéias, já fiz diversos projetos diferentes
            e já participei de alguns projetos voluntários. Estou cursando a
            faculdade de engenharia de software, pretendo me profissionalizar
            ainda mais dentro da minha área. Curtiu o meu perfil, que tal um
            café e um bate-papo para nos conhecermos melhor ?
          </v-card-text>
          <v-row class="mx-auto mt-4">
            <v-col
              v-for="(contact, i) in contacts"
              :key="i"
              class="d-flex flex-column align-center"
              cols="3"
            >
              <a
                :href="contact.link"
                target="blank"
                style="text-decoration: none"
              >
                <v-icon class="mx-auto hover-icon" size="60">
                  {{ contact.icon }}
                </v-icon>
              </a>
            </v-col>
            <v-col class="d-flex flex-column align-center" cols="3">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="mx-auto hover-icon"
                    size="60"
                  >
                    mdi-gmail
                  </v-icon>
                </template>
                <span>rxphxel7k@gmail.com</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="mb-0 mb-md-14 flex ml-n16 h-full d-flex align-center mt-n16"
      >
        <v-img src="../assets/ReadyPlayerMe-Avata-2.png"></v-img>
        <!-- <div
          class="
            shadow-fx-1
            mt-n10 mt-md-2
            avatar
            mx-auto
            ml-md-0 ml-n16
            mb-md-0 mb-n16
          "
          :style="$vuetify.breakpoint.mobile ? 'transform: scale(0.9)' : ''"
        ></div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContactView",
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
  data: () => {
    return {
      contacts: [
        {
          icon: "mdi-github",
          link: "https://github.com/raphaelbertoldo",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/raphaelbertoldo/",
        },
        {
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send?phone=5534993139666",
        },
      ],
    };
  },
};
</script>


<style>
.hover-icon {
  opacity: 0.5;
}
.hover-icon:hover {
  opacity: 1;
}
.avatar {
  margin-top: 20px;
  min-height: 702px;
  min-width: 702px;
  background: url(../assets/ReadyPlayerMe-Avata-2.png) no-repeat;
}
.v-card__title {
  word-break: break-word;
}
</style>