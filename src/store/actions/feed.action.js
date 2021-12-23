import axios from "../../axios";
import { addToast, errorHandler } from "./toast.action";

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

export const LIKE_DISLIKE_POST_SUCCESS = "LIKE_DISLIKE_POST_SUCCESS";
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS";
export const FLAG_POST_SUCCESS = "FLAG_POST_SUCCESS";

const likeDislikePostSuccess = (postId, likes, dislikes) => {
	return { type: LIKE_DISLIKE_POST_SUCCESS, postId, likes, dislikes };
};

const commentPostSuccess = (postId, comments) => {
	return { type: COMMENT_POST_SUCCESS, postId, comments };
};

const flagPostSuccess = (postId, post) => {
	return { type: FLAG_POST_SUCCESS, postId, post };
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

export const commentPost = (postId, content) => {
	return async (dispatch) => {
		try {
			const {
				data: { message, comments },
			} = await axios.post(`/posts/${postId}/comments`, { content });

			dispatch(commentPostSuccess(postId, comments));
			dispatch(addToast({ type: "success", message: message }));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};

export const flagPost = (postId) => {
	return async (dispatch) => {
		try {
			const {
				data: { post },
			} = await axios.post(`/posts/${postId}/flagged`);
			if (post) dispatch(flagPostSuccess(postId, post));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};
