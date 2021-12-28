import React, { Fragment } from "react";
import { Image } from "cloudinary-react";

import classes from "./Post.module.css";
import formatDate from "../../util/DateFormat";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";
import PostInteraction from "./PostInteractions/PostInteraction";

const getStyle = (length, index) => {
	if (length === 4) return classes.size1;
	else if (length === 3) {
		return index === 2 ? classes.size2 : classes.size1;
	} else if (length === 2) return classes.size1;
	else return classes.size3;
};

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
	onModeratorFeed,
	onClick,
	onFlagged,
	onVerified,
	onDeclined,
}) => {
	console.log("Post Rendered", _id);
	const postClickedHandler = () => {
		onClick(_id);
	};

	const flagPostHandler = (event) => {
		event.stopPropagation();
		if (!isVerified && !isFlagged) {
			onFlagged(_id);
		}
	};

	const verifyPostHandler = (event) => {
		event.stopPropagation();
		onVerified(_id);
	};

	const declinePostHandler = (event) => {
		event.stopPropagation();
		onDeclined(_id);
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
						<Fragment>
							<div
								className={`${classes.action} ${classes.flag} ${
									isFlagged && classes.active
								}`}
								onClick={flagPostHandler}
							>
								<span className="material-icons">flag</span>
							</div>
							{onModeratorFeed && (
								<div
									className={`${classes.action} ${classes.verify}`}
									onClick={verifyPostHandler}
								>
									<span className="material-icons">
										task_alt
									</span>
								</div>
							)}
							{onModeratorFeed && (
								<div
									className={`${classes.action} ${classes.delete}`}
									onClick={declinePostHandler}
								>
									<span className="material-icons-outlined">
										delete
									</span>
								</div>
							)}
						</Fragment>
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
				{images.map((img, index, arr) => (
					<Image
						cloudName="nagcloudinary"
						publicId={img}
						key={index}
						className={getStyle(arr.length, index)}
						crop="scale"
						sizes="(min-width: 300px)"
					/>
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
