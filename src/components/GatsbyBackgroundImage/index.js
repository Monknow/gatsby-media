import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {CodeBlock} from "../CodeBlock";

import * as style from "./style.module.scss";

const codeJSX = `import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from "gatsby-background-image";

import "./style.css";

export const GatsbyBackgroundImage = () => {
	const data = useStaticQuery(graphql\`
		query {
			file(name: {eq: "forest"}) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 4160) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
    \`);

	const image = data.file.childImageSharp.fluid;

	return (
		return <BackgroundImage className="background-image" fluid={image}></BackgroundImage>;
	);
};`;

const codeCSS = `/* style.css */

.background-image {
	aspect-ratio: 16/9;
}`;

export const GatsbyBackgroundImage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "forest"}) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 4160) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
				name
			}
		}
	`);

	const image = data.file.childImageSharp.fluid;

	return (
		<section className="image-panel">
			<h2>
				Using <code>gatsby-background-image</code> plugin
			</h2>
			<div className="editor">
				<BackgroundImage Tag="div" className={style.backgroundImage} fluid={image}></BackgroundImage>
				<h3>JSX</h3>
				<CodeBlock language="jsx">{codeJSX}</CodeBlock>
				<h3>CSS</h3>
				<CodeBlock language="css">{codeCSS}</CodeBlock>
			</div>
		</section>
	);
};
