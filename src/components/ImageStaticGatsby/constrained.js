import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {CodeBlock} from "../CodeBlock";

const code = `import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const ImageStaticGatsby = () => {
return (
	<StaticImage
	src="./assets/images/forest.jpg"
	placeholder="blurred"
	layout="constrained"
	alt="Forest trail"
/>	);
};`;

export const ConstrainedImageStaticGatsby = () => {
	return (
		<div className="image-panel">
			<StaticImage
				src={`../../assets/images/forest.jpg`}
				placeholder="blurred"
				layout="constrained"
				width={600}
				alt="Forest trail"
			/>
			<CodeBlock language="javascript">{code}</CodeBlock>
		</div>
	);
};
