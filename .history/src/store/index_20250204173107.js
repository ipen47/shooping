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
    logout({ commit }) {
      //重置用户数据
      commit("user/SET_USER_INFO", {});
      // removeInfo();
      //重置购物车数据
      commit("cart/SET_CART_LIST", []);
    },
  },
  modules: { user, cart },
});
