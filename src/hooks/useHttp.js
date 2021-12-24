import { useCallback, useReducer } from "react";

const SEND = "SEND";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const reducerFn = (state, action) => {
	switch (action.type) {
		case SEND:
			return { ...state, loading: true, data: null, error: null };
		case SUCCESS:
			return { ...state, loading: false, data: action.data };
		case ERROR:
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
};

const useHttp = (requestFn, startLoading = false) => {
	const [state, dispatch] = useReducer(reducerFn, {
		data: null,
		loading: startLoading,
		error: null,
	});

	const sendRequest = useCallback(async () => {
		try {
			dispatch({ type: SEND });
			const data = await requestFn();
			dispatch({ type: SUCCESS, data });
		} catch (error) {
			if (error.response) {
				dispatch({ type: ERROR, error: error.response.data.message });
			} else if (error.request) {
				dispatch({
					type: ERROR,
					error: "Unable to receive a response.",
				});
			} else {
				dispatch({
					type: ERROR,
					error: "Unable to send a request!, Please check your connection",
				});
			}
		}
	}, [dispatch, requestFn]);

	return [sendRequest, state.loading, state.data, state.error];
};

export default useHttp;
