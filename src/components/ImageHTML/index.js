import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";
import forest from "@assets/images/forest.jpg";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";

const ImageHTML = () => {
	return (
		<img src="./assets/images/forest.jpg" />
	);
};`;

export const ImageHTML = () => {
	return (
		<section className="image-html">
			<h2>
				<code>img</code> tag
			</h2>

			<div className="editor">
				<img src={forest} className={styles.img} />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
