import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/modules/user";
import cart from "@/store/modules/cart";
import { removeInfo } from "@/utils/storage";

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
      // removeInfo();
      //清理购物车数据
      this.$store.commit("cart/SET_CART_LIST", []);
    },
  },
  modules: { user, cart },
});
