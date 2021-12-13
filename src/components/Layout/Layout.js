import React from "react";

import classes from "./Layout.module.css";
import Header from "./Header/Header";

const Layout = (props) => {
	return (
		<div className={classes.Layout}>
			<Header />
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
