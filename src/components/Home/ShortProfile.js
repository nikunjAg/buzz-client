import React from "react";

import classes from "./ShortProfile.module.css";
import Card from "../UI/Card/Card";
import userImage from "../../assets/profile.jpg";
import Avatar from "../UI/Avatar/Avatar";

const ProfileCard = () => {
	return (
		<Card className={classes.shortProfile}>
			<div
				className={classes.profileBackground}
				style={{
					background:
						"center / cover no-repeat url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvKskqKCJDsNXJIIsbWHrnx0wfGXnpiHOQ&usqp=CAU)",
				}}
			></div>
			<Avatar
				className={classes.avatar}
				src={userImage}
				alt="User Image1"
			/>
			<div className={classes.profileData}>
				<h3>Nikunj Aggarwal</h3>
				<p>Newly Recruit at TTN</p>

				<div className={classes.postsCount}>
					<span className={classes.count}>10</span>
					<span>Post</span>
				</div>
			</div>
		</Card>
	);
};

export default ProfileCard;
