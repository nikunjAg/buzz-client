import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Feed.module.css";
import Post from "../../Post/Post";
import Spinner from "../../UI/Spinner/Spinner";
import Card from "../../UI/Card/Card";
import {
	fetchFeed,
	fetchFlaggedPosts,
	flagPost,
	verifyPost,
	declinePost,
} from "../../../store/actions/feed.action";

const Feed = (props) => {
	const [showModeratorFeed, setShowModeratorFeed] = useState(false);
	const isModerator = useSelector((state) => state.user.isModerator);
	const { posts, flaggedPosts, loading } = useSelector((state) => state.feed);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (showModeratorFeed) {
			if (flaggedPosts.length === 0) dispatch(fetchFlaggedPosts());
		} else {
			if (posts.length === 0) dispatch(fetchFeed());
		}
	}, [dispatch, showModeratorFeed, posts.length, flaggedPosts.length]);

	const toggleFeed = () => {
		setShowModeratorFeed((prev) => !prev);
	};

	/* POST ACTIONS */
	const postClickedHandler = useCallback(
		(postId) => {
			history.push(`/posts/${postId}`);
		},
		[history]
	);
	const postFlaggedHandler = useCallback(
		(postId) => {
			dispatch(flagPost(postId));
		},
		[dispatch]
	);
	const postVerifiedHandler = useCallback(
		(postId) => {
			dispatch(verifyPost(postId));
		},
		[dispatch]
	);
	const postDeclinedHandler = useCallback(
		(postId) => {
			dispatch(declinePost(postId));
		},
		[dispatch]
	);

	const feedController = (
		<div className={classes.feedController}>
			<div className={classes.sortController}>
				<span>Sort By:</span>
				<select className={classes.sortSelect}>
					<option value="top">Top</option>
					<option value="bop">Bop</option>
				</select>
			</div>
			{isModerator && (
				<div className={classes.postsTypeController}>
					<button
						className={showModeratorFeed && classes.active}
						onClick={toggleFeed}
					>
						Moderator
					</button>
				</div>
			)}
		</div>
	);

	let feedContent = (
		<Fragment>
			{feedController}
			<Card className={classes.feedFallback}>
				<p>
					Write your own posts
					<br />
					<span>or start following someone to view his posts.</span>
				</p>
			</Card>
		</Fragment>
	);

	if (loading) {
		feedContent = <Spinner />;
	}

	if (
		(!showModeratorFeed && posts.length > 0) ||
		(showModeratorFeed && flaggedPosts.length > 0)
	) {
		const postsArray = showModeratorFeed ? flaggedPosts : posts;
		feedContent = (
			<Fragment>
				{feedController}
				<div className={classes.posts}>
					{postsArray.map((post) => (
						<Post
							key={post._id}
							{...post}
							onModeratorFeed={showModeratorFeed}
							onClick={postClickedHandler}
							onFlagged={postFlaggedHandler}
							onVerified={postVerifiedHandler}
							onDeclined={postDeclinedHandler}
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
