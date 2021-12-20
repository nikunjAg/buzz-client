import React, { useEffect } from "react";
// import ReactDOM from "react-dom";

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
				<span className="material-icons-outlined">check</span>
				{message}
			</p>
		</div>
	);

	return successMessageEl;

	/* return ReactDOM.createPortal(
		successMessageEl,
		document.getElementById("messages-root")
	); */
};

export default SuccessMessage;
