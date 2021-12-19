import axios from "../../axios";

export const FETCH_FEED_STARTED = "FETCH_FEED_STARTED";
export const FETCH_FEED_SUCCESS = "FETCH_FEED_SUCCESS";
export const FETCH_FEED_FAILED = "FETCH_FEED_FAILED";

const fetchFeedStarted = () => {
	return { type: FETCH_FEED_STARTED };
};
const fetchFeedSuccess = () => {
	return { type: FETCH_FEED_SUCCESS };
};
const fetchFeedFailed = (errMessage) => {
	return { type: FETCH_FEED_FAILED, error_message: errMessage };
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
			if (error.response) {
				dispatch(fetchFeedFailed(error.response.data.message));
			} else if (error.request) {
				dispatch(fetchFeedFailed("Unable to get response."));
			} else {
				dispatch(
					fetchFeedFailed(
						"Unable to send request! Check your connection."
					)
				);
			}
		}
	};
};
