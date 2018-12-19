import { combineReducers } from 'redux';
import suggestion from './suggestionReducer';
import onload from './LoadingReducer';

export default combineReducers({
  suggestion,
  onload
});
