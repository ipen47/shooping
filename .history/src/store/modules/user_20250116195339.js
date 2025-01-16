import { setInfo, getInfo } from "@/utils/storage";
const user = {
  namespace: true,
  state() {
    return {
      //个人信息
      userInfo: getInfo(),
    };
  },
  getter: {},
  mutations: {
    SET_USER_INFO(state, obj) {
      console.log("asdsa");
      state.userInfo = obj;
      setInfo(obj);
    },
  },
  action: {},
};
export default user;
