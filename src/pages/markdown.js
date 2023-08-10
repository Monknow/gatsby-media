import * as React from "react";
import {MarkdownExample} from "../components/MarkdownExample";
import {DangerouslySetInnerHTML} from "../components/DangerouslySetInnerHTML";
import {MarkdownReact} from "../components/MarkdownReact";
import {MarkdownToJSX} from "../components/MarkdownToJSX";
import {ReactMDEditor} from "../components/ReactMDEditor";

const MarkdownPage = () => {
	return (
		<main className="images-page">
			<MarkdownExample />
			<DangerouslySetInnerHTML />
			<MarkdownReact />
			<MarkdownToJSX />
			<ReactMDEditor />
		</main>
	);
};

export default MarkdownPage;

export const Head = () => <title>Markdown. Gatsby Headaches</title>;
