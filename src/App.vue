<template>
  <v-app id="initial">
    <div class="title">
      <h1 class="text-center" id="nomes">Rapha e Rhai</h1>
    </div>

    <v-container grid-list-xs class="d-flex justify-center">
      <ModalInserir></ModalInserir>
      <ModalRhai class="mr-3 ml-3"></ModalRhai>
      <ModalRapha></ModalRapha>
      <ModalAmbos class="ml-3"></ModalAmbos>
    </v-container>
    <footer>
      <div id="total">
        <h3 class="text-center">
          Valor total do Cartão: R$ {{ total.toFixed(2) }}
        </h3>
      </div>
    </footer>
  </v-app>
</template>

<script>
import ModalRhai from "./components/ModalRhai.vue";
import ModalRapha from "./components/ModalRapha.vue";
import ModalInserir from "./components/ModalInserir.vue";
import ModalAmbos from "./components/ModalAmbos.vue";
import { MixinApp } from "./utils/MixinApp";

export default {
  name: "App",
  components: {
    ModalRhai,
    ModalInserir,
    ModalRapha,
    ModalAmbos,
  },
  data() {
    return {
      cartaoRhai: [],
      cartaoRapha: [],
      cartaoAmbos: [],
      valorTotalRhai: 0,
      valorTotalRapha: 0,
      valorTotalAmbos: 0,
      total: 0,
    };
  },
  mixins: [MixinApp],

  async created() {
    this.cartaoRhai = await this.getDataRhai();
    this.valorTotalRhai = await this.getTotalRhai();
    this.cartaoAmbos = await this.getDataAmbos();
    this.valorTotalAmbos = await this.getTotalAmbos();
    this.cartaoRapha = await this.getDataRapha();
    this.valorTotalRapha = await this.getTotalRapha();
    this.total =
      this.valorTotalRapha + this.valorTotalRhai + this.valorTotalAmbos;
  },
};
</script>

<style>
#total {
  background-color: white;
  margin-top: 43%;
}

#nomes {
  color: whitesmoke;
}

#initial {
  background: none;
}
</style>
