import React from "react";

import classes from "./ProfileCard.module.css";
import Card from "../UI/Card/Card";
import UserImage from "../../assets/profile.jpg";

const ProfileCard = () => {
	return (
		<Card className={classes.ProfileCard}>
			<div
				className={classes.ProfileBackground}
				style={{
					backgroundImage:
						"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvKskqKCJDsNXJIIsbWHrnx0wfGXnpiHOQ&usqp=CAU)",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></div>
			<div className={classes.ProfileImage}>
				<img src={UserImage} alt="sa" />
			</div>
			<div className={classes.ProfileData}>
				<h3>Nikunj Aggarwal</h3>
				<p>Newly Recruit at TTN</p>

				<div className={classes.PostsCount}>
					<span className={classes.Count}>10</span>
					<span>Post</span>
				</div>
			</div>
		</Card>
	);
};

export default ProfileCard;
