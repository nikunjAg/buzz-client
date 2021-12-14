import React from "react";

import classes from "./Search.module.css";
import Card from "../UI/Card/Card";
import profileImage from "../../assets/profile.jpg";

const Search = (props) => {
	return (
		<Card className={classes.Search}>
			<div
				className={classes.Avatar}
				style={{
					backgroundImage: `url(${profileImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></div>
			<input
				type="text"
				name="search"
				className={classes.SearchBar}
				placeholder="Start a post..."
			/>
			<div className={classes.ImagePicker}>
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
