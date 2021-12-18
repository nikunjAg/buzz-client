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
import { fetchUnreadNotifications } from "./store/actions/notifications.action";

function App() {
	const { isAuthenticated, loading, error } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	const tryAutoLoginUser = useCallback(() => {
		dispatch(autoLoginUser());
	}, [dispatch]);

	useEffect(() => {
		tryAutoLoginUser();
	}, [tryAutoLoginUser]);

	useEffect(() => {
		if (isAuthenticated) {
			// We need to fetch unread notifications
			dispatch(fetchUnreadNotifications());
		}
	}, [isAuthenticated, dispatch]);

	// Seperating the routes for authenticated and unauthenticated users
	let routes = (
		<Switch>
			<Route path="/login/success">
				<LoginSuccess />
			</Route>
			<Route path="/login/error">
				<LoginError />
			</Route>
			<Route path="/">
				<Login
					onLoginUser={tryAutoLoginUser}
					loading={loading}
					error={error}
				/>
			</Route>
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
