import * as React from "react";
import "./style.scss";
import "@assets/fonts/fonts.css";
import {Navigation} from "@components/Navigation";

export const Layout = ({children}) => {
	return (
		<div>
			<Navigation />
			{children}
		</div>
	);
};
