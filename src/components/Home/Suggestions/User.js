import React from "react";

import classes from "./User.module.css";
import Avatar from "../../UI/Avatar/Avatar";

const User = (props) => {
	return (
		<div className={classes.user}>
			<Avatar
				className={classes.avatar}
				src={props.profileImage}
				alt="Suggestion"
			/>
			<h4>{props.name}</h4>
		</div>
	);
};

export default User;
