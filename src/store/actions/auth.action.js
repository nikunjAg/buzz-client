import axios from "../../axios";

export const USER_LOGIN_STARTED = "USER_LOGIN_STARTED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

const userLoginStarted = () => {
	return {
		type: USER_LOGIN_STARTED,
	};
};

const userLoginSuccess = (user) => {
	return {
		type: USER_LOGIN_SUCCESS,
		user,
	};
};

const userLoginFailed = (errMessage) => {
	return {
		type: USER_LOGIN_FAILED,
		error_message: errMessage,
	};
};

export const autoLoginUser = () => {
	return async (dispatch) => {
		try {
			dispatch(userLoginStarted());

			const {
				data: { user },
			} = await axios.get("/users/me", {
				withCredentials: true,
			});
			console.log("You are successfully Authenticated.");
			dispatch(userLoginSuccess(user));
		} catch (err) {
			console.log(err);
			if (err.response) {
				dispatch(userLoginFailed(err.response.data.message));
			} else if (err.request) {
				dispatch(userLoginFailed("Unable to get response"));
			} else {
				dispatch(
					userLoginFailed(
						"Unable to send request, Check your connection"
					)
				);
			}
		}
	};
};
