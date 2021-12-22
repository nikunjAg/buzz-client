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
				<NavLink to="/feed">Logo</NavLink>
			</div>
			<div className={classes.links}>
				<NavLink className={classes.user} to="/profile">
					<Avatar
						className={classes.avatar}
						src={profileImage}
						alt="Avatar"
					/>
					<div className={classes.userName}>{name}</div>
				</NavLink>
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
