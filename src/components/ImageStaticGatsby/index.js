import * as React from "react";
import {useState} from "react";
import {ConstrainedImageStaticGatsby} from "@components/ImageStaticGatsby/constrained.js";
import {FixedImageStaticGatsby} from "@components/ImageStaticGatsby/fixed.js";
import {FullWidthImageStaticGatsby} from "@components/ImageStaticGatsby/fullWidth.js";
import {TabPanel} from "@components/TabPanel";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export const ImageStaticGatsby = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<section>
			<h2>
				<code>StaticImage</code>
			</h2>
			<div className="editor">
				<p>Try resizing the page to see the differences between layout options!</p>
				<Box sx={{width: "100%"}}>
					<Box sx={{borderBottom: 1, borderColor: "divider"}}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="tabs">
							<Tab label="constrained" className="tab" />
							<Tab label="fixed" className="tab" />
							<Tab label="fullWidth" className="tab" />
						</Tabs>
					</Box>

					<TabPanel value={value} index={0}>
						<ConstrainedImageStaticGatsby />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<FixedImageStaticGatsby />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<FullWidthImageStaticGatsby />
					</TabPanel>
				</Box>
			</div>
		</section>
	);
};
