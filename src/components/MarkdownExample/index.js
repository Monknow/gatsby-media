import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {CodeBlock} from "../CodeBlock";

export const MarkdownExample = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "lorem-ipsum"}) {
				id
				internal {
					content
				}
			}
		}
	`);

	const {content} = data.file.internal;

	return (
		<section>
			<h2>Markdown file example</h2>
			<div className="editor">
				<CodeBlock language="javascript">{content}</CodeBlock>
			</div>
		</section>
	);
};
