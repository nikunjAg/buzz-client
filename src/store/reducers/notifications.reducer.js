import {
	FETCH_UNREAD_NOTIFICATIONS_STARTED,
	FETCH_UNREAD_NOTIFICATIONS_SUCCESS,
	FETCH_UNREAD_NOTIFICATIONS_FAILED,
	FETCH_NOTIFICATIONS_STARTED,
	FETCH_NOTIFICATIONS_SUCCESS,
	FETCH_NOTIFICATIONS_FAILED,
} from "../actions/notifications.action";

const initialState = {
	unreadNotifications: [],
	invitations: [],
	loading: false,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_UNREAD_NOTIFICATIONS_STARTED:
			return {
				...state,
				loading: true,
				error: null,
				unreadNotifications: 0,
			};
		case FETCH_UNREAD_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				unreadNotifications: action.notifications,
			};
		case FETCH_UNREAD_NOTIFICATIONS_FAILED:
			return { ...state, loading: false, error: action.error_message };

		case FETCH_NOTIFICATIONS_STARTED:
			return {
				...state,
				loading: true,
				error: null,
				invitations: [],
			};
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				invitations: action.notifications,
			};
		case FETCH_NOTIFICATIONS_FAILED:
			return { ...state, loading: false, error: action.error_message };
		default:
			return state;
	}
};

export default userReducer;
