import {
	FETCH_FEED_STARTED,
	FETCH_FEED_SUCCESS,
	FETCH_FEED_FAILED,
	LIKE_DISLIKE_POST_SUCCESS,
	COMMENT_POST_SUCCESS,
	FLAG_POST_SUCCESS,
	FETCH_FLAGGED_POST_STARTED,
	FETCH_FLAGGED_POST_SUCCESS,
	FETCH_FLAGGED_POST_FAILED,
	VERIFY_POST_SUCCESS,
	DECLINE_POST_SUCCESS,
} from "../actions/feed.action";
import { SAVE_POST_SUCCESS } from "../actions/post.action";

const initialState = {
	posts: [],
	flaggedPosts: [],
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
		case SAVE_POST_SUCCESS:
			return {
				...state,
				posts: [action.post, ...state.posts],
			};
		case LIKE_DISLIKE_POST_SUCCESS:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.postId
						? {
								...post,
								isLiked: action.isLiked,
								isDisliked: action.isDisliked,
								likes: action.post.likes.length,
								dislikes: action.post.dislikes.length,
						  }
						: post
				),
			};
		case COMMENT_POST_SUCCESS:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.postId
						? {
								...post,
								comments: action.comments,
						  }
						: post
				),
			};
		case FLAG_POST_SUCCESS:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.postId
						? {
								...post,
								isFlagged: action.post.isFlagged,
						  }
						: post
				),
			};
		case FETCH_FLAGGED_POST_STARTED:
			return {
				...state,
				loading: true,
				flaggedPosts: [],
			};
		case FETCH_FLAGGED_POST_SUCCESS:
			return {
				...state,
				loading: false,
				flaggedPosts: action.posts,
			};
		case FETCH_FLAGGED_POST_FAILED:
			return {
				...state,
				loading: false,
			};
		case VERIFY_POST_SUCCESS:
			return {
				...state,
				flaggedPosts: state.flaggedPosts.filter(
					(post) => post._id !== action.postId
				),
				posts: state.posts.map((post) =>
					post._id === action.postId
						? { ...post, isFlagged: false, isVerified: true }
						: post
				),
			};
		case DECLINE_POST_SUCCESS:
			return {
				...state,
				flaggedPosts: state.flaggedPosts.filter(
					(post) => post._id !== action.postId
				),
				posts: state.posts.filter((post) => post._id !== action.postId),
			};
		default:
			return state;
	}
};

export default feedReducer;
