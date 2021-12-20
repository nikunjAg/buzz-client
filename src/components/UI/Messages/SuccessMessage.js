import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./SuccessMessage.module.css";

const SuccessMessage = (props) => {
	const { message, onTimeout, timeout } = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			onTimeout();
		}, timeout || 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [timeout, onTimeout]);

	const successMessageEl = (
		<div className={classes.successMessage}>
			<p className={classes.message}>
				<span class="material-icons-outlined">error</span>
				{message}
			</p>
		</div>
	);

	ReactDOM.createPortal(
		successMessageEl,
		document.getElementById("messages-root")
	);
};

export default SuccessMessage;
