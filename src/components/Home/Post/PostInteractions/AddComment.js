import React from "react";
import { useSelector } from "react-redux";

import classes from "./AddComment.module.css";
import Avatar from "../../../UI/Avatar/Avatar";

const AddComment = React.forwardRef((props, ref) => {
	const profileImage = useSelector((state) => state.user.profileImage);

	return (
		<div className={classes.addComment}>
			<Avatar
				className={classes.avatar}
				src={profileImage}
				alt="Profile Image"
			/>
			<input
				placeholder="Write a comment..."
				name="comment"
				className={classes.commentInput}
				ref={ref}
			/>
		</div>
	);
});

export default AddComment;
