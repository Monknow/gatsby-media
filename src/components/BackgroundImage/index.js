import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";

import * as styles from "./style.module.scss";

const codeJSX = `import * as React from "react";
import "./style.css";

const ImageBackground = () => {
	return <div className="banner"></div>;
};
`;
const codeCSS = `/* style.css */

.banner {
	background-image: url("./assets/images/forest-800.jpg");

	aspect-ratio: 16/9;

	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

@media (max-width: 500px) {
	.banner {
		background-image: url("./assets/images/forest-400.jpg");
	}
}`;

export const BackgroundImage = () => {
	return (
		<section className="image-html">
			<h2>
				<code>background-image</code> css property
			</h2>

			<div className="editor">
				<div className={styles.banner}></div>
				<h3>JSX</h3>
				<CodeBlock language="javascript">{codeJSX}</CodeBlock>
				<h3>CSS</h3>
				<CodeBlock language="css">{codeCSS}</CodeBlock>
			</div>
		</section>
	);
};
