<template>
  <div>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="10" class="mt-16">
        <div class="mb-4 d-flex justify-space-between align-center white--text">
          <div class="d-flex align-center">
            <h1 class="">Habilidades</h1>
            <v-text-field
              v-model="searchField"
              hide-details
              dark
              dense
              outlined
              append-icon="mdi-magnify"
              color="blue"
              placeholder="Pesquisar por uma habilidade"
              class="blue-neon-1 mx-8"
              style="min-width: 560px"
            />
          </div>
          <v-btn color="secondary" fab @click="skillForm = true">
            <v-icon color="primary">mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-data-table
          :headers="headers"
          :items="skills"
          item-class="blue--text"
          hide-default-footer
          class="elevation-1"
          :loading="!skills"
        >
          <template v-slot:[`item.edit`]="{ item }">
            <v-icon @click="editSkill(item)" color="primaryL">
              mdi-pencil
            </v-icon>
          </template>
          <template v-slot:[`item.delete`]="{ item }">
            <v-icon @click="deleteSkill(item)" color="primaryL"
              >mdi-trash-can</v-icon
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <!-- ADD SKILL -->
    <v-dialog v-model="skillForm" max-width="400px" overlay-opacity="0.9">
      <div
        class="rounded-lg px-6 py-4 container-glass white--text"
        style="max-width: 400px"
      >
        <div class="d-flex align-center justify-space-between">
          <span>Adicione uma habilidade</span>
          <v-icon color="white" @click="skillForm = false">
            mdi-close-box-outline
          </v-icon>
        </div>
        <v-text-field
          v-model="skillNameField"
          hide-details
          dark
          outlined
          color="blue"
          placeholder="Nome da habilidade"
          class="blue-neon-1 mt-6"
        />
        <v-text-field
          v-model="experienceField"
          hide-details
          dark
          outlined
          color="blue"
          placeholder="Experiência"
          class="blue-neon-1 mt-4"
        />
        <v-textarea
          v-model="descriptionField"
          hide-details
          dark
          outlined
          color="blue"
          placeholder="Descrição"
          class="blue-neon-1 mt-4 mb-2"
        />
        <div class="mb-4 d-flex flex-row-reverse">
          <v-btn
            color="secondary"
            class="elevation-0 primary--text font-weight-bold"
            @click="addSkill()"
          >
            Salvar
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import { api } from "../../services/config";
import skills from "../../services/skills";

export default {
  computed: {
    // itemList() {
    //   const skillComp = this.skills;
    //   return skillComp;
    // },
  },
  methods: {
    // editSkill(item){
    // const id = item._id;
    // api.patch()
    // },

    deleteSkill(item) {
      const id = item._id;
      api
        .delete(`/skills/${id}`)
        .then(() => {
          this.getSkills();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async addSkill() {
      api
        .post("skills", {
          skillName: this.skillNameField,
          experience: this.experienceField,
          description: this.descriptionField,
        })
        .then(() => {
          this.getSkills();
        })
        .catch((error) => {
          console.log(error);
        });
      this.skillForm = false;
    },
    getSkills() {
      return skills
        .list()
        .then((res) => {
          this.skills = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getSkills();
  },
  data() {
    return {
      skillNameField: "",
      experienceField: "",
      descriptionField: "",
      skillForm: false,
      searchField: "",
      skills: [],
      skillse: [
        { skillName: "teste", experience: "teste", description: "teste" },
      ],

      headers: [
        { text: "Habilidade", value: "skillName", class: "primary--text " },
        { text: "Experiência", value: "experience", class: "primary--text " },
        { text: "Descrição", value: "description", class: "primary--text" },
        { text: "Editar", value: "edit", class: "primary--text" },
        { text: "Deletar", value: "delete", class: "primary--text" },
      ],
    };
  },
};
</script>
<style scoped>
.v-data-table {
  background-color: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(5px) !important;
  color: white !important;
}
.style-1 {
  background-color: rgb(215, 215, 44);
}
</style>
