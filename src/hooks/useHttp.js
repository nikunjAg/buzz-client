import { useCallback, useReducer } from "react";
import { useDispatch } from "react-redux";

import { errorHandler } from "../store/actions/toast.action";

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

const useHttp = (requestFn, defaultData, startLoading = false) => {
	const [state, dispatch] = useReducer(reducerFn, {
		data: defaultData,
		loading: startLoading,
		error: null,
	});

	const reduxDispatch = useDispatch();

	const sendRequest = useCallback(
		async (requestData, successCb, failureCb) => {
			try {
				dispatch({ type: SEND });
				const data = await requestFn(requestData);
				dispatch({ type: SUCCESS, data });
				if (successCb) successCb(data);
			} catch (error) {
				dispatch({ type: ERROR, error });
				reduxDispatch(errorHandler(error));
				if (failureCb) failureCb(error);
			}
		},
		[dispatch, requestFn, reduxDispatch]
	);
	return {
		sendRequest,
		loading: state.loading,
		data: state.data,
		error: state.error,
	};
};

export default useHttp;
