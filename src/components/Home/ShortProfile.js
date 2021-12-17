import React from "react";
import { useSelector } from "react-redux";

import classes from "./ShortProfile.module.css";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";

const ProfileCard = () => {
	const { name, shortBio, profileImage, coverImage, postsCount } =
		useSelector((state) => state.user);

	return (
		<Card className={classes.shortProfile}>
			<div
				className={classes.profileBackground}
				style={{
					background: `center / cover no-repeat url(${
						coverImage ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvKskqKCJDsNXJIIsbWHrnx0wfGXnpiHOQ&usqp=CAU"
					})`,
				}}
			></div>
			<Avatar
				className={classes.avatar}
				src={profileImage}
				alt="User Image1"
			/>
			<div className={classes.profileData}>
				<h3>{name}</h3>
				<p>{shortBio || "Newly Recruit at TTN"}</p>

				<div className={classes.postsCount}>
					<span className={classes.count}>{postsCount}</span>
					<span>Post</span>
				</div>
			</div>
		</Card>
	);
};

export default ProfileCard;
