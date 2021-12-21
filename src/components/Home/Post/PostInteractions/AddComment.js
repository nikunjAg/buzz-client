import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AddComment.module.css";
import Avatar from "../../../UI/Avatar/Avatar";
import { commentPost } from "../../../../store/actions/feed.action";

const AddComment = React.forwardRef((props, ref) => {
	const profileImage = useSelector((state) => state.user.profileImage);
	const dispatch = useDispatch();

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Submitting");
		dispatch(commentPost(props.id));
	};

	return (
		<form className={classes.addComment} onSubmit={formSubmitHandler}>
			<Avatar
				className={classes.avatar}
				src={profileImage}
				alt="Profile Image"
			/>
			<textarea
				placeholder="Write a comment..."
				name="comment"
				className={classes.commentTextarea}
				rows={1}
				ref={ref}
			></textarea>
			<button type="submit" className={classes.submit}>
				<span className="material-icons-round">send</span>
			</button>
		</form>
	);
});

export default AddComment;
