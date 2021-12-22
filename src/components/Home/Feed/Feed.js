import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Feed.module.css";
import Post from "../../Post/Post";
import Spinner from "../../UI/Spinner/Spinner";
import Card from "../../UI/Card/Card";
import { fetchFeed } from "../../../store/actions/feed.action";

const Feed = (props) => {
	const { posts, loading } = useSelector((state) => state.feed);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (posts.length === 0) dispatch(fetchFeed());
	}, [dispatch, posts.length]);

	const postClickedHandler = (postId) => {
		console.log("Post Clicked Handler");
		history.push(`/posts/${postId}`);
	};

	let feedContent = (
		<Card className={classes.feedFallback}>
			<p>
				Write your own posts
				<br />
				<span>or start following someone to view his posts.</span>
			</p>
		</Card>
	);

	if (loading) {
		feedContent = <Spinner />;
	}

	if (posts.length > 0) {
		feedContent = (
			<Fragment>
				<div className={classes.sortController}>
					<span>Sort By:</span>
					<select className={classes.sortSelect}>
						<option value="top">Top</option>
						<option value="bop">Bop</option>
					</select>
				</div>
				<div className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post._id}
							{...post}
							onClick={postClickedHandler.bind(null, post._id)}
						/>
					))}
				</div>
			</Fragment>
		);
	}

	return (
		<div className={classes.feed}>
			{loading && <Spinner />}

			{feedContent}
		</div>
	);
};

export default Feed;
