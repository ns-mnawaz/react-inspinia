const INITIAL_STATE = {
  auth: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};
