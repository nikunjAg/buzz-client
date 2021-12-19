import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Feed.module.css";
import Post from "../Post/Post";
import { fetchFeed } from "../../../store/actions/feed.action";

const Feed = (props) => {
	const { posts, loading } = useSelector((state) => state.feed);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFeed());
	}, [dispatch]);

	const postsEls = posts.map((post) => <Post key={post._id} {...post} />);

	return (
		<div className={classes.feed}>
			<div className={classes.sortController}>
				<span>Sort By:</span>
				<select className={classes.sortSelect} value="top">
					<option value="top">Top</option>
					<option value="bop">Bop</option>
				</select>
			</div>

			<div className={classes.posts}>{postsEls}</div>
		</div>
	);
};

export default Feed;
