import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./FullPost.module.css";
import axios from "../../axios";
import Post from "./Post";
import Comments from "./Comments/Comments";
import Card from "../UI/Card/Card";
import Spinner from "../UI/Spinner/Spinner";

const FullPost = () => {
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { id: postId } = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			setLoading(true);
			const {
				data: { post: fetchedPost },
			} = await axios.get(`/posts/${postId}`);
			console.log(fetchedPost);
			setPost(fetchedPost);
			setLoading(false);
		};

		fetchPost().catch((e) => {
			console.log(e);
			setLoading(false);
			setError(e.message);
		});
	}, [postId]);

	let postContent = (
		<Card className={classes.fullPostFallback}>
			<p>No such post found.</p>
			<small>Please check the URL.</small>
		</Card>
	);

	if (loading) {
		postContent = <Spinner />;
	}

	if (error) {
		postContent = (
			<Card className={classes.error}>
				<p>{error}</p>
			</Card>
		);
	}

	if (post) {
		postContent = (
			<Fragment>
				<Post
					_id={postId}
					content={post.content}
					postedBy={post.postedBy}
					createdAt={post.createdAt}
					images={post.images}
					likes={post.likes}
					isLiked={post.isLiked}
					dislikes={post.dislikes}
					isDisliked={post.isDisliked}
					comments={post.comments}
				/>
				<Comments postId={postId} />
			</Fragment>
		);
	}

	return <div className={classes.fullPost}>{postContent}</div>;
};

export default FullPost;
