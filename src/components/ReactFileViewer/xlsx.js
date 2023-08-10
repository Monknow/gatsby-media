import * as React from "react";
import {CodeBlock} from "../CodeBlock";
import FileViewer from "react-file-viewer";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import FileViewer from "react-file-viewer";

export const XLSXReactFileViewer = () => {
	return (
        <FileViewer fileType="cvs" filePath="/sample.cvs" />
    />
	);
};`;

export const XLSXReactFileViewer = () => {
	return (
		<section>
			<h2>
				Viewing several files with <code>react-file-viewer</code>
			</h2>
			<div className="editor">
				<div className={styles.xlsx}>
					<FileViewer fileType="xlsx" filePath="/sample.xlsx" />
				</div>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
