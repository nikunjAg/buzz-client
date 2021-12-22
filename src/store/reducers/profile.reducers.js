import {
	FETCH_PROFILE_START,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_FAILED,
} from "../actions/profile.action";

const initialState = {
	profileData: null,
	loading: false,
	error: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE_START:
			return { profileData: null, loading: true, error: null };
		case FETCH_PROFILE_SUCCESS:
			return { ...state, loading: false, profileData: action.profile };
		case FETCH_PROFILE_FAILED:
			return { ...state, loading: false, error: action.err_message };
		default:
			return state;
	}
};

export default profileReducer;
