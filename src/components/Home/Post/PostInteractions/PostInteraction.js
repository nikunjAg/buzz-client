import React, { useRef } from "react";

import classes from "./PostInteraction.module.css";
import AddComment from "./AddComment";
import PostStats from "./PostStats";

const PostActivity = () => {
	const commentInputRef = useRef();

	const likeClickedHandler = () => {};

	const dislikeClickedHandler = () => {};

	const commentClickedHandler = () => {
		commentInputRef.current.focus();
	};

	return (
		<div className={classes.postActivity}>
			<PostStats />
			<div className={classes.actions} onClick={likeClickedHandler}>
				<div className={classes.action}>
					<span className="material-icons-outlined">thumb_up</span>
					<span>Like</span>
				</div>
				<div className={classes.action} onClick={dislikeClickedHandler}>
					<span className="material-icons-outlined">thumb_down</span>
					<span>Disike</span>
				</div>
				<div className={classes.action} onClick={commentClickedHandler}>
					<span className="material-icons-outlined">
						chat_bubble_outline
					</span>
					<span>Comment</span>
				</div>
			</div>
			<AddComment ref={commentInputRef} />
		</div>
	);
};

export default PostActivity;
