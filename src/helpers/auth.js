// TODO Implement
import { toastr } from 'react-redux-toastr';

export function authHeader() {

}

export function currentUser() {
  return JSON.parse(localStorage.getItem('userAuth'));
}

export function isAuth() {
  return localStorage.getItem('isAuth');
}

export function login(token = {}) {
  localStorage.setItem('userAuth', JSON.stringify(token));
  localStorage.setItem('isAuth', true);
  toastr.success('Get Hired!', 'Welcome to Get Hired!');
  return true;
}

export function setRemember(user = {}) {
  localStorage.setItem('userRemember', JSON.stringify(user));
  return true;
}

export function removeRemember() {
  localStorage.removeItem('userRemember');
  return true;
}

export function logout() {
  localStorage.removeItem('userAuth');
  localStorage.removeItem('isAuth');
  return true;
}
