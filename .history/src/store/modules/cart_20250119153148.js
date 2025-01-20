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
  action: {
    GET_CART_LIST() {
      //发送请求获取购物车列表数据
      let res = [];
    },
  },
};
export default cart;
