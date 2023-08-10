import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {CodeBlock} from "../CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";

const DangerouslySetInnerHTML = () => {
	const {markdownRemark} = useStaticQuery(graphql\`
		query {
			markdownRemark(frontmatter: {title: {eq: "sample-markdown-file"}}) {
				html
			}
		}
    \`);

	const markup = {__html: markdownRemark.html};

	return (
        <div dangerouslySetInnerHTML={markup}></div>
	);
};`;

export const DangerouslySetInnerHTML = () => {
	const {markdownRemark} = useStaticQuery(graphql`
		query {
			markdownRemark(frontmatter: {title: {eq: "sample-markdown-file"}}) {
				html
			}
		}
	`);

	const markup = {__html: markdownRemark.html};

	return (
		<section>
			<h2>
				Using <code>dangerouslySetInnerHTML</code> property
			</h2>
			<div className="editor">
				<div dangerouslySetInnerHTML={markup} className={styles.markdown}></div>
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
