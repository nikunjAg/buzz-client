import React from "react";

import classes from "./Header.module.css";
import profileIcon from "../../../assets/profile.jpg";

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<a href="/">Logo</a>
			</div>
			<div className={classes.links}>
				<div className={classes.user}>
					<div className={classes.avatar}>
						<img src={profileIcon} alt="Avatar" />
					</div>
					<div className={classes.userName}>Nikunj Aggarwal</div>
				</div>
				<div className={classes.icon}>
					<span className="material-icons">notifications</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
