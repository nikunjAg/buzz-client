import {
	FETCH_FEED_STARTED,
	FETCH_FEED_SUCCESS,
	FETCH_FEED_FAILED,
	LIKE_DISLIKE_POST_SUCCESS,
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
		case LIKE_DISLIKE_POST_SUCCESS:
			console.log(action.postId, action.likes);
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.postId
						? {
								...post,
								isLiked: post.likes < action.likes,
								isDisliked: post.dislikes < action.dislikes,
								likes: action.likes,
								dislikes: action.dislikes,
						  }
						: post
				),
			};
		default:
			return state;
	}
};

export default feedReducer;
