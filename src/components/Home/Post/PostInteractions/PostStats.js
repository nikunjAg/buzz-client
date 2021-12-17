import React from "react";

import classes from "./PostStats.module.css";

const PostStats = (props) => {
	return (
		<div className={classes.activities}>
			<div className={classes.leftActivities}>
				<div className={`${classes.likes} ${classes.activity}`}>
					<span className={classes.activityIcon}>
						<span className="material-icons">thumb_up</span>
					</span>
					<span className={classes.activityFrequency}>13</span>
				</div>

				<div className={`${classes.dislikes} ${classes.activity}`}>
					<span className={classes.activityIcon}>
						<span className="material-icons">thumb_down</span>
					</span>
					<span className={classes.activityFrequency}>2</span>
				</div>
			</div>
			<div className={classes.rightActivities}>
				<div className={`${classes.comments} ${classes.activity}`}>
					<span className={classes.activityFrequency}>1</span>
					&nbsp;comment
				</div>
			</div>
		</div>
	);
};

export default PostStats;
