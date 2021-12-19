import React from "react";
import { Image } from "cloudinary-react";

import classes from "./Post.module.css";
import profileImage from "../../../assets/profile.jpg";
import formatDate from "../../../util/DateFormat";
import Card from "../../UI/Card/Card";
import Avatar from "../../UI/Avatar/Avatar";
import PostInteraction from "./PostInteractions/PostInteraction";

const Post = ({ content, postedBy, createdAt, images }) => {
	return (
		<Card className={classes.post}>
			<div className={classes.header}>
				<Avatar
					className={classes.avatar}
					src={profileImage}
					alt="Post Author"
				/>
				<div className={classes.author}>
					<h4>{postedBy.name}</h4>
					<p>{formatDate(createdAt)}</p>
				</div>
				<div className={classes.more}>
					<span className="material-icons-outlined">more_horiz</span>
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
						/>
					</div>
				))}
			</div>
			<PostInteraction />
		</Card>
	);
};

export default Post;
