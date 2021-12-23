export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export const addToast = (options) => {
	console.log("ADDING TOAST", options);
	return { type: ADD_TOAST, toast: { ...options } };
};
export const removeToast = (id) => {
	console.log("REMOVEING TOAST:", id);
	return { type: REMOVE_TOAST, id };
};

export const errorHandler = (error) => {
	console.error(error);
	return (dispatch) => {
		if (error.response) {
			dispatch(
				addToast({
					type: "error",
					message: error.response.data.message,
				})
			);
		} else if (error.request) {
			dispatch(
				addToast({
					type: "error",
					message: "Unable to get response.",
				})
			);
		} else {
			dispatch(
				addToast({
					type: "error",
					message:
						"Unable to send request! Please check your connection.",
				})
			);
		}
	};
};
