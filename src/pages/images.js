import * as React from "react";
import {ImageHTML} from "@components/ImageHTML";
import {ImageStaticGatsby} from "@components/ImageStaticGatsby";
import {ImageGatsby} from "@components/ImageGatsby";
import {BackgroundImage} from "../components/BackgroundImage";
import {GatsbyBackgroundImage} from "../components/GatsbyBackgroundImage";

const ImagesPage = () => {
	return (
		<main className="images-page">
			<ImageHTML />
			<ImageStaticGatsby />
			<ImageGatsby />
			<BackgroundImage />
			<GatsbyBackgroundImage />
		</main>
	);
};

export default ImagesPage;

export const Head = () => <title>Images. Gatsby Headaches</title>;
