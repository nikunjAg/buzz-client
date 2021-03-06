import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import classes from "./Profile.module.css";
import Card from "../UI/Card/Card";
import Spinner from "../UI/Spinner/Spinner";
import useHttp from "../../hooks/useHttp";
import { fetchProfile } from "../../store/actions/profile.action";
import { updateUser } from "../../store/actions/user.action";
import { sendFriendRequest as sendFriendRequestAPI } from "../../lib/apis";

const Profile = () => {
	const { userId, friends, pendingRequests } = useSelector(
		(state) => state.user
	);
	const { profileData, loading, error } = useSelector(
		(state) => state.profile
	);

	const { id: profileId } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const { sendRequest: sendFriendRequest } = useHttp(
		sendFriendRequestAPI,
		null
	);

	useEffect(() => {
		dispatch(fetchProfile(profileId));
	}, [dispatch, profileId]);

	const editProfileHandler = () => {
		console.log("Edit Profile Handler");
		history.push(`/profile/${profileId}/edit`);
	};

	const sendFriendRequestHandler = () => {
		sendFriendRequest({ sendToUserId: profileId }, (user) => {
			dispatch(updateUser(user));
		});
	};

	// Default Content -> No such profile exists
	let profileContent = (
		<div className={classes.profileFallback}>
			<p>Unable to find any such profile.</p>
			<small>Try again later.</small>
		</div>
	);

	// If still fetching profile data -> Loading
	if (loading) {
		profileContent = (
			<div className={classes.profileFallback}>
				<Spinner />
			</div>
		);
	}

	// If some error occurred while fetching -> Error
	if (error) {
		profileContent = (
			<div className={classes.profileFallback}>
				<p>{error}</p>
			</div>
		);
	}

	// Profile fetched Successfully -> Success
	if (profileData) {
		const { name, profileImage, coverImage, friendsCount } = profileData;

		const isMyProfile = userId === profileId;
		const isMyFriend = friends.includes(profileId);
		const hasSentRequest = pendingRequests.includes(profileId);

		profileContent = (
			<Fragment>
				<div className={classes.coverImage}></div>

				<div className={classes.userDetails}>
					{isMyProfile && (
						<div
							className={classes.editProfile}
							onClick={editProfileHandler}
						>
							<span className="material-icons-outlined">
								edit
							</span>
						</div>
					)}
					<div
						className={classes.profileImage}
						style={{
							backgroundImage:
								coverImage || `url(${profileImage})`,
						}}
					></div>
					<h4 className={classes.name}>{name}</h4>
					<p className={classes.shortBio}>Newly recruited at TTN</p>
					<p className={classes.friends}>
						{friendsCount || 0} Friends
					</p>
				</div>
				{!isMyFriend && (
					<div className={classes.userActions}>
						<button
							disabled={hasSentRequest}
							onClick={sendFriendRequestHandler}
						>
							<span className="material-icons-outlined">
								person_add
							</span>{" "}
							{hasSentRequest ? "Request Pending" : "Add Friend"}
						</button>
					</div>
				)}
			</Fragment>
		);
	}

	return <Card className={classes.profile}>{profileContent}</Card>;
};

export default Profile;
