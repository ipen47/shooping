import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/modules/user";
import cart from "@/store/modules/cart";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    token(state) {
      return state.user.userInfo.token;
    },
  },
  mutations: {},
  actions: {
    logout() {
      //清理用户数据
      this.$store.commit("user/SET_USER_INFO", {});
      removeInfo();
    },
  },
  modules: { user, cart },
});
