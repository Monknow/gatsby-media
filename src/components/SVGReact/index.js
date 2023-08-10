import * as React from "react";
import {ReactSVG} from "react-svg";
import {CodeBlock} from "@components/CodeBlock";
import camera from "@assets/svg/camera.svg";

const code = `import * as React from "react";
import {ReactSVG} from "react-svg";
import camera from "./assets/svg/camera.svg";

const SVGReact = () => {
	return <ReactSVG src={camera} />;
};`;

export const SVGReact = () => {
	return (
		<section>
			<h2>
				SVG imported as React Component using <code>react-svg</code>
			</h2>
			<div className="editor">
				<ReactSVG src={camera} />
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
