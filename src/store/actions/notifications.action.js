import axios from "../../axios";

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

const fetchUnreadNotificationsFailed = (errMessage) => {
	return {
		type: FETCH_UNREAD_NOTIFICATIONS_FAILED,
		error_message: errMessage,
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
			if (err.response) {
				dispatch(
					fetchUnreadNotificationsFailed(err.response.data.message)
				);
			} else if (err.request) {
				dispatch(
					fetchUnreadNotificationsFailed("Unable to send request.")
				);
			} else {
				dispatch(
					fetchUnreadNotificationsFailed(
						"Unable to send request, Check your connection"
					)
				);
			}
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

const fetchNotificationsFailed = (errMessage) => {
	return {
		type: FETCH_NOTIFICATIONS_FAILED,
		error_message: errMessage,
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
			if (err.response) {
				dispatch(fetchNotificationsFailed(err.response.data.message));
			} else if (err.request) {
				dispatch(fetchNotificationsFailed("Unable to send request."));
			} else {
				dispatch(
					fetchNotificationsFailed(
						"Unable to send request, Check your connection"
					)
				);
			}
		}
	};
};
