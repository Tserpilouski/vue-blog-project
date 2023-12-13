import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state: {
    coments: [],
  },
  mutations: {
    save_coment(state, title) {
      state.coments.push(title);
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
