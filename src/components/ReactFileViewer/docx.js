import * as React from "react";
import {CodeBlock} from "../CodeBlock";
import FileViewer from "react-file-viewer";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import FileViewer from "react-file-viewer";

export const DOCXReactFileViewer = () => {
	return (
        <FileViewer fileType="docx" filePath="/lorem-ipsum.docx" />
    />
	);
};`;

export const DOCXReactFileViewer = () => {
	return (
		<section>
			<h2>
				Viewing several files with <code>react-file-viewer</code>
			</h2>
			<div className="editor">
				<div className={styles.docx}>
					<FileViewer fileType="docx" filePath="/lorem-ipsum.docx" />
				</div>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
