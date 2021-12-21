import { USER_LOGIN_STARTED, USER_LOGIN_SUCCESS } from "../actions/auth.action";
import { SAVE_POST_SUCCESS } from "../actions/post.action";

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
		case SAVE_POST_SUCCESS:
			return { ...state, postsCount: state.postsCount + 1 };
		default:
			return state;
	}
};

export default userReducer;
