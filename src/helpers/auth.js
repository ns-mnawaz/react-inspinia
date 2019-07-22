// TODO Implement
export function authHeader() {

}
// TODO Implement
export function currentUser() {

}

export function isAuth() {
  return localStorage.getItem('isAuth');
}

export function login(user = {}) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('isAuth', true);
  return true;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('isAuth');
  return true;
}
