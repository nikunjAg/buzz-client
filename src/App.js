import React, { Fragment, useCallback, useEffect } from "react";
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
import Toasts from "./components/Toasts/Toasts";
import PostDetail from "./pages/PostDetail";
import ProfilePage from "./pages/ProfilePage";

import { autoLoginUser } from "./store/actions/auth.action";
import { fetchUnreadNotifications } from "./store/actions/notifications.action";

function App() {
	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const tryAutoLoginUser = useCallback(() => {
		dispatch(autoLoginUser());
	}, [dispatch]);

	// Try Auto Login the user using session id
	useEffect(() => {
		tryAutoLoginUser();
	}, [tryAutoLoginUser]);

	// Fecth Unread Notification if authenticated
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
				<Login onLoginUser={tryAutoLoginUser} loading={loading} />
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
					<Route path="/feed">
						<Home />
					</Route>
					<Route path="/notifications">
						<Notifications />
					</Route>
					<Route path="/posts/:id">
						<PostDetail />
					</Route>
					<Route path="/profile/:id">
						<ProfilePage />
					</Route>
					<Redirect to="/feed" />
				</Switch>
			</Layout>
		);
	}

	return (
		<Fragment>
			<Toasts />
			{routes}
		</Fragment>
	);
}

export default App;
