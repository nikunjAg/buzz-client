import React from "react";

import classes from "./Login.module.css";
import { BASE_URL } from "../../axios";

const Login = (props) => {
	console.log("LOGIN Component mounted");

	const googleSSOHandler = async () => {
		const GOOGLE_LOGIN_URL = `${BASE_URL}/auth/google`;

		const googleSSOWindow = window.open(
			GOOGLE_LOGIN_URL,
			"_blank",
			"height=600,width=500"
		);

		if (googleSSOWindow) {
			const timer = setInterval(() => {
				if (googleSSOWindow.closed) {
					clearInterval(timer);

					props.onFetchUser();
				}
			}, 300);
		}
	};

	return (
		<div className={classes.login}>
			<div className={classes.logo}></div>

			<div className={classes.heading}>
				Enter your details and Start
				<br />
				your journey with us.
			</div>

			<div className={classes.message}>
				Don't stop until you're proud.
			</div>

			<button className={classes.loginBtn} onClick={googleSSOHandler}>
				Sign In with Google
			</button>
		</div>
	);
};

export default Login;
