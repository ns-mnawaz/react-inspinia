import { combineReducers } from 'redux';
import user from './user';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
  user,
  toastr: toastrReducer
});



