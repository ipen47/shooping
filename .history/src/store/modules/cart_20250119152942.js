const cart = {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  getter: {},
  mutations: {
    SET_CART_LIST(state, data) {
      state.cartList = data;
    },
  },
  action: {},
};
export default cart;
