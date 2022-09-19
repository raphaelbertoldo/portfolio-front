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
            <v-btn @click="test()">here</v-btn>
          </div>
          <v-btn color="secondary" fab @click="skillForm = true">
            <v-icon color="primary">mdi-plus</v-icon>
          </v-btn>
        </div>
        <v-data-table
          :headers="headers"
          :items="skills"
          item-class="blue--text"
          hide-default-
          class="elevation-1 custom-table"
          :loading="!skills"
        >
          <template v-slot:[`item.edit`]="{ item }">
            <v-icon @click="openDialogEdit" color="primaryL">
              mdi-pencil
            </v-icon>
            <v-dialog
              v-model="skillFormEdit"
              max-width="400px"
              overlay-opacity="0.9"
            >
              <ModalForm
                @submit="editSkill(item)"
                @close="skillFormEdit = false"
                v-model="form"
              />
            </v-dialog>
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
      <ModalForm
        @submit="addSkill()"
        @close="skillForm = false"
        v-model="form"
      />
    </v-dialog>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { api } from "../../services/config";
import skills from "../../services/skills";
import ModalForm from "@/components/Admin/ModalForm.vue";

export default {
  components: { ModalForm },
  name: "AddSkills",
  computed: {
    // itemList() {
    //   const skillComp = this.skills;
    //   return skillComp;
    // },
  },
  methods: {
    openDialogEdit(item) {
      this.skillFormEdit = true;
      this.form.skillNameField = item.name;
      this.form.imgField = item.img;
      this.form.descriptionField = item.description;
      console.log(item);
    },
    async editSkill(item) {
      const id = item.id;
      console.log("editando...");
      api
        .patch(`skills/${id}`, {
          name: this.form.skillNameField,
          img: this.form.imgField,
          description: this.form.descriptionField,
        })
        .then(() => {
          this.getSkills();
          this.skillFormEdit = false;
          Swal.fire({
            title: "Atualizado com sucesso !",
            text: "A skill foi atualizada com sucesso !",
            icon: "success",
            confirmButtonText: "Fechar",
          });
        })
        .catch((error) => {
          console.log(error);
        });
      this.skillForm = false;
    },

    deleteSkill(item) {
      console.log(item);

      const id = item.id;
      api
        .delete(`/skills/${id}`)
        .then(() => {
          this.getSkills();
          Swal.fire({
            title: "Deletado com sucesso !",
            text: "A skill foi deletada da lista com sucesso !",
            icon: "success",
            confirmButtonText: "Fechar",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async addSkill() {
      api
        .post("skills", {
          name: this.form.skillNameField,
          img: this.form.imgField,
          description: this.form.descriptionField,
        })
        .then(() => {
          this.getSkills();
          Swal.fire({
            title: "Criada com sucesso !",
            text: "A skill foi criada com sucesso !",
            icon: "success",
            confirmButtonText: "Fechar",
          });
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
          // console.log(res.data);
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
      skillForm: false,
      skillFormEdit: false,
      searchField: "",
      skills: [],
      form: [],

      headers: [
        { text: "Habilidade", value: "name", class: "primary--text " },
        { text: "Link da imagem", value: "img", class: "primary--text " },
        {
          text: "Descrição",
          value: "description",
          class: "primary--text",
          width: "20%",
        },
        { text: "Editar", value: "edit", class: "primary--text" },
        { text: "Deletar", value: "delete", class: "primary--text" },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.v-data-table {
  background-color: rgba(255, 255, 255, 0.05) !important;

  backdrop-filter: blur(5px) !important;
  color: white !important;
}
/* .v-data-table:hover {
  background-color: rgba(255, 0, 0, 1) !important;

  backdrop-filter: blur(5px) !important;
  color: white !important;
} */

.v-data-table__wrapper table tbody tr td:hover {
  background: red !important;
}

.style-1 {
  background-color: rgb(215, 215, 44);
}
</style>
