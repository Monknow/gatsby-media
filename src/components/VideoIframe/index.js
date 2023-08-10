import * as React from "react";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";

const VideoIframe = () => {
	return (
        <iframe
        src="https://www.youtube.com/embed/jNQXAC9IVRw"
        title="Me at the Zoo"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
	);
};`;

export const VideoIframe = () => {
	return (
		<section>
			<h2>Embedded video from third party</h2>
			<div className="editor">
				<iframe
					className={styles.iframe}
					src="https://www.youtube.com/embed/jNQXAC9IVRw"
					title="Me at the Zoo"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
