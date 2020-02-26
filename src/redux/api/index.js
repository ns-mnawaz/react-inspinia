import axios from 'axios';
import qs from 'qs';
import config from '../../config';
import { get } from 'lodash';
import * as auth from '../../helpers/auth';

const { HOST, VERSION } = config.api;

class API {
  // eslint-disable-next-line lines-around-comment
  /**
   * auth2 login api
   * @param {string} url String
   * @param {object} payload Object
   * @param {object} action Object e.g {type: 'AUTH', dispatch: function(){} }
   * @returns {Promise<void>} void
   */
  static async auth(url, payload, action) {
    const { type, dispatch } = action;
    try {
      const fullUrl = HOST + VERSION + url;
      const headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
      const response = await axios.post(fullUrl, qs.stringify(payload), headers);
      auth.login(response.data);
      if (payload.remember) {
        auth.setRemember(response.data.user);
      }
      else {
        auth.removeRemember();
      }
      dispatch({ type: `${type}_SUCCESS`, payload: response.data });
    }
    catch (err) {
      let data = get(err, 'response.data', null);
      data = !!data ? data : get(err, 'response');
      data = !!data ? data : err;
      dispatch({ type: `${type}_FAILURE`, payload: data });
    }
  }

  static get(url, payload) {
    const fullUrl = HOST + VERSION + url;
    return axios.get(fullUrl, payload);
  }

  static post(url, payload) {
    const fullUrl = HOST + VERSION + url;
    return axios.post(fullUrl, payload);
  }
}

export default API;
