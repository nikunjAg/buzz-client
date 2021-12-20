import { ADD_TOAST, REMOVE_TOAST } from "../actions/toast.action";

const initialState = [];

const toastReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TOAST:
			return [...state, action.toast];
		case REMOVE_TOAST:
			return state.filter((st) => st.id !== action.id);
		default:
			return state;
	}
};

export default toastReducer;
