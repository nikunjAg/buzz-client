import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Feed.module.css";
import Post from "../Post/Post";
import Spinner from "../../UI/Spinner/Spinner";
import Card from "../../UI/Card/Card";
import { fetchFeed } from "../../../store/actions/feed.action";

const Feed = (props) => {
	const { posts, loading } = useSelector((state) => state.feed);
	const dispatch = useDispatch();

	useEffect(() => {
		if (posts.length === 0) dispatch(fetchFeed());
	}, [dispatch, posts.length]);

	let feedContent = (
		<div className={classes.posts}>
			{posts.map((post) => (
				<Post key={post._id} {...post} />
			))}
		</div>
	);

	if (posts.length === 0) {
		feedContent = (
			<Card className={classes.feedFallback}>
				<p>
					Write your own posts
					<br />
					<span>or start following someone to view his posts.</span>
				</p>
			</Card>
		);
	}

	return (
		<div className={classes.feed}>
			{loading && <Spinner />}
			<div className={classes.sortController}>
				<span>Sort By:</span>
				<select className={classes.sortSelect}>
					<option value="top">Top</option>
					<option value="bop">Bop</option>
				</select>
			</div>

			{feedContent}
		</div>
	);
};

export default Feed;
