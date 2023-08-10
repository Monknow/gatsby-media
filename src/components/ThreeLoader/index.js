import * as React from "react";
import {useRef, useEffect} from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

import {CodeBlock} from "@components/CodeBlock";

import * as styles from "./style.module.scss";

const code = `import * as React from "react";
import {useRef, useEffect} from "react";

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

const loadModel = async (scene) => {
	const loader = new GLTFLoader();

	await loader.load(
		"/models/strawberry.gltf",
		function (gltf) {
			gltf.scene.position.set(0, -4, 0);
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
};

const ThreeLoader = () => {
	const viewerRef = useRef(null);

	useEffect(() => {
		const {current: viewer} = viewerRef;

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(75, viewer.clientWidth / viewer.clientHeight, 0.1, 1000);

		const renderer = new THREE.WebGLRenderer();
		
		renderer.setSize(viewer.clientWidth, viewer.clientHeight);

		loadModel(scene);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(0, 0, 5);
		scene.add(directionalLight);

		const target = new THREE.Vector3(-0.5, 1.2, 0);
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target = target;

		viewer.appendChild(renderer.domElement);

		var animate = function () {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();
	}, []);

	return (
		<div ref={viewerRef}></div>
	);
};
`;

const loadModel = async (scene) => {
	const loader = new GLTFLoader();

	await loader.load(
		"/models/strawberry.gltf",
		function (gltf) {
			gltf.scene.position.set(0, -4, 0);
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
};

export const ThreeLoader = () => {
	const viewerRef = useRef(null);

	useEffect(() => {
		const {current: viewer} = viewerRef;

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(75, viewer.clientWidth / viewer.clientHeight, 0.1, 1000);
		camera.position.set(5, 5, 5);

		const renderer = new THREE.WebGLRenderer({alpha: true});
		renderer.setClearColor(0x000000, 0);
		renderer.setSize(viewer.clientWidth, viewer.clientHeight);

		loadModel(scene);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(0, 0, 5);
		scene.add(directionalLight);

		const target = new THREE.Vector3(-0.5, 1.2, 0);
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target = target;

		viewer.appendChild(renderer.domElement);

		var animate = function () {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();
	}, []);

	return (
		<section>
			<h2>
				Loading models using <code>react-three-fiber</code>
			</h2>
			<div className="editor">
				<div ref={viewerRef} className={styles.viewer}></div>
				<CodeBlock language="javascript">{code}</CodeBlock>
			</div>
		</section>
	);
};
