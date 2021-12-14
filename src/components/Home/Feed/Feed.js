import React from "react";
import Post from "../Post/Post";

import classes from "./Feed.module.css";

const Feed = (props) => {
	return (
		<div className={classes.Feed}>
			<div className={classes.SortController}>
				<span>Sort By:</span>
				<select className={classes.SortSelect} value="top">
					<option value="top">Top</option>
					<option value="bop">Bop</option>
				</select>
			</div>

			<div className={classes.Posts}>
				<Post />
			</div>
		</div>
	);
};

export default Feed;
