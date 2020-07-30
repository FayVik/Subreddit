import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    subraddit: []
  },
  mutations: {
    SAVE_SUBRADDIT(state, subraddit) {
      state.subraddit = subraddit;
    }
  },
  actions: {
    loadSubraddit({ commit }) {
      fetch("http://www.reddit.com/.json?sort=latest")
        .then(res => res.json())
        .then(result => {
          commit(
            "SAVE_SUBRADDIT",
            result.data.children,
            console.log(result.data.children.map(data => data))
          );
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  },
  modules: {}
});
