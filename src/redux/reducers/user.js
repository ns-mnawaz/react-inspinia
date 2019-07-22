const INITIAL_STATE = {
  loading: false,
  user: {},
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loading: true };
    case 'LOGIN_FULFILLED':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_REJECTED':
      return { ...state, loading: false, user: {}, error: action.payload };
    default:
      return state;
  }
};
