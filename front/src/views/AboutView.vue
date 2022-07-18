<template>
  <div class="about white--text">
    <h1>
      This is an about page UsersFilter: {{ UsersFilter }} listComp:{{
        listComp
      }}
    </h1>
    <div class="white">
      <v-text-field v-model="searchField"></v-text-field>
      <v-btn color="indigo" @click="handdleFindUser()">BUSCAR</v-btn>
    </div>
  </div>
</template>
<script>
import { api } from "@/services/config";
export default {
  computed: {
    listComp() {
      return this.handdleFindUser();
    },
  },
  methods: {
    handdleFindUser() {
      if (this.searchField) {
        const list = api
          .get(`defaults/querys?name=${this.searchField}`)
          .then((res) => (this.UsersFilter = res.data))
          .catch((error) => {
            console.log(error);
          });
        return list;
      }
      if (!this.searchField) {
        return api
          .get(`defaults`)
          .then((res) => (this.UsersFilter = res.data))
          .catch((error) => {
            console.log(error);
          });
      }
      // if (this.searchField <= 0) {
      //   return alert("Sem dados");
      // }
      return api.get("defaults");
    },
  },
  mouted() {
    this.handdleFindUser();
  },
  data() {
    return {
      searchField: "",
      UsersFilter: [],
    };
  },
};
</script>

