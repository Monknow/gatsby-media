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
					gatsbyImageData(placeholder: BLURRED, layout: FULLWIDTH)
				}
				name
			}
		}
		\`);

	const image = getImage(data.file);

	return (
		<GatsbyImage image={image} alt={data.file.name} />
	);
};
`;

export const FullWidthImageGatsby = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "forest"}) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
