import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Suggestions.module.css";
import Card from "../../UI/Card/Card";
import axios from "../../../axios";
import User from "./User";
import Spinner from "../../UI/Spinner/Spinner";

const Suggestions = (props) => {
	const [suggestions, setSuggestions] = useState([]);
	const [loading, setLoading] = useState(false);

	const userId = useSelector((state) => state.user._id);

	useEffect(() => {
		const fetchSuggestion = async () => {
			setLoading(true);
			const { data } = await axios.get(`/users/${userId}/suggestions`);
			setLoading(false);
			setSuggestions(data.suggestions);
			console.log(data);
		};

		fetchSuggestion().catch((e) => {
			setLoading(false);
			console.log(e);
		});
	}, [userId]);

	if (suggestions.length === 0 && !loading) {
		return (
			<Card className={classes.suggestionsFallback}>
				<p>You do not have any suggestions yet.</p>
			</Card>
		);
	}

	let suggestionsEls = (
		<Card className={classes.suggestions}>
			<h3>Suggestions</h3>
			{loading && <Spinner className={classes.spinner} />}
			{suggestions.map((usr) => (
				<User key={usr._id} {...usr} />
			))}
		</Card>
	);
	return suggestionsEls;
};

export default Suggestions;
