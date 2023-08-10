import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";

import * as styles from "./style.module.scss";

const codeJSX = `import * as React from "react";

const BackgroundImage = () => {
	return (
        <div className="image"></div>
	);
};
`;
const codeCSS = `.image {
	width: 100%;
	aspect-ratio: 16/9;
	background-image: url("./assets/images/forest.jpg");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}
`;

export const BackgroundImage = () => {
	return (
		<section className="image-html">
			<h2>
				<code>background-image</code> css property
			</h2>

			<div className="editor">
				<div className={styles.image}></div>
				<CodeBlock language="javascript">{codeJSX}</CodeBlock>
				<CodeBlock language="css">{codeCSS}</CodeBlock>
			</div>
		</section>
	);
};
