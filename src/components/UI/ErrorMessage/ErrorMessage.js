import React, { useEffect } from "react";

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

	return (
		<div className={classes.errorMessage}>
			<p className={classes.message}>
				<span class="material-icons-outlined">error</span>
				{message || "Something went wrong! Try again later"}
			</p>
		</div>
	);
};

export default ErrorMessage;
