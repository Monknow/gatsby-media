import * as React from "react";
import {VideoHTML} from "@components/VideoHTML";
import {GifHTML} from "@components/GifHTML";
import {VideoIframe} from "@components/VideoIframe";
import {AudioHTML} from "../components/AudioHTML";

const ImagesPage = () => {
	return (
		<main className="images-page">
			<VideoHTML />
			<AudioHTML />
			<GifHTML />
			<VideoIframe />
		</main>
	);
};

export default ImagesPage;

export const Head = () => <title>Videos. Gatsby Headaches</title>;
