import * as React from "react";
import {Link} from "gatsby";

const IndexPage = () => {
	return (
		<main className="index">
			<h1>Gatsby Media: A Cheatsheet</h1>
			<p>Check out how to use each media:</p>
			<div className="links">
				<Link to="/images">Images</Link>
				<Link to="/svgs">SVGs</Link>
				<Link to="/videos">Videos</Link>
				<Link to="/documents">Documents</Link>
				<Link to="/markdown">Markdown</Link>
				<Link to="/models">3D Models</Link>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Media. Gatsby Headaches</title>;
