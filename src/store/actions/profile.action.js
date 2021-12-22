import { addToast, errorHandler } from "./toast.action";
import axios from "../../axios";

export const FETCH_PROFILE_START = "FETCH_PROFILE_START";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILED = "FETCH_PROFILE_FAILED";

const fetchProfileStart = () => {
	return { type: FETCH_PROFILE_START };
};

const fetchProfileSuccess = (profile) => {
	return { type: FETCH_PROFILE_SUCCESS, profile };
};

const fetchProfileFailed = (error) => {
	return { type: FETCH_PROFILE_FAILED, err_message: error };
};

export const fetchProfile = (userId) => {
	return async (dispatch) => {
		try {
			dispatch(fetchProfileStart());

			const {
				data: { message, user: profile },
			} = await axios.get(`/users/${userId}`);

			dispatch(fetchProfileSuccess(profile));
			dispatch(addToast({ type: "success", message }));
		} catch (error) {
			dispatch(errorHandler(error));
			if (error.response) {
				dispatch(fetchProfileFailed(error.response.data.profile));
			} else if (error.request) {
				dispatch(fetchProfileFailed("Unable to get response"));
			} else {
				dispatch(
					fetchProfileFailed(
						"Unable to send request!, Check your connection"
					)
				);
			}
		}
	};
};
