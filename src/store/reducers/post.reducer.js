import {
	SAVE_POST_STARTED,
	SAVE_POST_SUCCESS,
	SAVE_POST_FAILED,
} from "../actions/post.action";

const initialState = {
	loading: false,
	currentPost: null,
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_POST_STARTED:
			return { ...state, loading: true, currentPost: null };
		case SAVE_POST_SUCCESS:
			return { ...state, loading: false, currentPost: action.post };
		case SAVE_POST_FAILED:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default postReducer;
