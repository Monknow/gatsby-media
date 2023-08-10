import * as React from "react";
import {useState} from "react";

import {PDFReactFileViewer} from "./pdf";
import {DOCXReactFileViewer} from "./docx";

import {TabPanel} from "@components/TabPanel";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import {XLSXReactFileViewer} from "./xlsx";

const isBrowser = typeof window !== "undefined";

export const ReactFileViewer = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<section>
			<h2>
				Viewing several files with <code>react-file-viewer</code>
			</h2>

			<div className="editor">
				<Box sx={{width: "100%"}}>
					<Box sx={{borderBottom: 1, borderColor: "divider"}}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="tabs">
							<Tab label="pdf" className="tab" />
							<Tab label="docx" className="tab" />
							<Tab label="cvs" className="tab" />
						</Tabs>
					</Box>
					{isBrowser && (
						<>
							<TabPanel value={value} index={0}>
								<PDFReactFileViewer />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<DOCXReactFileViewer />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<XLSXReactFileViewer />
							</TabPanel>
						</>
					)}
				</Box>
			</div>
		</section>
	);
};
