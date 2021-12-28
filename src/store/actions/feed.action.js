import axios from "../../axios";
import { getRequestErrorMessage } from "../utils";
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

const likeDislikePostSuccess = (postId, post, isLiked, isDisliked) => {
	return {
		type: LIKE_DISLIKE_POST_SUCCESS,
		postId,
		post,
		isLiked,
		isDisliked,
	};
};

const commentPostSuccess = (postId, comments) => {
	return { type: COMMENT_POST_SUCCESS, postId, comments };
};

const flagPostSuccess = (postId, post) => {
	return { type: FLAG_POST_SUCCESS, postId, post };
};

export const likePost = (postId, unlike) => {
	return async (dispatch) => {
		try {
			const {
				data: { isLiked, isDisliked, post },
			} = await axios.post(`/posts/${postId}/likes`, {
				unlike,
			});
			dispatch(likeDislikePostSuccess(postId, post, isLiked, isDisliked));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};

export const dislikePost = (postId, undislike) => {
	return async (dispatch) => {
		try {
			const {
				data: { isLiked, isDisliked, post },
			} = await axios.post(`/posts/${postId}/dislikes`, { undislike });
			dispatch(likeDislikePostSuccess(postId, post, isLiked, isDisliked));
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
			} = await axios.post(`/posts/${postId}/flag`);
			if (post) dispatch(flagPostSuccess(postId, post));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};

// For Moderator
export const FETCH_FLAGGED_POST_STARTED = "FETCH_FLAGGED_POST_STARTED";
export const FETCH_FLAGGED_POST_SUCCESS = "FETCH_FLAGGED_POST_SUCCESS";
export const FETCH_FLAGGED_POST_FAILED = "FETCH_FLAGGED_POST_FAILED";

const fetchFlaggedPostStarted = () => {
	return { type: FETCH_FLAGGED_POST_STARTED };
};

const fetchFlaggedPostSuccess = (posts) => {
	return { type: FETCH_FLAGGED_POST_SUCCESS, posts };
};

const fetchFlaggedPostFailed = (error) => {
	return { type: FETCH_FLAGGED_POST_FAILED, err_message: error };
};

export const fetchFlaggedPosts = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchFlaggedPostStarted());
			const {
				data: { posts },
			} = await axios.get("/posts/flagged");
			dispatch(fetchFlaggedPostSuccess(posts));
		} catch (error) {
			dispatch(errorHandler(error));
			dispatch(fetchFlaggedPostFailed(getRequestErrorMessage(error)));
		}
	};
};

export const VERIFY_POST_SUCCESS = "VERIFY_POST_SUCCESS";
export const DECLINE_POST_SUCCESS = "DECLINE_POST_SUCCESS";

const verifyPostSuccess = (postId) => {
	return { type: VERIFY_POST_SUCCESS, postId };
};

const declinePostSuccess = (postId) => {
	return { type: DECLINE_POST_SUCCESS, postId };
};

export const verifyPost = (postId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`/posts/${postId}/verify`);
			dispatch(verifyPostSuccess(postId));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};

export const declinePost = (postId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`/posts/${postId}/decline`);
			dispatch(declinePostSuccess(postId));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};
