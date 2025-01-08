const TokenKey = "Admin-info";
export function getInfo() {
  return JSON.parse(window.localStorage.getItem(TokenKey));
}

export function setInfo(token) {
  Cookies.set(TokenKey, token);
  return localStorage.setItem(TokenKey, JSON.stringify(token));
}

export function removeInfo() {
  return localStorage.removeItem(TokenKey);
}
