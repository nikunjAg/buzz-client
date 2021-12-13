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
			<input
				type="image"
				name="post-image"
				className={classes.ImagePicker}
				alt="Post Image"
			/>
		</Card>
	);
};

export default Search;
