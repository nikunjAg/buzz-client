import React from "react";

import classes from "./Home.module.css";
import ShortProfile from "./ShortProfile";
import WritePost from "./WritePost";
import Friends from "./Friends";
import Suggestions from "./Suggestions";
import Feed from "./Feed/Feed";

const Home = (props) => {
	return (
		<div className={classes.home}>
			<div className={classes.left}>
				<ShortProfile />
			</div>
			<div className={classes.main}>
				<WritePost />
				<Feed />
			</div>
			<div className={classes.right}>
				<Friends />
				<Suggestions />
			</div>
		</div>
	);
};

export default Home;
