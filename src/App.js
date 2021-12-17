import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import "./globals.module.css";

import Login from "./components/Auth/Login";
import LoginSuccess from "./components/Auth/LoginSuccess";
import LoginError from "./components/Auth/LoginError";
import axios from "./axios";

function App() {
	const fetchUserHandler = async () => {
		try {
			const { data } = await axios.get("/users/me", {
				withCredentials: true,
			});
			console.log("You are successfully Authenticated.");
			console.log(data);
		} catch (err) {
			console.log(err);
			console.log("No, you are not authenticated.");
		}
	};

	useEffect(() => {
		fetchUserHandler();
	}, []);

	return (
		<Switch>
			<Route path="/login/success">
				<LoginSuccess />
			</Route>
			<Route path="/login/error">
				<LoginError />
			</Route>
			<Route path="/login">
				<Login onFetchUser={fetchUserHandler} />
			</Route>
			<Redirect to="/login" />
		</Switch>
	);
}

export default App;
