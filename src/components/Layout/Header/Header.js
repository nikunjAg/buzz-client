import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import Avatar from "../../UI/Avatar/Avatar";

const Header = () => {
	const { name, profileImage } = useSelector((state) => state.user);

	const unreadNotificationsCount = useSelector(
		(state) => state.notifications.unreadNotifications.length
	);

	let newNotifications;
	if (unreadNotificationsCount > 0) {
		newNotifications = (
			<span className={classes.newNotifications}>
				{unreadNotificationsCount}
			</span>
		);
	}

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<NavLink to="/">Logo</NavLink>
			</div>
			<div className={classes.links}>
				<div className={classes.user}>
					<Avatar
						className={classes.avatar}
						src={profileImage}
						alt="Avatar"
					/>
					<div className={classes.userName}>{name}</div>
				</div>
				<NavLink to="/notifications" className={classes.icon}>
					<span
						className={`material-icons ${classes["material-icons"]}`}
					>
						notifications
					</span>
					{newNotifications}
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
