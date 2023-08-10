import * as React from "react";
import Markdown from "markdown-to-jsx";
import {useStaticQuery, graphql} from "gatsby";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import Markdown from "markdown-to-jsx";
import {useStaticQuery, graphql} from "gatsby";

const MarkdownToJSX = () => {
	const {markdownRemark} = useStaticQuery(graphql\`
		query {
			markdownRemark(frontmatter: {title: {eq: "sample-markdown-file"}}) {
				rawMarkdownBody
			}
		}
    \`);

	const {rawMarkdownBody} = markdownRemark;

	return (
		<Markdown>{rawMarkdownBody}</Markdown>
	);
};`;

export const MarkdownToJSX = () => {
	const {markdownRemark} = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: {title: {eq: "sample-markdown-file"}}) {
				rawMarkdownBody
			}
		}
	`);

	const {rawMarkdownBody} = markdownRemark;

	return (
		<section>
			<h2>
				Using <code>markdown-to-jsx</code> package
			</h2>
			<div className="editor">
				<Markdown className={styles.markdown}>{rawMarkdownBody}</Markdown>
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
