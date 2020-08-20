import { combineReducers } from 'redux';
import leads from './leadReducer';
import messages from './messages';

export default combineReducers({
  leads,
  messages
});
