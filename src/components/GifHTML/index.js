import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";
import duckWalking from "@assets/videos/duck-walking.gif";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import duckWalking from "./assets/videos/duck-walking.gif";

const GifHTML = () => {
	return (
			<img src={duckWalking} alt="Duck walking"/>
		);
};`;

export const GifHTML = () => {
	return (
		<section>
			<h2>
				GIF in <code>img</code> tag
			</h2>
			<div className="editor">
				<img src={duckWalking} alt="Duck walking" className={styles.gif} />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
