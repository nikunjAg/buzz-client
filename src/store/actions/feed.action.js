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

/* const fetchFeedFailed = (errMessage) => {
	return { type: FETCH_FEED_FAILED, error_message: errMessage };
}; */

export const fetchFeed = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchFeedStarted());
			const {
				data: { posts },
			} = await axios.get("/posts", { withCredentials: true });
			dispatch(fetchFeedSuccess(posts));
		} catch (error) {
			dispatch(errorHandler(error));
		}
	};
};
