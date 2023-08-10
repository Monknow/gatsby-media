import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";
import picture from "@assets/svg/picture.svg";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import picture from "./assets/svg/picture.svg";

const SVGinImg = () => {
	return <img src={picture} alt="Picture" />;
};`;

export const SVGinImg = () => {
	return (
		<section>
			<h2>
				SVG using <code>img</code> tag
			</h2>
			<div className="editor">
				<img src={picture} className={styles.svg} alt="Picture" />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
