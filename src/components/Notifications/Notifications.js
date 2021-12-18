import React from "react";
import Avatar from "../UI/Avatar/Avatar";

import classes from "./Notifications.module.css";
import profileImage from "../../assets/profile.jpg";
import ProfileCard from "../Home/ShortProfile";
import Card from "../UI/Card/Card";

const Notifications = (props) => {
	return (
		<div className={classes.notifications}>
			<div className={classes.sideCard}>
				<ProfileCard />
			</div>

			<Card className={classes.invitations}>
				<h3>Invitations</h3>
				<ul className={classes.notificationsList}>
					<li
						className={`${classes.notificationItem} ${classes.unread}`}
					>
						<Avatar
							className={classes.avatar}
							src={profileImage}
							alt="Sender Image"
						/>
						<div className={classes.sender}>
							<div className={classes.name}>Nikunj Aggarwal</div>
							<div className={classes.shortBio}>
								Newly Recruit at TTN
							</div>
						</div>
						<div className={classes.actions}>
							<div className={classes.accept}>Accept</div>
							<div className={classes.decline}>Ignore</div>
						</div>
					</li>
					<li className={`${classes.notificationItem}`}>
						<Avatar
							className={classes.avatar}
							src={profileImage}
							alt="Sender Image"
						/>
						<div className={classes.sender}>
							<div className={classes.name}>Nikunj Aggarwal</div>
							<div className={classes.shortBio}>
								Newly Recruit at TTN
							</div>
						</div>
						<div className={classes.actions}>
							<div className={classes.accept}>Accept</div>
							<div className={classes.decline}>Ignore</div>
						</div>
					</li>
				</ul>
			</Card>
		</div>
	);
};

export default Notifications;
