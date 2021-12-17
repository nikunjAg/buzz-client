import React, { useCallback, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import "./globals.module.css";

import Login from "./components/Auth/Login";
import LoginSuccess from "./components/Auth/LoginSuccess";
import LoginError from "./components/Auth/LoginError";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";

import { autoLoginUser } from "./store/actions/auth.action";

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const tryAutoLoginUser = useCallback(() => {
		dispatch(autoLoginUser());
	}, [dispatch]);

	useEffect(() => {
		tryAutoLoginUser();
	}, [tryAutoLoginUser]);

	let routes = (
		<Switch>
			<Route path="/login/success">
				<LoginSuccess />
			</Route>
			<Route path="/login/error">
				<LoginError />
			</Route>
			<Route path="/login">
				<Login onLoginUser={tryAutoLoginUser} />
			</Route>
			<Redirect to="/login" />
		</Switch>
	);

	if (isAuthenticated) {
		routes = (
			<Layout>
				<Switch>
					<Route path="/login/success">
						<LoginSuccess />
					</Route>
					<Route path="/notifications">
						<Notifications />
					</Route>
					<Route path="/feed">
						<Home />
					</Route>
					<Redirect to="/feed" />
				</Switch>
			</Layout>
		);
	}

	return routes;
}

export default App;
