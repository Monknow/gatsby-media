import * as React from "react";
import {CodeBlock} from "../CodeBlock";
import {Worker} from "@react-pdf-viewer/core";

// Core viewer
import {Viewer} from "@react-pdf-viewer/core";

// Plugins
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import {Viewer} from "@react-pdf-viewer/core";

import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export const ReactPDFViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
        <>
        	<Viewer fileUrl="/lorem-ipsum.pdf" plugins={[defaultLayoutPluginInstance]} />
        	<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
        </>
	);
};`;

// Create new plugin instance

export const ReactPDFViewer = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<section>
			<h2>
				Viewing several files with <code>react-pdf-viewer</code>
			</h2>
			<div className="editor">
				<div className={styles.viewer}>
					<Viewer fileUrl="/lorem-ipsum.pdf" plugins={[defaultLayoutPluginInstance]} />
				</div>
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
				<CodeBlock language="jsx">{code}</CodeBlock>
			</div>
		</section>
	);
};
