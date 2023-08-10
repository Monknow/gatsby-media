import * as React from "react";
import audioSample from "@assets/audio/sample.mp3";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import nature from "./assets/audio/sample.mp3";

const AudioHTML = () => {
	return (
		<audio controls>
			<source src={audioSample} type="audio/mp3" />
		</audio>
	);
};`;

export const AudioHTML = () => {
	return (
		<section>
			<h2>
				Audio in <code>audio</code> tag
			</h2>
			<div className="editor">
				<audio id={styles.audio} controls>
					<source src={audioSample} type="audio/mp3" />
				</audio>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
