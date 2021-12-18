import React from "react";

import classes from "./Spinner.module.css";

const Spinner = (props) => {
	return (
		<div className={`${classes.spinnerWrapper} ${props.className || ""}`}>
			<div className={classes.spinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
