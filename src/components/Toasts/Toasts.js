import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Toasts.module.css";
import SuccessMessage from "../UI/Messages/SuccessMessage";
import ErrorMessage from "../UI/Messages/ErrorMessage";
import { removeToast } from "../../store/actions/toast.action";

const Toasts = (props) => {
	const toasts = useSelector((state) => state.toasts);
	const dispatch = useDispatch();

	const removeToastHandler = (toastId) => {
		dispatch(removeToast(toastId));
	};

	const toastsMessages = toasts.map((toast) => {
		switch (toast.type) {
			case "success":
				return (
					<SuccessMessage
						key={toast.id}
						message={toast.message}
						timeout={toast.timeout}
						onTimeout={removeToastHandler.bind(null, toast.id)}
					/>
				);
			case "error":
				return (
					<ErrorMessage
						key={toast.id}
						message={toast.message}
						timeout={toast.timeout}
						onTimeout={removeToastHandler.bind(null, toast.id)}
					/>
				);
			default:
				return (
					<SuccessMessage
						key={toast.id}
						message={toast.message}
						timeout={toast.timeout}
						onTimeout={removeToastHandler.bind(null, toast.id)}
					/>
				);
		}
	});

	const toastsEl = <div className={classes.toasts}>{toastsMessages}</div>;
	return ReactDOM.createPortal(
		toastsEl,
		document.getElementById("messages-root")
	);
};

export default Toasts;
