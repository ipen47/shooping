//1.引入axios
import axios from "axios";

//2.创建axios对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: "http://localhost:8888/",
  timeout: 30 * 1000,
});
//定义elementui通知组组件对象
let notificationInstance;
let loadingInstance = null; // 全局 Loading 实例
//3.请求拦截器==>前端给后端发送请求，还没有到后端,统一将token封装在请求头headers中
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("请求错误:", error);
    return Promise.reject(error);
  }
);
//4.响应拦截器==>后端给前端返回数据
service.interceptors.response.use(
  (response) => {
    // 隐藏 Loading 效果
    setTimeout(() => {
      loadingInstance.close();
    }, 500);
    let code = response.data.code || 200;
    let msg = response.data.msg || "未知错误";
    if (code === 401) {
      //token过期，无权限访问
      localStorage.removeItem("access-admin");
      Message.info("token已过期,请重新登录");
      router.push("/error");
      return Promise.reject(new Error(msg));
    }
    // if (code === 403) {
    //   //未登录，无权限访问
    //   router.push("/login");
    //   Message.info("请先登录！");
    //   return Promise.reject();
    // }
    // if (code == 404) {
    //   router.push("/E404");
    //   return Promise.reject();
    // }
    else if (code == 500) {
      console.log("500");
      Message.error("系统未知错误，请联系管理员");
      return Promise.reject(new Error(msg));
    } else if (code === -1 || code === -2) {
      //-2代码验证码出错
      // 使用 Notification 显示错误提示，并保存实例
      notificationInstance = Notification.error({
        title: "错误",
        message: msg,
        // duration: 0, // 设置为 0，表示不自动关闭
      });
      setTimeout(() => {
        notificationInstance.close();
      }, 2000); // 2秒后关闭通知
      return response.data;
    } else if (code !== 200) {
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
