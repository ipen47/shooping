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
      //发送请求获取购物车列表数据(此处暂时使用假数据)
      let res = [
        {
          goods_id: 1,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1083.0,
        },
        {
          goods_id: 2,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1086.08,
        },
        {
          goods_id: 3,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 1247.04,
        },
        {
          goods_id: 4,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 2443.8,
        },
        {
          goods_id: 5,
          goods_name:
            "新Pad14英寸12+128远峰蓝 M6平板电脑智能安卓娱乐十分有趣哈哈哈",
          goods_pricr: 99.99,
        },
      ];
      res.forEach((item) => {
        item.isCheck;
      });
    },
  },
};
export default cart;