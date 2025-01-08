const user = {
  namespace: true,
  state() {
    return {
      //个人信息
      userinfo: { token: "", userId: "" },
    };
  },
  getter: {},
  mutations: {
    set,
  },
  action: {},
};
export default user;
