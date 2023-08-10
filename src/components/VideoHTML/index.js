import * as React from "react";
import natureMP4 from "@assets/videos/nature.mp4";
import natureWEBM from "@assets/videos/nature.webm";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import natureMP4 from "./assets/videos/nature.mp4";
import natureWEBM from "./assets/videos/nature.webm";

const VideoHTML = () => {
	return (
		<video controls>
			<source src={natureMP4} type="video/mp4" />
			<source src={natureWEBM} type="video/webm" />
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
					<source src={natureMP4} type="video/mp4" />
					<source src={natureWEBM} type="video/webm" />
				</video>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
