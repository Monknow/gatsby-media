import * as React from "react";
import {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

import * as styles from "./styles.module.scss";
import {CodeBlock} from "../CodeBlock";

const code = `import * as React from "react";
import {useState} from "react";
import MDEditor from "@uiw/react-md-editor";

const ReactMDEditor = () => {
	const [value, setValue] = useState("**Hello world!!!**");

	return (
		<div>
			<MDEditor value={value} onChange={setValue} />
			<MDEditor.Markdown source={value} style={{whiteSpace: "pre-wrap"}} />
		</div>
	);
};`;

export const ReactMDEditor = () => {
	const [value, setValue] = useState("**Hello world!!!**");

	return (
		<section>
			<h2>
				Markdown editor with <code>@uiw/react-md-editor</code>
			</h2>
			<div className="editor">
				<MDEditor value={value} onChange={setValue} className={styles.markdownEditor} />
				<MDEditor.Markdown source={value} style={{whiteSpace: "pre-wrap"}} className={styles.markdownOutput} />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
