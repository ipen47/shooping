const InfoKey = "Admin-info";
const HistoryKey = "";
//获取个人信息
export function getInfo() {
  let result = window.localStorage.getItem(InfoKey);
  const defaultObj = { token: "", userId: "" };
  return result ? JSON.parse(result) : defaultObj;
}
//设置个人信息
export function setInfo(obj) {
  localStorage.setItem(InfoKey, JSON.stringify(obj));
}
//移除个人信息
export function removeInfo() {
  return localStorage.removeItem(InfoKey);
}
