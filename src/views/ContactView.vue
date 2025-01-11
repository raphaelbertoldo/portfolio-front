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
            >{{ $t('contact.title') }}</v-card-title
          >
          <v-card-text>
            {{ $t('contact.description') }}
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
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      class="mx-auto hover-icon"
                      size="60"
                    >
                      {{ contact.icon }}
                    </v-icon>
                  </template>
                  <span>{{ $t(contact.tooltip) }}</span>
                </v-tooltip>
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
                <span>{{ $t('contact.socialLinks.email') }}: raphaelferreirabertoldo@gmail.com</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="image-container mb-0 mb-md-14 flex h-full d-flex align-center"
      >
        <v-img
          class="image-profile shadow-fx-1"
          src="https://pub-e73d5ce4f732457680be7f9fe09b96d7.r2.dev/raphael.jpeg"
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
          tooltip: "contact.socialLinks.github"
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/raphaelbertoldo/",
          tooltip: "contact.socialLinks.linkedin"
        },
        {
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send?phone=5534993139666",
          tooltip: "contact.socialLinks.whatsapp"
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
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease;
}

.image-container {
  padding: 1rem;
}

@media (max-width: 960px) {
  .image-container {
    order: -1;
    margin-top: 2rem !important;
  }
  
  .image-profile {
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (min-width: 960px) {
  .image-container {
    margin-left: -4rem;
  }
}
</style>
