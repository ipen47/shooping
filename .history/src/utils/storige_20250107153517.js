const TokenKey = "Admin-info";
export function getInfo() {
  return JSON.parse(window.localStorage.getItem(TokenKey));
}

export function setInfo(info) {
  localStorage.setItem(TokenKey, JSON.stringify(info));
}

export function removeInfo() {
  return localStorage.removeItem(TokenKey);
}
