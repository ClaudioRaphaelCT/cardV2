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
            label="label"
            :items="persons"
            v-model="newItem.name"
            autocomplete
          ></v-select>
          <v-text-field
            v-model="newItem.data"
            label="Data"
            v-mask="'##/##/####'"
          ></v-text-field>
          <v-text-field v-model="newItem.local" label="Local"></v-text-field>
          <v-text-field
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
import db from "../services/conn";
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

  mounted() {},

  methods: {
    async addItem() {
      if (this.newItem.name == "Rhaíssa") {
        await db.collection("cartaoRhai").doc().set(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rhaíssa`);
        location.reload();
      } else if (this.newItem.name == "Raphael") {
        await db.collection("cartaoRapha").add(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rapha`);
        location.reload();
      } else if (this.newItem.name == "Ambos") {
        await db.collection("cartaoAmbos").add(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rapha & Rhaí`);
        location.reload();
      } else {
        alert("ERRO: Campos não preenchidos corretamente");
      }
    },
  },
};
</script>

<style scoped></style>
