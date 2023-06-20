<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="orange-darken-4" v-bind="props">Ambos</v-btn>
      </template>

      <v-card color="orange-darken-4">
        <v-card-title primary-title class="text-center">
          Rapha & Rhaí
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th>Dia</th>
                <th>Local</th>
                <th>Valor</th>
                <th>Retirar uso</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, indice) in cartaoAmbos" :key="indice">
                <td>{{ user.data }}</td>
                <td>{{ user.local }}</td>
                <td>R$ {{ user.valor }}</td>
                <td>
                  <v-btn
                    outlined
                    color="error"
                    size="small"
                    @click="deleteItem(user.id)"
                    >Excluir</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <h3 class="text-center mt-2">Total: {{ vlrAmbos.toFixed(2) }}</h3>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { MixinAmbos } from "../utils/MixinAmbos";

export default {
  name: "ModalAmbos",

  data() {
    return {
      dialog: false,
      cartaoAmbos: [],
      vlrAmbos: 0,
    };
  },
  mixins: [MixinAmbos],
  async created() {
    this.cartaoAmbos = await this.getDataAmbos();
    this.vlrAmbos = await this.getTotalAmbos();
  },
};
</script>

<style scoped>
#img {
  width: 100px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
}
</style>
