import * as React from "react";
import {useState} from "react";

import {ConstrainedImageGatsby} from "./constrained";
import {FixedImageGatsby} from "./fixed";
import {FullWidthImageGatsby} from "./fullWidth";
import {TabPanel} from "@components/TabPanel";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const ImageGatsby = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<section>
			<h2>
				<code>GatsbyImage</code>
			</h2>
			<div className="editor">
				<Box sx={{width: "100%"}}>
					<Box sx={{borderBottom: 1, borderColor: "divider"}}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="tabs">
							<Tab label="constrained" className="tab" />
							<Tab label="fixed" className="tab" />
							<Tab label="fullWidth" className="tab" />
						</Tabs>
					</Box>

					<TabPanel value={value} index={0}>
						<ConstrainedImageGatsby />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<FixedImageGatsby />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<FullWidthImageGatsby />
					</TabPanel>
				</Box>
			</div>
		</section>
	);
};
