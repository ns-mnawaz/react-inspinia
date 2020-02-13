import API from '../../api';

export function login(params) {
  return (dispatch) => {
    dispatch({ type: 'LOGIN' });
    API.auth('oauth/token', params)
      .then((response) => {
        dispatch({ type: 'LOGIN_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_REJECTED', payload: err });
      });
  };
}
