import axios from "../../axios";
import { addToast, errorHandler } from "./toast.action";

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

/* const userLoginFailed = (errMessage) => {
	return {
		type: USER_LOGIN_FAILED,
		error_message: errMessage,
	};
}; */

export const autoLoginUser = () => {
	return async (dispatch) => {
		try {
			dispatch(userLoginStarted());

			const {
				data: { user, message },
			} = await axios.get("/users/me", {
				withCredentials: true,
			});

			dispatch(userLoginSuccess(user));
			dispatch(addToast({ type: "success", message }));
		} catch (err) {
			console.log(err);
			dispatch(errorHandler(err));
		}
	};
};
