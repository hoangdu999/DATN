import { createStore } from "vuex";

const store = createStore({
  state: {
    isLogin: false,
    user: null,
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("setLogin", true);
      commit("setUser", user);
    },
    logout({ commit }) {
      commit("setLogin", false);
      commit("setUser", null);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLogin;
    },
    getUser(state) {
      return state.user;
    },
  },
});

export default store;