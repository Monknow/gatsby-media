import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";
import Book from "@assets/svg/book.inline.svg";

const code = `import * as React from "react";
import Book from "./assets/svg/book.inline.svg";

const GatsbyPluginReactSVG = () => {
	return (
        <Book/>
    );
};`;

export const GatsbyPluginReactSVG = () => {
	return (
		<section>
			<h2>
				SVG imported as React Component using <code>gatsby-plugin-react-svg</code>
			</h2>
			<div className="editor">
				<Book />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
