import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Friends.module.css";
import Card from "../../UI/Card/Card";
import axios from "../../../axios";
import User from "./User";
import Spinner from "../../UI/Spinner/Spinner";

const Friends = (props) => {
	const [friends, setFriends] = useState([]);
	const [loading, setLoading] = useState(false);

	const userId = useSelector((state) => state.user._id);

	useEffect(() => {
		const fetchSuggestion = async () => {
			setLoading(true);
			const { data } = await axios.get(`/users/${userId}/suggestions`);
			setLoading(false);
			setFriends(data.suggestions);
			console.log(data);
		};

		fetchSuggestion().catch((e) => {
			setLoading(false);
			console.log(e);
		});
	}, [userId]);

	if (friends.length === 0) {
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
			{friends.map((usr) => (
				<User key={usr._id} {...usr} />
			))}
		</Card>
	);
	return friendsEls;
};

export default Friends;
