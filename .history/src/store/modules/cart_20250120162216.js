const cart = {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  getters: {
    //所有商品累加总数
    cartTotals(state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0);
    },
    //选中的商品项
    selectedCartList(state) {
      return state.cartList.filter((item) => item.isChecked);
    },
    //选中的商品累加总数
    selCount(state, getters) {
      return getters.selectedCartList.reduce((sum, item) => {
        return sum + item.goods_num;
      }, 0);
    },
    //选中的总价
    selPrice(state, getters) {
      return getters.selectedCartList
        .reduce((sum, item) => {
          return sum + item.goods_price;
        }, 0)
        .toFixed(2);
    },
    //是否全选
    isAllChecked(state) {
      return state.cartList.every((item) => item.isChecked);
    },
  },
  mutations: {
    SET_CART_LIST(state, data) {
      state.cartList = data;
    },
    CHANGE_CHECK(state, id) {
      state.cartList.map((item) => {
        if (item.goods_id === id) {
          item.isChecked = !item.isChecked;
        }
      });
    },
  },
  actions: {
    getCartList({ commit }) {
      //发送请求获取购物车列表数据(此处暂时使用假数据)
      let res = [
        {
          goods_id: 1,
          goods_num: 4,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_price: 1083.0,
        },
        {
          goods_id: 2,
          goods_num: 2,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_price: 1086.08,
        },
        {
          goods_id: 3,
          goods_num: 0,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_price: 1247.04,
        },
        {
          goods_id: 4,
          goods_num: 1,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_price: 2443.8,
        },
        {
          goods_id: 5,
          goods_num: 13,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_price: 99.99,
        },
      ];
      res.forEach((item) => {
        item.isChecked = true;
      });

      commit("SET_CART_LIST", res);
    },
  },
};
export default cart;
