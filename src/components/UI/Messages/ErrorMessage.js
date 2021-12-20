import React, { useEffect } from "react";
// import ReactDOM from "react-dom";

import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
	const { message, onTimeout, timeout } = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			onTimeout();
		}, timeout || 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [timeout, onTimeout]);

	const errorMessageEl = (
		<div className={classes.errorMessage}>
			<p className={classes.message}>
				<span class="material-icons-outlined">error</span>
				{message || "Something went wrong! Try again later"}
			</p>
		</div>
	);

	return errorMessageEl;
	/* return ReactDOM.createPortal(
		errorMessageEl,
		document.getElementById("messages-root")
	); */
};

export default ErrorMessage;
