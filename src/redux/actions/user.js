import axios from 'axios'

export function login(payload) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN' });
        axios.get('http://viacep.com.br/ws/74922800/json/')
            .then((response) => {
                dispatch({ type: 'LOGIN_FULFILLED', payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_REJECTED', payload: err });
            });
    };

}
