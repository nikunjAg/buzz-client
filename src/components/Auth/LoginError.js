import React, { useEffect } from "react";

import classes from "./Login.module.css";

const LoginError = (props) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			window.close();
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={classes.loginError}>
			Something went wrong !
			<span>Unable to login using Google, Try again later!</span>
		</div>
	);
};

export default LoginError;
