import React, { useEffect } from "react";

import classes from "./Login.module.css";

const LoginSuccess = (props) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			window.close();
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={classes.loginSuccess}>
			Logged in Successfully
			<span>
				You will be redirected back within 1 sec, if not then close this
				window.
			</span>
		</div>
	);
};

export default LoginSuccess;
