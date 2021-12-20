import {
	FETCH_FEED_STARTED,
	FETCH_FEED_SUCCESS,
	FETCH_FEED_FAILED,
} from "../actions/feed.action";

const initialState = {
	posts: [],
	loading: false,
};

const feedReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FEED_STARTED:
			return { ...state, loading: true };
		case FETCH_FEED_SUCCESS:
			return { ...state, loading: false, posts: action.posts };
		case FETCH_FEED_FAILED:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default feedReducer;
