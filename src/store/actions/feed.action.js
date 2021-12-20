import axios from "../../axios";
import { errorHandler } from "./toast.action";

export const FETCH_FEED_STARTED = "FETCH_FEED_STARTED";
export const FETCH_FEED_SUCCESS = "FETCH_FEED_SUCCESS";
export const FETCH_FEED_FAILED = "FETCH_FEED_FAILED";

const fetchFeedStarted = () => {
	return { type: FETCH_FEED_STARTED };
};

const fetchFeedSuccess = (posts) => {
	return { type: FETCH_FEED_SUCCESS, posts };
};

const fetchFeedFailed = () => {
	return { type: FETCH_FEED_FAILED };
};

export const fetchFeed = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchFeedStarted());
			const {
				data: { posts },
			} = await axios.get("/posts", { withCredentials: true });
			dispatch(fetchFeedSuccess(posts));
		} catch (error) {
			dispatch(fetchFeedFailed());
			dispatch(errorHandler(error));
		}
	};
};

export const LIKE_DISLIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";

const likeDislikePostSuccess = (postId, likes, dislikes) => {
	return { type: LIKE_DISLIKE_POST_SUCCESS, postId, likes, dislikes };
};

export const likePost = (postId) => {
	return async (dispatch) => {
		try {
			const {
				data: { likes, dislikes },
			} = await axios.post(`/posts/${postId}/likes`);
			dispatch(likeDislikePostSuccess(postId, likes, dislikes));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};

export const dislikePost = (postId) => {
	return async (dispatch) => {
		try {
			const {
				data: { likes, dislikes },
			} = await axios.post(`/posts/${postId}/dislikes`);
			dispatch(likeDislikePostSuccess(postId, likes, dislikes));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};
