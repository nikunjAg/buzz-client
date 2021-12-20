import React, { useState } from "react";

import classes from "./Login.module.css";
import { BASE_URL } from "../../axios";
import Loading from "../UI/Loading/Loading";
// import ErrorMessage from "../UI/Messages/ErrorMessage";

const Login = (props) => {
	// const [loginTried, setLoginTried] = useState(false);

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

					props.onLoginUser();
					// setLoginTried(true);
				}
			}, 300);
		}
	};

	/* const errorClearedHandler = () => {
		setLoginTried(false);
	}; */

	/* const errorHandler = loginTried && props.error && (
		<ErrorMessage message={props.error} onTimeout={errorClearedHandler} />
	); */

	const loading = props.loading && <Loading className={classes.loading} />;

	return (
		<div className={classes.login}>
			{/* {errorHandler} */}
			{loading}

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

export default React.memo(Login);
