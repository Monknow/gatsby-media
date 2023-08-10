import * as React from "react";
import audioSampleMP3 from "@assets/audio/sample.mp3";
import audioSampleWAV from "@assets/audio/sample.wav";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import audioSampleMP3 from "./assets/audio/sample.mp3";
import audioSampleWAV from "./assets/audio/sample.wav";

const AudioHTML = () => {
	return (
		<audio controls>
			<source src={audioSampleMP3} type="audio/mp3" />
			<source src={audioSampleWAV} type="audio/wav" />
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
					<source src={audioSampleMP3} type="audio/mp3" />
					<source src={audioSampleWAV} type="audio/wav" />
				</audio>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
