import * as React from "react";
import {SVGinImg} from "../components/SVGinImg";
import {GatsbyPluginReactSVG} from "../components/GatsbyPluginReactSVG";
import {SVGInline} from "../components/SVGInline";
import {SVGReact} from "../components/SVGReact";

const SVGsPage = () => {
	return (
		<main className="images-page svg-page">
			<SVGInline />
			<SVGinImg />
			<SVGReact />
			<GatsbyPluginReactSVG />
		</main>
	);
};

export default SVGsPage;

export const Head = () => <title>SVGs. Gatsby Headaches</title>;
