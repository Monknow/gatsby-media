import * as React from "react";
import {CodeBlock} from "../CodeBlock";
import FileViewer from "react-file-viewer";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import FileViewer from "react-file-viewer";

export const PDFReactFileViewer = () => {
	return (
        <FileViewer fileType="pdf" filePath="/lorem-ipsum.pdf" />
    />
	);
};`;

export const PDFReactFileViewer = () => {
	return (
		<section>
			<h2>
				Viewing several files with <code>react-file-viewer</code>
			</h2>
			<div className="editor">
				<div className={styles.pdf}>
					<FileViewer fileType="pdf" filePath="/lorem-ipsum.pdf" />
				</div>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
