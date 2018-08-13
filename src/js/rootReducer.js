import { combineReducers } from 'redux';
import postsReducer from './posts/duck/reducer';

const rootReducer = combineReducers({
	post: postsReducer
});

export default rootReducer;
