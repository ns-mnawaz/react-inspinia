import axios from 'axios';
import qs from 'qs';
import config from '../config';

const apiHost = config.api.HOST;
const apiVer = config.api.VERSION;

class API {
  static auth(url, payload) {
    const fullUrl = apiHost + apiVer + url;
    const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    return axios.post(fullUrl, qs.stringify(payload), headers);
  }

  static get(url, payload) {
    const fullUrl = apiHost + apiVer + url;
    return axios.get(fullUrl, payload);
  }

  static post(url, payload) {
    const fullUrl = apiHost + apiVer + url;
    return axios.post(fullUrl, payload);
  }
}

export default API;
