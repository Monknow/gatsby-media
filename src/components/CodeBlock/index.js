import * as React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

import * as styles from "./style.module.scss";

export const CodeBlock = ({language, children}) => {
	return (
		<SyntaxHighlighter
			className={styles.CodeBlock}
			language={language}
			style={materialDark}
			showLineNumbers
			wrapLongLines
			lineProps={{style: {flexWrap: "wrap"}}}
			customStyle={{fontSize: "0.7rem"}}>
			{children}
		</SyntaxHighlighter>
	);
};
