import React from "react";
import Post from "../Post/Post";

import classes from "./Feed.module.css";

const Feed = (props) => {
	return (
		<div className={classes.feed}>
			<div className={classes.sortController}>
				<span>Sort By:</span>
				<select className={classes.sortSelect} value="top">
					<option value="top">Top</option>
					<option value="bop">Bop</option>
				</select>
			</div>

			<div className={classes.posts}>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default Feed;
