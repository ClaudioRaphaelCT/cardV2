<template>
  <div class="text-center">
    <v-dialog v-model="cadastrar" width="400px">
      <template v-slot:activator="{ props }">
        <v-btn color="blue-darken-4" v-bind="props">Cadastrar</v-btn>
      </template>

      <v-card color="indigo accent-4">
        <v-card-title primary-title class="text-center">
          Cadastrar uso
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-select
            label="Responsavel"
            :items="persons"
            v-model="newItem.name"
            autocomplete
          ></v-select>
          <v-text-field
            v-model="newItem.data"
            label="Data: ##/##/####"
            v-mask="'##/##/####'"
          ></v-text-field>
          <v-text-field v-model="newItem.local" label="Local"></v-text-field>
          <v-text-field
            type="number"
            v-model.number="newItem.valor"
            label="Valor"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="white" dark @click="addItem">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { MixinInserir } from "../utils/MixinInserir";
export default {
  name: "ModalInserir",
  data() {
    return {
      persons: ["Raphael", "Rhaíssa", "Ambos"],
      cadastrar: false,
      newItem: {
        name: "",
        data: "",
        local: "",
        valor: 0,
      },
    };
  },
  mixins: [MixinInserir],
};
</script>

<style scoped></style>
