import React from "react";

import classes from "./Home.module.css";
import ProfileCard from "./ProfileCard";
import Search from "./Search";
import Friends from "./Friends";
import Suggestions from "./Suggestions";
import Feed from "./Feed/Feed";

const Home = (props) => {
	return (
		<div className={classes.Home}>
			<div className={classes.Left}>
				<ProfileCard />
			</div>
			<div className={classes.Main}>
				<Search />
				<Feed />
			</div>
			<div className={classes.Right}>
				<Friends />
				<Suggestions />
			</div>
		</div>
	);
};

export default Home;
