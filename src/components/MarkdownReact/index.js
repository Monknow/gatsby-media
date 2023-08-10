import * as React from "react";
import ReactMarkdown from "react-markdown";
import {useStaticQuery, graphql} from "gatsby";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import ReactMarkdown from "react-markdown";
import {useStaticQuery, graphql} from "gatsby";

const MarkdownReact = () => {
	const {markdownRemark} = useStaticQuery(graphql\`
		query {
			markdownRemark(frontmatter: {title: {eq: "sample-markdown-file"}}) {
				rawMarkdownBody
			}
		}
    \`);

	const {rawMarkdownBody} = markdownRemark;

	return (
		<ReactMarkdown children={rawMarkdownBody} />
	);
};`;

export const MarkdownReact = () => {
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
				Using <code>react-markdown</code> package
			</h2>
			<div className="editor">
				<ReactMarkdown children={rawMarkdownBody} className={styles.markdown} />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
