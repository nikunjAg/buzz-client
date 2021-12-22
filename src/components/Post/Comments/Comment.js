import React from "react";

import classes from "./Comment.module.css";
import Avatar from "../../UI/Avatar/Avatar";
import formatDate from "../../../util/DateFormat";

const Comment = ({ _id, content, postedBy, created_at }) => {
	return (
		<div className={classes.comment}>
			<Avatar className={classes.avatar} src={postedBy.profileImage} />
			<div className={classes.body}>
				<div className={classes.header}>
					<div className={classes.author}>
						<h4>{postedBy.name}</h4>
					</div>
					<p className={classes.postedAt}>{formatDate(created_at)}</p>
				</div>
				<p className={classes.content}>{content}</p>
			</div>
		</div>
	);
};

export default Comment;
