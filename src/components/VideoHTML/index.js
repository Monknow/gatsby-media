import * as React from "react";
import nature from "@assets/videos/nature.mp4";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import nature from "./assets/videos/nature.mp4";

const VideoHTML = () => {
	return (
		<video controls>
			<source src={nature} type="video/mp4" />
		</video>
	);
};`;

export const VideoHTML = () => {
	return (
		<section>
			<h2>
				Video in <code>video</code> tag
			</h2>
			<div className="editor">
				<video controls className={styles.video}>
					<source src={nature} type="video/mp4" />
				</video>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
