import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card/Card";

import classes from "./Profile.module.css";

const Profile = () => {
	const { name, profileImage, friends } = useSelector((state) => state.user);

	const editProfileHandler = () => {
		console.log("Edit Profile Handler");
	};

	return (
		<Card className={classes.profile}>
			<div className={classes.coverImage}></div>

			<div className={classes.userDetails}>
				<div
					className={classes.editProfile}
					onClick={editProfileHandler}
				>
					<span className="material-icons-outlined">edit</span>
				</div>
				<div
					className={classes.profileImage}
					style={{ backgroundImage: `url(${profileImage})` }}
				></div>
				<h4 className={classes.name}>{name}</h4>
				<p className={classes.shortBio}>Newly recruited at TTN</p>
				<p className={classes.friends}>
					{friends?.length || 0} Friends
				</p>
			</div>
			<div className={classes.userActions}>
				<button>
					<span className="material-icons-outlined">person_add</span>{" "}
					Add Friend
				</button>
			</div>
		</Card>
	);
};

export default Profile;
