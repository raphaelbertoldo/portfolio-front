<template>
  <div>
    <div
      class="rounded-lg px-6 py-4 container-glass white--text"
      style="max-width: 400px"
    >
      <div class="d-flex align-center justify-space-between">
        <span>Adicione uma habilidade</span>
        <v-icon color="white" @click="$emit('close')">
          mdi-close-box-outline
        </v-icon>
      </div>
      <v-img
        :src="form.imgField"
        max-width="100px"
        class="mx-auto mt-6"
      ></v-img>
      <v-text-field
        v-model="form.skillNameField"
        hide-details
        dark
        outlined
        color="blue"
        placeholder="Nome da habilidade"
        class="blue-neon-1 mt-6"
      />
      <v-text-field
        v-model="form.imgField"
        hide-details
        dark
        outlined
        color="blue"
        placeholder="Link da imagem"
        class="blue-neon-1 mt-4"
      />
      <v-textarea
        v-model="form.descriptionField"
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
          @click="$emit('submit')"
        >
          Salvar
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { ComponentFormMixin } from "../../mixins/ComponentForm";
export default {
  name: "ModalForm",
  props: ["skillNameField"],
  mixins: [ComponentFormMixin],
  data: () => {
    return {
      form: { skillNameField: "", imgField: "", descriptionField: "" },

      // skillNameField: "",
      // imgField: "",
      // descriptionField: "",
    };
  },
};
</script>

