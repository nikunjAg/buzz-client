import {
	USER_LOGIN_STARTED,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
} from "../actions/auth.action";

const initialState = {
	isAuthenticated: false,
	loading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN_STARTED:
			return { isAuthenticated: false, loading: true };

		case USER_LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		case USER_LOGIN_FAILED:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};

export default authReducer;
