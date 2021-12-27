import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./Friends.module.css";
import useHttp from "../../../hooks/useHttp";
import Card from "../../UI/Card/Card";
import User from "./User";
import Spinner from "../../UI/Spinner/Spinner";
import { fetchFriends } from "../../../lib/apis";

const Friends = (props) => {
	const userId = useSelector((state) => state.user._id);
	const {
		loading,
		data: friends,
		sendRequest: getFriends,
	} = useHttp(fetchFriends, [], true);

	useEffect(() => {
		getFriends({ userId });
	}, [userId, getFriends]);

	if (friends?.length === 0 && !loading) {
		return (
			<Card className={classes.friendsFallback}>
				<p>You do not have any friends yet.</p>
			</Card>
		);
	}

	let friendsEls = (
		<Card className={classes.friends}>
			<h3>Friends</h3>
			{loading && <Spinner className={classes.spinner} />}
			{friends?.map((usr) => (
				<User key={usr._id} {...usr} />
			))}
		</Card>
	);
	return friendsEls;
};

export default Friends;
