import * as React from "react";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";

export const IframeHTML = () => {
	return (
        <iframe
        src="https://drive.google.com/file/d/jnuowObjkcLkns_985u4hedn/preview"
        title="PDF Sample"
    />
	);
};`;

export const PDFIframe = () => {
	return (
		<section>
			<h2>Embedded PDF from third party</h2>
			<div className="editor">
				<iframe
					className={styles.iframe}
					src="https://drive.google.com/file/d/1IiRZOGib_0cZQY9RWEDslMksRykEnrmC/preview"
					title="PDF Sample"
				/>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
