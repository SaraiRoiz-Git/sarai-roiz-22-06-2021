import { combineReducers } from 'redux';
import postReducer from './reducer';

export default combineReducers({
    posts: postReducer
});