import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Notifications.module.css";
import Avatar from "../UI/Avatar/Avatar";
import Card from "../UI/Card/Card";
import ProfileCard from "../Home/ShortProfile";
import Spinner from "../UI/Spinner/Spinner";
import {
	fetchNotifications,
	acceptNotification,
	declineNotification,
} from "../../store/actions/notifications.action";

const Notifications = (props) => {
	const { invitations, loading } = useSelector(
		(state) => state.notifications
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (invitations.length === 0) dispatch(fetchNotifications());
	}, [dispatch, invitations.length]);

	const acceptNotificationHandler = (id) => {
		dispatch(acceptNotification(id));
	};
	const declineNotificationHandler = (id) => {
		dispatch(declineNotification(id));
	};

	console.log(invitations);

	const invitationEls = invitations.map((invitation) => {
		const {
			_id: invitationId,
			unread,
			from: { name, profileImage, shortBio },
		} = invitation;
		return (
			<li
				key={invitationId}
				className={`${classes.notificationItem} ${
					unread ? classes.unread : ""
				}`}
			>
				<Avatar
					className={classes.avatar}
					src={profileImage}
					alt="Sender Image"
				/>
				<div className={classes.sender}>
					<div className={classes.name}>{name}</div>
					<div className={classes.shortBio}>
						{shortBio || "Newly recruit at TTN"}
					</div>
				</div>
				<div className={classes.actions}>
					<div
						className={classes.accept}
						onClick={() => acceptNotificationHandler(invitationId)}
					>
						Accept
					</div>
					<div
						className={classes.decline}
						onClick={() => declineNotificationHandler(invitationId)}
					>
						Ignore
					</div>
				</div>
			</li>
		);
	});

	return (
		<div className={classes.notifications}>
			<div className={classes.sideCard}>
				<ProfileCard />
			</div>

			<Card className={classes.invitations}>
				{loading && <Spinner />}
				<h3>Invitations</h3>
				<ul className={classes.notificationsList}>{invitationEls}</ul>
			</Card>
		</div>
	);
};

export default Notifications;
