<template>
  <div class="d-flex size-all">
    <v-card
      class="mx-auto my-auto pa-6"
      style="
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        width: 400px;
      "
    >
      <v-form @submit.prevent="submit()" ref="form">
        <v-card-title
          class="align-center justify-center d-flex mb-4 ml-1 primary--text"
        >
          <h3>Login do administrador</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field
            :rules="[rules.required, rules.email]"
            outlined
            class="text--center"
            dark
            v-model="email"
            color="primary"
            label="E-mail"
          />
          <v-text-field
            v-model="password"
            :rules="[rules.required]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            type="password"
            @click:append="showPassword = !showPassword"
            outlined
            class="text--center"
            dark
            color="primary"
            label="Password"
          />
        </v-card-text>
        <div class="align-center justify-center d-flex">
          <v-btn
            style="
              background-color: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(5px);
              width: 120px;
            "
            class="mt-n4 mb-2 elevation-0 primary--text font-weight-bold"
            type="submit"
          >
            Entrar
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import swal from "sweetalert";
import { rules } from "../../services/rules";
import { api } from "@/services/config";
export default {
  methods: {
    submit() {
      if (this.$refs.form.validate())
        return api
          .post("auth/login", {
            username: this.email,
            password: this.password,
          })
          .then((res) => {
            this.user = res.data;

            console.log(res.data);
          })
          .catch((error) => console.log(error));
      if (!this.$refs.form.validate())
        return swal(
          "Falha no Login, revise os dados inseridos e tente novamente !"
        );
      // alert("!!!");
    },
  },

  mounted() {
    // api
    //   .post("auth/login", {
    //     username: "",
    //     password: "",
    //   })
    //   .then((res) => {
    //     this.user = res.data;
    //     console.log(res.data);
    //   })
    //   .catch((error) => console.log(error));
  },
  data() {
    return {
      rules,
      showPassword: false,
      user: null,
    };
  },
};
</script>
