const InfoKey = "Admin-info";
export function getInfo() {
  return JSON.parse(window.localStorage.getItem(InfoKey));
}

export function setInfo(obj) {
  localStorage.setItem(InfoKey, JSON.stringify(obj));
}

export function removeInfo() {
  return localStorage.removeItem(InfoKey);
}
