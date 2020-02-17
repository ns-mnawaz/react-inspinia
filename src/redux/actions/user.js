import API from '../../redux/api';

export function login(params) {
  return (dispatch) => {
    dispatch({ type: 'AUTH_REQUEST' });
    API.auth('oauth/token', params)
      .then((response) => {
        dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'AUTH_FAILURE', payload: err });
      });
  };
}
