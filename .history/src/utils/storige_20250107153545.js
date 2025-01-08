const TokenKey = "Admin-info";
export function getInfo() {
  return JSON.parse(window.localStorage.getItem(TokenKey));
}

export function setInfo(obj) {
  localStorage.setItem(TokenKey, JSON.stringify(obj));
}

export function removeInfo() {
  return localStorage.removeItem(TokenKey);
}
