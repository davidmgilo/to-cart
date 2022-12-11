import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bulma/css/bulma.css";

import "./assets/main.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping);
library.add(faAnglesRight);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount("#app");
