import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {CodeBlock} from "../CodeBlock";

import "./style.module.scss";

const code = `import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ImageGatsby = () => {
	const data = useStaticQuery(graphql\`
		query {
			file(name: {eq: "forest"}) {
				childImageSharp {
					gatsbyImageData(width: 800, placeholder: BLURRED, layout: FIXED)
				}
				name
			}
		}
		\`);

	const image = getImage(data.file);

	return (
		<GatsbyImage image={image} alt={data.file.name} />
	);
};`;

export const FixedImageGatsby = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "forest"}) {
				childImageSharp {
					gatsbyImageData(width: 800, placeholder: BLURRED, layout: FIXED)
				}
				name
			}
		}
	`);

	const image = getImage(data.file);

	return (
		<div className="image-panel">
			<GatsbyImage image={image} alt={data.file.name} />
			<CodeBlock language="jsx">{code}</CodeBlock>
		</div>
	);
};
