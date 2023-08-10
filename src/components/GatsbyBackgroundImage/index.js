import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from "gatsby-background-image";
import {CodeBlock} from "../CodeBlock";

import * as style from "./style.module.scss";

const code = `import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from "gatsby-background-image";

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
        <BackgroundImage
            Tag="div"
            fluid={image}>
        </BackgroundImage>
	);
};`;

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
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
