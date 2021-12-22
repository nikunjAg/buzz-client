import React from "react";

import classes from "./PostStats.module.css";

const PostStats = ({ likes, dislikes, comments }) => {
	console.log(likes, dislikes);
	return (
		<div className={classes.activities}>
			<div className={classes.leftActivities}>
				<div className={`${classes.likes} ${classes.activity}`}>
					<span className={classes.activityIcon}>
						<span className="material-icons">thumb_up</span>
					</span>
					<span className={classes.activityFrequency}>{likes}</span>
				</div>

				<div className={`${classes.dislikes} ${classes.activity}`}>
					<span className={classes.activityIcon}>
						<span className="material-icons">thumb_down</span>
					</span>
					<span className={classes.activityFrequency}>
						{dislikes}
					</span>
				</div>
			</div>
			<div className={classes.rightActivities}>
				<div className={`${classes.comments} ${classes.activity}`}>
					<span className={classes.activityFrequency}>
						{comments}
					</span>
					&nbsp;comment
				</div>
			</div>
		</div>
	);
};

export default PostStats;
