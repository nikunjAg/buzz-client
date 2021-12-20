export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export const addToast = (options) => {
	return { type: ADD_TOAST, toast: { ...options } };
};
export const removeToast = (id) => {
	return { type: REMOVE_TOAST, id };
};
