import React from "react";

import classes from "./Comment.module.css";
import Avatar from "../../UI/Avatar/Avatar";

const Comment = ({ content, postedBy }) => {
	return (
		<div className={classes.Comment}>
			<Avatar src={postedBy.profileImage} />
			<h4>{postedBy.name}</h4>
			<p>{content}</p>
		</div>
	);
};

export default Comment;
