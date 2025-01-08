const InfoKey = "Admin-info";
//获取个人信息
export function getInfo() {
  let result = window.localStorage.getItem(InfoKey);

  return result ? JSON.parse(result);
}
//设置个人信息
export function setInfo(obj) {
  localStorage.setItem(InfoKey, JSON.stringify(obj));
}
//移除个人信息
export function removeInfo() {
  return localStorage.removeItem(InfoKey);
}
