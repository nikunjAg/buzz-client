import React from "react";

import classes from "./Header.module.css";
import profileIcon from "../../../assets/profile.jpg";

const Header = () => {
	return (
		<header className={classes.Header}>
			<div className={classes.Logo}>
				<a href="/">Logo</a>
			</div>
			<div className={classes.Links}>
				<div className={classes.User}>
					<div className={classes.Avatar}>
						<img src={profileIcon} alt="Avatar" />
					</div>
					<div className={classes.UserName}>Nikunj Aggarwal</div>
				</div>
				<div className={classes.Icon}>
					<span class="material-icons">notifications</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
