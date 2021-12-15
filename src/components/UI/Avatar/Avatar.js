import React from "react";

import classes from "./Avatar.module.css";

const Avatar = (props) => {
	return (
		<div className={`${classes.avatar} ${props.className || ""}`}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
};

export default Avatar;
