import React from "react";
import { useSelector } from "react-redux";

import classes from "./WritePost.module.css";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";

const WritePost = (props) => {
	const profileImage = useSelector((state) => state.user.profileImage);

	return (
		<Card className={classes.writePost}>
			<Avatar
				className={classes.avatar}
				src={profileImage}
				alt="Profile Image"
			/>
			<input
				type="text"
				name="search"
				className={classes.postCaption}
				placeholder="Start a post..."
			/>
			<div className={classes.imagePicker}>
				<label htmlFor="image-picker">
					<span className="material-icons-outlined">
						photo_camera
					</span>
					Photos / Video
				</label>
				<input
					type="file"
					name="post-image"
					id="image-picker"
					alt="Post Image"
				/>
			</div>
		</Card>
	);
};

export default WritePost;
