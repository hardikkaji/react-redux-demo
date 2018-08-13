import types from './types';

const initialState = {
	posts: [],
	post: {}
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_POSTS: {
			return {
				...state,
				posts: action.payload
			};
		}
		case types.CREATE_POST: {
			return {
				...state,
				post: action.payload
			};
		}
		default:
			return state;
	}
}

export default postsReducer;
