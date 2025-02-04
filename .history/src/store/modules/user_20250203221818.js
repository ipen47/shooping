import { setInfo, getInfo } from "@/utils/storage";
const user = {
  namespaced: true,
  state() {
    return {
      //个人信息
      userInfo: getInfo(),
    };
  },
  getters: {},
  mutations: {
    SET_USER_INFO: (state, obj) => {
      state.userInfo = obj;
      setInfo(obj);
    },
  },
  actions: {},
};
export default user;
