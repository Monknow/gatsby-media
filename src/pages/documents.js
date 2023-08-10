import * as React from "react";
import {ReactPDF} from "../components/ReactPDF";
import {PDFIframe} from "../components/PDFIframe";
// import {ReactFileViewer} from "../components/ReactFileViewer";
import {ReactPDFViewer} from "../components/ReactPDFViewer";

const DocumentsPage = () => {
	return (
		<main className="images-page">
			<ReactPDF />
			<ReactPDFViewer />
			{/* <ReactFileViewer /> */} {/* Fails to load at build time */}
			<PDFIframe />
		</main>
	);
};

export default DocumentsPage;

export const Head = () => <title>Documents. Gatsby Headaches</title>;
