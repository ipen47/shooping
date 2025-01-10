const USER_INFO_KEY = "Admin-info";
const HISTORY_KEY = "historyList";
//获取个人信息
export function getInfo() {
  let result = window.localStorage.getItem(USER_INFO_KEY);
  const defaultObj = { token: "", userId: "" };
  return result ? JSON.parse(result) : defaultObj;
}
//设置个人信息
export function setInfo(obj) {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(obj));
}
//移除个人信息
export function removeInfo() {
  return localStorage.removeItem(USER_INFO_KEY);
}
