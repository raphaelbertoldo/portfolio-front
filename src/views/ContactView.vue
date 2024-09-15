<template>
  <div class="size-all">
    <v-row class="size-all d-flex justify-md-center">
      <v-col
        cols="12"
        md="7"
        class="shadow-fx-1 mt-8 mt-md-0 ml-md-n4 pl-md-16 flex h-full d-flex justify-md-end justify-end align-center"
      >
        <v-card
          dark
          class="no-break glass-fx mt-n6 rounded-xl pa-md-10 pa-4 ma-4"
        >
          <v-card-title class="no-break"
            >Raphael Ferreira Bertoldo, 26y, Minas Gerais, Brazil</v-card-title
          >
          <v-card-text>
            In the application development field, I embarked on this journey 4
            years ago driven by pure curiosity and a strong desire to create
            solutions that would positively impact people's lives by addressing
            their needs and challenges. Today, as I continue to immerse myself
            in this field, I find great satisfaction in knowing that my work has
            already touched the lives of thousands, and this is what drives me
            to continually enhance my problem-solving skills. My main skill is
            being dedicated and committed to what I do.
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
                <span>raphaelferreirabertoldo@gmail.com</span>
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
        <!-- <v-img src="../assets/ReadyPlayerMe-Avata-2.png"></v-img> -->
        <v-img
          class="image-profile shadow-fx-1"
          src="../assets/images/eu.jpeg"
        ></v-img>
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
.v-card__title {
  word-break: break-word;
}
.image-profile {
  border-radius: 20px;
  filter: brightness(1);
}
</style>
