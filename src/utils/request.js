//1.引入axios
import axios from "axios";
import { Toast } from "vant";
import store from "@/store/index";
//2.创建axios对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: "http://localhost:8888/",
  timeout: 30 * 1000,
});

//3.请求拦截器==>前端给后端发送请求，还没有到后端,统一将token封装在请求头headers中
service.interceptors.request.use(
  (config) => {
    //请求添加loading效果
    Toast.loading({
      message: "加载中...",
      forbidClick: true, //禁止背景点击
      loadingType: "spinner", //配置loading图标
      duration: 0, //不是自动消失
    });
    //请求前应该做什么
    // 只要有token，就在请求时携带，便于请求需要授权的接口
    const token = store.getters.token;
    if (token) {
      config.headers["Access-Token"] = token;
      config.headers.platform = "H5";
    }

    return config;
  },
  (error) => {
    //请求错误做什么
    console.error("请求错误:", error);
    return Promise.reject(error);
  }
);
//4.响应拦截器==>后端给前端返回数据
service.interceptors.response.use(
  (response) => {
    //响应成功数据应该做什么
    const res = response.data;
    if (res.code != 200) {
      Toast(res.msg);
      return Promise.reject(res.msg);
    }
    //请求回来关闭loading效果
    Toast.clear();
    return res;
  },
  (error) => {
    //响应错误数据应该做什么
    return Promise.reject(error);
  }
);

export default service;
