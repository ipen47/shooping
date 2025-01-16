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
  mutation: {
    SET_USER_INFO(state, obj) {
      setInfo(obj);
    },
  },
  action: {},
};
export default user;
