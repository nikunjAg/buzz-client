import React from "react";
import Avatar from "../UI/Avatar/Avatar";

import classes from "./Notifications.module.css";
import profileImage from "../../assets/profile.jpg";

const Notifications = (props) => {
	return (
		<div className={classes.notifications}>
			<h1>Notifications</h1>
			<ul className={classes.notificationsList}>
				<li className={`${classes.notificationItem} ${classes.unread}`}>
					<Avatar
						className={classes.avatar}
						src={profileImage}
						alt="Sender Image"
					/>
					<div className={classes.message}>
						Nikunj Aggarwal sent a friend request
					</div>
					<div className={classes.actions}>
						<div className={`${classes.accept} ${classes.action}`}>
							<span class="material-icons-outlined">done</span>
						</div>
						<div className={`${classes.decline} ${classes.action}`}>
							<span class="material-icons-outlined">close</span>
						</div>
					</div>
				</li>
				<li className={classes.notificationItem}>
					<Avatar
						className={classes.avatar}
						src={profileImage}
						alt="Sender Image"
					/>
					<div className={classes.message}>
						Nikunj Aggarwal sent a friend request
					</div>
					<div className={classes.actions}>
						<div className={`${classes.accept} ${classes.action}`}>
							<span class="material-icons-outlined">done</span>
						</div>
						<div className={`${classes.decline} ${classes.action}`}>
							<span class="material-icons-outlined">close</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Notifications;
