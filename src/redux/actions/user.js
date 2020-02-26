import API from '../../redux/api';

export function login(params) {
  return (dispatch) => {
    const type = 'AUTH';
    dispatch({ type: `${type}_REQUEST` });
    const actionParams = { type, dispatch };
    API.auth('oauth/token', params, actionParams);
  };
}
