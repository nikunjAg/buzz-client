import React from "react";
import Avatar from "../../UI/Avatar/Avatar";

import classes from "./Post.module.css";
import profileImage from "../../../assets/profile.jpg";
import formatDate from "../../../util/DateFormat";
import Card from "../../UI/Card/Card";

const Post = (props) => {
	return (
		<Card className={classes.Post}>
			<div className={classes.Header}>
				<Avatar
					className={classes.Avatar}
					src={profileImage}
					alt="Post Author"
				/>
				<div className={classes.Author}>
					<h4>Nikunj Aggarwal</h4>
					<p>{formatDate()}</p>
				</div>
				<div className={classes.More}>
					<span className="material-icons-outlined">more_horiz</span>
				</div>
			</div>
			<div className={classes.Content}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Excepturi consectetur quaerat neque impedit animi.
			</div>
		</Card>
	);
};

export default Post;
