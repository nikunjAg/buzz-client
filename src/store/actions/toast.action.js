import { getRequestErrorMessage } from "../utils";

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
		dispatch(
			addToast({
				type: "error",
				message: getRequestErrorMessage(error),
			})
		);
	};
};
