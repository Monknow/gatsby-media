import * as React from "react";
import {ThreeFiberLoader} from "../components/ThreeFiberLoader";
import {ThreeLoader} from "../components/ThreeLoader";
import {useHasWindow} from "../hooks/useHasWindow";

const ModelsPage = () => {
	const isWindow = useHasWindow();

	return (
		<main className="images-page">
			{isWindow && (
				<>
					<ThreeLoader />
					<ThreeFiberLoader />
				</>
			)}
		</main>
	);
};

export default ModelsPage;

export const Head = () => <title>3D Models. Gatsby Headaches</title>;
