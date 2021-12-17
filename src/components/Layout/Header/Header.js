import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import Avatar from "../../UI/Avatar/Avatar";

const Header = () => {
	const { name, profileImage } = useSelector((state) => state.user);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<a href="/">Logo</a>
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
					<span className="material-icons">notifications</span>
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
