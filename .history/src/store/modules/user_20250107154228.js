import { setInfo, getInfo } from "@/utils/storage";
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
    SET_USER_INFO(state, obj) {
      state.userinfo = obj;
    },
  },
  action: {},
};
export default user;
