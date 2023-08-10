import * as React from "react";
import {CodeBlock} from "@components/CodeBlock";

import {useLoader, Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import {useLoader, Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const ThreeFiberLoader = () => {
	const gltf = useLoader(GLTFLoader, "/models/strawberry.gltf");

	return (
		<Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [5, 5, 5]}}>
			<ambientLight intensity={0.4}/>
			<directionalLight color="white"/>
			<primitive object={gltf.scene}/>
			<OrbitControls makeDefault/>
		</Canvas>
	);
};`;

export const ThreeFiberLoader = () => {
	const gltf = useLoader(GLTFLoader, "/models/strawberry.gltf");

	return (
		<section>
			<h2>
				Loading models using <code>react-three-fiber</code>
			</h2>
			<div className="editor">
				<div className={styles.viewer}>
					<Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [5, 5, 5]}}>
						<ambientLight intensity={0.4} />
						<directionalLight color="white" position={[0, 0, 5]} />
						<primitive object={gltf.scene} position={[0, -4, 0]} />
						<OrbitControls makeDefault />
					</Canvas>
				</div>
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
