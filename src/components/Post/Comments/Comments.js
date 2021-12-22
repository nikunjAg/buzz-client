import React, { useEffect, useState } from "react";

import classes from "./Comments.module.css";
import axios from "../../../axios";
import Comment from "./Comment";

const Comments = ({ postId }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			const comments = await axios.get(`/posts/${postId}/comments`);
			setComments(comments);
		};

		fetchComments().catch((e) => {
			console.log(e);
		});
	}, [postId]);

	const commentEls = comments.map((comment) => <Comment {...comment} />);

	return <div className={classes.comments}>{commentEls}</div>;
};

export default Comments;
