<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="purple-darken-1" v-bind="props">Rhai</v-btn>
      </template>

      <v-card color="purple-accent-4">
        <v-card-title primary-title class="text-center"> Rhai </v-card-title>
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
              <tr v-for="(user, indice) in cartao" :key="indice">
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
          <h3 class="text-center mt-2">
            Total: {{ vlrCalculateRhai.toFixed(2) }}
          </h3>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { MixinRhai } from "../utils/MixinRhai";

export default {
  name: "ModalRhai",

  data() {
    return {
      dialog: false,
      cartao: [],
      cartaoAmbos: [],
      vlrTotal: 0,
      vlrAmbos: 0,
      vlrCalculateRhai: 0,
    };
  },

  mixins: [MixinRhai],

  async created() {
    this.cartao = await this.getData();
    this.cartaoAmbos = await this.getDataAmbos();
    this.vlrTotal = await this.getTotal();
    this.vlrAmbos = await this.getTotalAmbos();
    this.vlrCalculateRhai = this.vlrTotal + this.vlrAmbos;
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
