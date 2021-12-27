import {
	FETCH_UNREAD_NOTIFICATIONS_STARTED,
	FETCH_UNREAD_NOTIFICATIONS_SUCCESS,
	FETCH_UNREAD_NOTIFICATIONS_FAILED,
	FETCH_NOTIFICATIONS_STARTED,
	FETCH_NOTIFICATIONS_SUCCESS,
	FETCH_NOTIFICATIONS_FAILED,
	NOTIFICATIONS_UPDATED,
} from "../actions/notifications.action";

const initialState = {
	unreadNotifications: [],
	invitations: [],
	loading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_UNREAD_NOTIFICATIONS_STARTED:
			return {
				...state,
				loading: true,
				unreadNotifications: 0,
			};
		case FETCH_UNREAD_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				unreadNotifications: action.notifications,
			};
		case FETCH_UNREAD_NOTIFICATIONS_FAILED:
			return { ...state, loading: false };
		case FETCH_NOTIFICATIONS_STARTED:
			return {
				...state,
				loading: true,
				invitations: [],
			};
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				invitations: action.notifications,
				unreadNotifications: 0,
			};
		case FETCH_NOTIFICATIONS_FAILED:
			return { ...state, loading: false };
		case NOTIFICATIONS_UPDATED:
			return { ...state, invitations: action.notifications };
		default:
			return state;
	}
};

export default userReducer;
