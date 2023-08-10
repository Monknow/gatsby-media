import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {Document, Page} from "react-pdf";
import {CodeBlock} from "@components/CodeBlock";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import OpenIcon from "@assets/svg/open.inline.svg";

import * as styles from "./style.module.scss";

import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js";

const code = `import * as React from "react";
import {Document, Page} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js";

const ReactPDF = () => {
	return (
		<Document file="/lorem-ipsum.pdf">
			<Page/>
		</Document>
	);
};`;

export const ReactPDF = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumber, setPageNumber] = useState(null);

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handleNext = () => {
		if (currentPage < pageNumber) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handleLoadSuccess = ({numPages}) => {
		setPageNumber(numPages);
	};

	return (
		<section>
			<h2>
				Displaying a PDF using <code>react-pdf</code>
			</h2>
			<div className="editor">
				<p>The controls have been added externally 😉</p>
				<a href="/lorem-ipsum.pdf" className={styles.openPDF} target="_blank">
					Open PDF
					<OpenIcon />
				</a>
				<Document file="/lorem-ipsum.pdf" onLoadSuccess={handleLoadSuccess} className={styles.document}>
					<Page pageNumber={currentPage} className={styles.page} />
				</Document>

				<ButtonGroup variant="outlined" aria-label="outlined button group">
					<Button
						aria-label="previous"
						onClick={handlePrevious}
						disabled={!(currentPage > 1) || !currentPage}>
						{"<"}
					</Button>
					<p className={styles.currentPage}>{currentPage}</p>
					<Button
						aria-label="next"
						onClick={handleNext}
						disabled={!(currentPage < pageNumber) || !currentPage}>
						{">"}
					</Button>
				</ButtonGroup>

				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
