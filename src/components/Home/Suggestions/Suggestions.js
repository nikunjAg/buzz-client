import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Suggestions.module.css";
import Card from "../../UI/Card/Card";
import axios from "../../../axios";
import User from "./User";
import Spinner from "../../UI/Spinner/Spinner";
import useHttp from "../../../hooks/useHttp";
import { fetchSuggestions } from "../../../lib/apis";

const Suggestions = (props) => {
	// const [suggestions, setSuggestions] = useState([]);
	// const [loading, setLoading] = useState(false);

	const userId = useSelector((state) => state.user._id);
	const {
		loading,
		data: suggestions,
		sendRequest: getSuggestions,
	} = useHttp(fetchSuggestions, [], true);

	useEffect(() => {
		getSuggestions(userId);
	}, [userId, getSuggestions]);

	if (suggestions?.length === 0 && !loading) {
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
			{suggestions?.map((usr) => (
				<User key={usr._id} {...usr} />
			))}
		</Card>
	);
	return suggestionsEls;
};

export default Suggestions;
