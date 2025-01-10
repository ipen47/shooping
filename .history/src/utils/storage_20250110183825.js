//个人信息
const USER_INFO_KEY = "Admin-info";
//搜索历史记录
const HISTORY_KEY = "history_list";
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
//获取历史记录
export function getHistory() {
  let result = window.localStorage.getItem(HISTORY_KEY);

  return result ? JSON.parse(result) : [];
}
//设置历史记录
export function setHistory(obj) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
}
