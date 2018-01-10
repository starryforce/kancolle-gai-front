import Vue from 'vue';
import Vuex from 'vuex';
import user from '../api/user';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    checkLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
  actions: {
    async checkLogin({
      commit,
    }) {
      commit('checkLogin', await user.getLoginState());
    },
  },
});
