import React from "react";

import classes from "./PostInteraction.module.css";
import AddComment from "./AddComment";
import PostStats from "./PostStats";

const PostActivity = (props) => {
	return (
		<div className={classes.postActivity}>
			<PostStats />
			<div className={classes.actions}>
				<div className={classes.action}>
					<span className="material-icons-outlined">thumb_up</span>
					<span>Like</span>
				</div>
				<div className={classes.action}>
					<span className="material-icons-outlined">thumb_down</span>
					<span>Disike</span>
				</div>
				<div className={classes.action}>
					<span className="material-icons-outlined">
						chat_bubble_outline
					</span>
					<span>Comment</span>
				</div>
			</div>
			<AddComment />
		</div>
	);
};

export default PostActivity;
