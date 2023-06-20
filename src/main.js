import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueTheMask from "vue-the-mask";

loadFonts();

createApp(App).use(vuetify).use(VueTheMask).mount("#app");
