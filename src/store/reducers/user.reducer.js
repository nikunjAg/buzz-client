import { USER_LOGIN_STARTED, USER_LOGIN_SUCCESS } from "../actions/auth.action";

const initialState = {
	userId: "",
	name: "",
	email: "",
	profileImage: "",
	coverImage: "",
	postsCount: 0,
	isModerator: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN_STARTED:
			return initialState;
		case USER_LOGIN_SUCCESS:
			return {
				userId: action.user._id,
				name: action.user.name,
				email: action.user.email,
				profileImage: action.user.profileImage,
				coverImage: action.user.coverImage,
				postsCount: action.user.postsCount,
				isModerator: action.user.isModerator,
			};
		default:
			return state;
	}
};

export default userReducer;
