import { setInfo, getInfo } from "@/utils/storage";
const user = {
  namespace: true,
  state() {
    return {
      //个人信息
      userinfo: getInfo(),
    };
  },
  getter: {},
  mutations: {
    SET_USER_INFO(state, obj) {
      state.userinfo = obj;
      setInfo(obj);
    },
  },
  action: {},
};
export default user;
