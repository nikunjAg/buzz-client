import React, { useRef } from "react";

import classes from "./PostInteraction.module.css";
import AddComment from "./AddComment";
import PostStats from "./PostStats";
import { useDispatch } from "react-redux";
import { likePost, dislikePost } from "../../../store/actions/feed.action";

const PostActivity = ({
	id,
	likes,
	dislikes,
	isLiked,
	isDisliked,
	comments,
}) => {
	const commentInputRef = useRef();
	const dispatch = useDispatch();

	const likeClickedHandler = () => {
		const unlike = isLiked;
		dispatch(likePost(id, unlike));
	};

	const dislikeClickedHandler = () => {
		const undislike = isDisliked;
		dispatch(dislikePost(id, undislike));
	};

	const commentClickedHandler = () => {
		commentInputRef.current.focus();
	};

	const postActivityClickedHandler = (event) => {
		// Stopping so it does not trigger post clicked
		event.stopPropagation();
	};

	return (
		<div
			className={classes.postActivity}
			onClick={postActivityClickedHandler}
		>
			<PostStats
				id={id}
				likes={likes}
				dislikes={dislikes}
				comments={comments}
			/>
			<div className={classes.actions}>
				<div className={classes.action} onClick={likeClickedHandler}>
					<span
						className={`material-icons${
							isLiked ? "" : "-outlined"
						}`}
					>
						thumb_up
					</span>
					<span>Like{isLiked && "d"}</span>
				</div>
				<div className={classes.action} onClick={dislikeClickedHandler}>
					<span
						className={`material-icons${
							isDisliked ? "" : "-outlined"
						}`}
					>
						thumb_down
					</span>
					<span>Disike{isDisliked && "d"}</span>
				</div>
				<div className={classes.action} onClick={commentClickedHandler}>
					<span className="material-icons-outlined">
						chat_bubble_outline
					</span>
					<span>Comment</span>
				</div>
			</div>
			<AddComment postId={id} ref={commentInputRef} />
		</div>
	);
};

export default PostActivity;
