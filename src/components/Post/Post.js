import React from "react";
import { useDispatch } from "react-redux";
import { Image } from "cloudinary-react";

import classes from "./Post.module.css";
import formatDate from "../../util/DateFormat";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";
import PostInteraction from "./PostInteractions/PostInteraction";
import { flagPost } from "../../store/actions/feed.action";

const Post = ({
	_id,
	content,
	postedBy,
	createdAt,
	images,
	likes,
	isLiked,
	dislikes,
	isDisliked,
	comments,
	isFlagged,
	isVerified,
	onClick,
}) => {
	console.log("Post Rendered", _id);
	const dispatch = useDispatch();

	const postClickedHandler = () => {
		onClick(_id);
	};

	const flagPostHandler = (event) => {
		event.stopPropagation();
		if (!isVerified && !isFlagged) {
			dispatch(flagPost(_id));
		}
	};

	return (
		<Card className={classes.post} onClick={postClickedHandler}>
			<div className={classes.header}>
				<Avatar
					className={classes.avatar}
					src={postedBy.profileImage}
					alt="Post Author"
				/>
				<div className={classes.author}>
					<h4>{postedBy.name}</h4>
					<p>{formatDate(createdAt)}</p>
				</div>
				<div className={classes.more}>
					{!isVerified && (
						<div
							className={`${classes.action} ${
								isFlagged && classes.active
							}`}
							onClick={flagPostHandler}
						>
							<span className="material-icons">flag</span>
						</div>
					)}
					{isVerified && (
						<div
							className={`${classes.status} ${classes.isVerified}`}
						>
							<span className="material-icons">verified</span>
						</div>
					)}
				</div>
			</div>
			<div className={classes.content}>{content}</div>
			<div className={classes.previewImages}>
				{images.map((img, index) => (
					<div key={index} className={classes.preview}>
						<Image
							cloudName="nagcloudinary"
							publicId={img}
							crop="scale"
							sizes="(min-width: 300px)"
						/>
					</div>
				))}
			</div>
			<PostInteraction
				id={_id}
				likes={likes}
				dislikes={dislikes}
				isLiked={isLiked}
				isDisliked={isDisliked}
				comments={comments}
			/>
		</Card>
	);
};

export default React.memo(Post);
