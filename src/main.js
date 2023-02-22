import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.API_URL = "https://api.moveapp.site";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
