import React from "react";

import classes from "./Login.module.css";
import { BASE_URL } from "../../axios";
import axios from "../../axios";

const Login = (props) => {
	const fetchUser = async () => {
		try {
			const { data } = await axios.get("/auth/user", {
				withCredentials: true,
			});
			console.log("You are successfully Authenticated.");
			console.log(data);
		} catch (err) {
			console.log(err);
			console.log("No, you are not authenticated.");
		}
	};

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

					fetchUser();
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
