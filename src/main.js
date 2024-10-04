import Vue from "vue";
import App from "./App.vue";

import Vuex from "vuex";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { actions, getters, mutations, state } from "./store";

Vue.config.productionTip = false;
// import "uikit/dist/css/uikit.min.css";

// setting up the store
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
new Vue({
  render: (h) => h(App),
  store, //provide the store
}).$mount("#app");
