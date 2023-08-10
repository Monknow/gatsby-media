import * as React from "react";
import "./style.scss";
import "@assets/fonts/fonts.css";
import {NavBar} from "../NavBar";

export const Layout = ({children}) => {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
};
