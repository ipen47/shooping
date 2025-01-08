const InfoKey = "Admin-info";
//获取个人信息
export function getInfo() {
  return JSON.parse(window.localStorage.getItem(InfoKey));
}
//设置个人信息
export function setInfo(obj) {
  localStorage.setItem(InfoKey, JSON.stringify(obj));
}
//移除个人信息
export function removeInfo() {
  return localStorage.removeItem(InfoKey);
}
