<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="teal-accent-3" v-bind="props">Rapha</v-btn>
      </template>

      <v-card color="teal-accent-3">
        <v-card-title primary-title class="text-center"> Rapha </v-card-title>
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
            Total: {{ vlrCalculateRapha.toFixed(2) }}
          </h3>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { MixinRapha } from "../utils/MixinRapha";

export default {
  name: "ModalRapha",

  data() {
    return {
      dialog: false,
      cartao: [],
      cartaoAmbos: [],
      vlrTotal: 0,
      vlrAmbos: 0,
      vlrCalculateRapha: 0,
    };
  },

  mixins: [MixinRapha],

  async created() {
    this.cartao = await this.getData();
    this.cartaoAmbos = await this.getDataAmbos();
    this.vlrTotal = await this.getTotal();
    this.vlrAmbos = await this.getTotalAmbos();
    this.vlrCalculateRapha = this.vlrTotal + this.vlrAmbos;
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
