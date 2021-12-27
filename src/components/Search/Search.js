import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Search.module.css";
import Avatar from "../UI/Avatar/Avatar";
import useHttp from "../../hooks/useHttp";
import { searchUsers } from "../../lib/apis";

const Search = (props) => {
	const [userName, setUserName] = useState("");
	const [isFocussed, setIsFocussed] = useState(false);

	const { data: users, sendRequest: fetchUsers } = useHttp(searchUsers, []);
	const history = useHistory();

	useEffect(() => {
		const timerId = setTimeout(() => {
			fetchUsers({ name: userName });
		}, 700);

		return () => {
			clearTimeout(timerId);
		};
	}, [fetchUsers, userName]);

	const nameChangeHandler = (event) => {
		setUserName(event.target.value);
	};

	const inputFocusHandler = (event) => {
		setIsFocussed(true);
	};

	const inputBlurHandler = (event) => {
		setTimeout(() => {
			setIsFocussed(false);
		}, 200);
	};

	const userSelectedHandler = (userId) => {
		console.log("Hey");
		setIsFocussed(false);
		history.push(`/profile/${userId}`);
	};

	let usersEls;
	if (Array.isArray(users) && users.length > 0 && isFocussed) {
		usersEls = (
			<div
				className={classes.searchResults}
				onFocus={inputFocusHandler}
				onBlur={inputBlurHandler}
			>
				{users.map((user) => (
					<div
						onClick={() => userSelectedHandler(user._id)}
						key={user._id}
						className={classes.result}
					>
						<Avatar
							className={classes.avatar}
							src={user.profileImage}
							alt="Search Result"
						/>
						<p>{user.name}</p>
					</div>
				))}
			</div>
		);
	}

	return (
		<div
			className={`${classes.search} ${props.className || ""}`}
			onFocus={inputFocusHandler}
			onBlur={inputBlurHandler}
		>
			<span className="material-icons-outlined">search</span>
			<input
				placeholder="Search..."
				name="searchBox"
				value={userName}
				onChange={nameChangeHandler}
			/>
			{usersEls}
		</div>
	);
};

export default Search;
