<template>
  <div class="size-all">
    <v-row class="ma-16 size-all">
      <v-col
        cols="6"
        class="mt-n16 flex h-full d-flex justify-end align-center"
      >
        <v-card dark class="glass-fx mt-n16 rounded-xl pa-10" width="70%">
          <v-card-title>Raphael Ferreira Bertoldo, 24 anos</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non
            aperiam quibusdam quidem voluptate aliquam ipsa fugit quasi totam
            enim modi ratione, rerum molestias cumque eaque mollitia! A,
            laboriosam illo! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quae non aperiam quibusdam quidem voluptate aliquam ipsa fugit
            quasi totam enim modi ratione, rerum molestias cumque eaque
            mollitia! A, laboriosam illo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae non aperiam quibusdam quidem voluptate
            aliquam ipsa fugit quasi totam enim modi ratione, rerum molestias
            cumque eaque mollitia! A, laboriosam illo!
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
      <v-col cols="4">
        <!-- <v-img src="../assets/ReadyPlayerMe-Avatar-FullBody.png"></v-img> -->
        <div
          style="position: absolute"
          class="shadow-fx-1 avatar mx-auto pl-6"
        ></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ContactView",
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
  opacity: 0.1;
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
</style>