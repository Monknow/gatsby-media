import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";
import Picture from "@assets/svg/picture.svg";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import PictureIcon from "./assets/svg/picture.svg";

const SVGinImg = () => {
	return (
		<img src={PictureIcon} alt="Picture icon"/>
	);
};`;

export const SVGinImg = () => {
	return (
		<section>
			<h2>
				SVG using <code>img</code> tag
			</h2>
			<div className="editor">
				<img src={Picture} className={styles.svg} alt="Picture icon" />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
