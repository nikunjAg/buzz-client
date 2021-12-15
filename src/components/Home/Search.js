import React from "react";

import classes from "./Search.module.css";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";
import profileImage from "../../assets/profile.jpg";

const Search = (props) => {
	return (
		<Card className={classes.search}>
			<Avatar
				className={classes.avatar}
				src={profileImage}
				alt="Profile Image"
			/>
			<input
				type="text"
				name="search"
				className={classes.searchBar}
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

export default Search;
