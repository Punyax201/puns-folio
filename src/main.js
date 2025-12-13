/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Styles
import "unfonts.css";

const app = createApp(App);
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine); // you can also load only needed plugins to keep it light
  },
});

registerPlugins(app);

app.mount("#app");
