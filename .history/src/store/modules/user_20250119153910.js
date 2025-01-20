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
      console.log("asdsa");
      state.userInfo = obj;
      setInfo(obj);
    },
  },
  action: {},
};
export default user;
