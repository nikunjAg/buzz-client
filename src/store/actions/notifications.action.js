import axios from "../../axios";
import { errorHandler } from "./toast.action";

export const FETCH_UNREAD_NOTIFICATIONS_STARTED =
	"FETCH_UNREAD_NOTIFICATIONS_STARTED";
export const FETCH_UNREAD_NOTIFICATIONS_SUCCESS =
	"FETCH_UNREAD_NOTIFICATIONS_SUCCESS";
export const FETCH_UNREAD_NOTIFICATIONS_FAILED =
	"FETCH_UNREAD_NOTIFICATIONS_FAILED";

const fetchUnreadNotificationsStarted = () => {
	return { type: FETCH_UNREAD_NOTIFICATIONS_STARTED };
};

const fetchUnreadNotificationsSuccess = (notifications) => {
	return { type: FETCH_UNREAD_NOTIFICATIONS_SUCCESS, notifications };
};

const fetchUnreadNotificationsFailed = () => {
	return {
		type: FETCH_UNREAD_NOTIFICATIONS_FAILED,
	};
};

export const fetchUnreadNotifications = () => {
	return async (dispatch) => {
		dispatch(fetchUnreadNotificationsStarted());
		try {
			const {
				data: { notifications },
			} = await axios.get("/notifications?type=unread", {
				withCredentials: true,
			});

			dispatch(fetchUnreadNotificationsSuccess(notifications));
		} catch (err) {
			dispatch(fetchUnreadNotificationsFailed());
			dispatch(errorHandler(err));
		}
	};
};

export const FETCH_NOTIFICATIONS_STARTED = "FETCH_NOTIFICATIONS_STARTED";
export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
export const FETCH_NOTIFICATIONS_FAILED = "FETCH_NOTIFICATIONS_FAILED";

const fetchNotificationsStarted = () => {
	return { type: FETCH_NOTIFICATIONS_STARTED };
};

const fetchNotificationsSuccess = (notifications) => {
	return { type: FETCH_NOTIFICATIONS_SUCCESS, notifications };
};

const fetchNotificationsFailed = () => {
	return {
		type: FETCH_NOTIFICATIONS_FAILED,
	};
};

export const fetchNotifications = () => {
	return async (dispatch) => {
		dispatch(fetchNotificationsStarted());
		try {
			const {
				data: { notifications },
			} = await axios.get("/notifications", {
				withCredentials: true,
			});
			console.log(notifications);
			dispatch(fetchNotificationsSuccess(notifications));
		} catch (err) {
			dispatch(fetchNotificationsFailed());
			dispatch(errorHandler(err));
		}
	};
};
