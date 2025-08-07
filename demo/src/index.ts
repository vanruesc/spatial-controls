import {
	ACESFilmicToneMapping,
	AdditiveBlending,
	Box3,
	Box3Helper,
	CubeTexture,
	CubeTextureLoader,
	DoubleSide,
	FogExp2,
	LoadingManager,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PerspectiveCamera,
	PlaneGeometry,
	RepeatWrapping,
	Scene,
	SphereGeometry,
	Spherical,
	SRGBColorSpace,
	Texture,
	TextureLoader,
	Timer,
	Vector3,
	WebGLRenderer
} from "three";

import { ControlMode, PointerBehaviour, SpatialControls } from "spatial-controls";
import { Pane } from "tweakpane";
import { calculateVerticalFoV, getSkyboxUrls } from "./utils/index.js";

function load(): Promise<Map<string, unknown>> {

	const assets = new Map<string, unknown>();
	const loadingManager = new LoadingManager();
	const textureLoader = new TextureLoader(loadingManager);
	const cubeTextureLoader = new CubeTextureLoader(loadingManager);

	return new Promise<Map<string, unknown>>((resolve, reject) => {

		loadingManager.onLoad = () => resolve(assets);
		loadingManager.onError = (url: string) => reject(new Error(`Failed to load ${url}`));

		cubeTextureLoader.load(getSkyboxUrls("space", ".jpg"), (t) => {

			t.colorSpace = SRGBColorSpace;
			assets.set("sky", t);

		});

		textureLoader.load("textures/checkerboard.png", (t) => {

			t.wrapS = t.wrapT = RepeatWrapping;
			t.colorSpace = SRGBColorSpace;
			assets.set("checkerboard", t);

		});

	});

}

window.addEventListener("load", () => void load().then((assets) => {

	document.querySelector(".loading")?.classList.add("hidden");

	// Renderer

	const renderer = new WebGLRenderer({
		powerPreference: "high-performance",
		antialias: true,
		stencil: false,
		depth: true
	});

	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.debug.checkShaderErrors = (window.location.hostname === "localhost");
	renderer.setClearColor(0x000000, 0);

	const container = document.querySelector(".viewport")!;
	container.append(renderer.domElement);

	// Scene

	const scene = new Scene();
	const skyMap = assets.get("sky") as CubeTexture;
	scene.fog = new FogExp2(0x000000, 0.05);
	scene.background = skyMap;

	// Camera & Controls

	const camera = new PerspectiveCamera();
	const { position, quaternion } = camera;
	const controls = new SpatialControls(position, quaternion, renderer.domElement);
	const settings = controls.settings;
	settings.general.mode = ControlMode.THIRD_PERSON;
	settings.pointer.behaviour = PointerBehaviour.DEFAULT;
	settings.zoom.setRange(0.25, 3.0);
	settings.rotation.sensitivity = 2.2;
	settings.rotation.damping = 0.1;
	settings.rotation.minPolarAngle = Number.NEGATIVE_INFINITY;
	settings.rotation.maxPolarAngle = Number.POSITIVE_INFINITY;
	settings.translation.sensitivity = 1;
	settings.translation.damping = 0.1;
	settings.zoom.sensitivity = 0.1;
	settings.zoom.damping = 0.2;

	const box = new Box3();
	box.min.set(-2, 0, -4);
	box.max.set(2, 2, 4);

	const boxHelper = new Box3Helper(box);
	boxHelper.visible = false;
	scene.add(boxHelper);

	const boxConstraint = (p: Vector3) => box.clampPoint(p, p);

	// Objects

	const checkerboardMap = assets.get("checkerboard") as Texture;
	checkerboardMap.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
	checkerboardMap.repeat.set(1000, 1000);

	const ground = new Mesh(
		new PlaneGeometry(1000, 1000, 4, 4),
		new MeshStandardMaterial({
			blending: AdditiveBlending,
			side: DoubleSide,
			transparent: true,
			color: 0xffffff,
			roughness: 0.0,
			metalness: 1.0,
			envMap: skyMap,
			map: checkerboardMap
		})
	);

	ground.rotation.x = -Math.PI * 0.5;

	const sphere = new Mesh(
		new SphereGeometry(0.01, 16, 16),
		new MeshBasicMaterial({ color: 0xff0000 })
	);

	scene.add(ground);
	scene.add(sphere);

	controls.position.set(0, 0.67, 2);
	controls.target = sphere.position;
	controls.target.set(0, 0.5, 1);

	// Settings

	const params = {
		orbitEnabled: false,
		constraintEnabled: false,
		rotation: {
			"min azim. angle": -Math.PI,
			"max azim. angle": Math.PI,
			"min polar angle": -Math.PI,
			"max polar angle": Math.PI
		}
	};

	const timer = new Timer();
	const spherical = new Spherical(1, Math.PI / 2, 0);

	function orbit(timestamp: number) {

		timer.update(timestamp);

		const y = 0.5;
		const s = spherical;
		s.theta -= timer.getDelta() * 0.25;
		s.theta %= Math.PI * 2.0;

		if(controls.settings.general.mode === ControlMode.THIRD_PERSON) {

			controls.target.setFromSpherical(s);
			controls.target.y = y;

		} else {

			controls.position.setFromSpherical(s);
			controls.position.y = y;

		}

	}

	const pane = new Pane({
		title: "Settings",
		container: container.querySelector<HTMLElement>(".tp")!,
		expanded: container.clientWidth >= 800
	});

	let folder = pane.addFolder({ title: "General" });
	folder.addBinding(settings.general, "mode", { options: ControlMode })
		.on("change", (e) => void (sphere.visible = (e.value === ControlMode.THIRD_PERSON)));

	folder = pane.addFolder({ title: "Pointer" });
	folder.addBinding(settings.pointer, "behaviour", { options: PointerBehaviour });

	folder = pane.addFolder({ title: "Sensitivity" });
	folder.addBinding(settings.rotation, "sensitivityX", { label: "rotation X", min: 0.1, max: 3.0, step: 0.01 });
	folder.addBinding(settings.rotation, "sensitivityY", { label: "rotation Y", min: 0.1, max: 3.0, step: 0.01 });
	folder.addBinding(settings.translation, "sensitivity", { label: "translation", min: 0.1, max: 3.0, step: 0.01 });
	folder.addBinding(settings.translation, "boostMultiplier", { min: 0.1, max: 4.0, step: 0.01 });
	folder.addBinding(settings.zoom, "sensitivity", { label: "zoom", min: 0.01, max: 3.0, step: 0.01 });

	folder = pane.addFolder({ title: "Damping" });
	folder.addBinding(settings.rotation, "damping", { label: "rotation", min: 0, max: 1, step: 0.01 });
	folder.addBinding(settings.zoom, "damping", { label: "zoom", min: 0, max: 1, step: 0.01 });
	folder.addBinding(settings.translation, "damping", { label: "translation", min: 0, max: 1, step: 0.01 });

	folder = pane.addFolder({ title: "Rotation", expanded: false });
	folder.addBinding(settings.rotation, "enabled");
	folder.addBinding(settings.rotation, "pivotOffset");

	folder.addBinding(params.rotation, "min azim. angle", { min: -Math.PI, max: 0, step: 1e-3 }).on("change", (e) => {

		const angle = (e.value <= -Math.PI + 1e-3) ? Number.NEGATIVE_INFINITY : e.value;
		settings.rotation.minAzimuthalAngle = angle;

	});

	folder.addBinding(params.rotation, "max azim. angle", { min: 0, max: Math.PI, step: 1e-3 }).on("change", (e) => {

		const angle = (e.value >= Math.PI - 1e-3) ? Number.POSITIVE_INFINITY : e.value;
		settings.rotation.maxAzimuthalAngle = angle;

	});

	folder.addBinding(params.rotation, "min polar angle", { min: -Math.PI, max: 0, step: 1e-3 }).on("change", (e) => {

		const angle = (e.value <= -Math.PI + 1e-3) ? Number.NEGATIVE_INFINITY : e.value;
		settings.rotation.minPolarAngle = angle;

	});

	folder.addBinding(params.rotation, "max polar angle", { min: 0, max: Math.PI, step: 1e-3 }).on("change", (e) => {

		const angle = (e.value >= Math.PI - 1e-3) ? Number.POSITIVE_INFINITY : e.value;
		settings.rotation.maxPolarAngle = angle;

	});

	folder.addBinding(settings.rotation, "invertedX");
	folder.addBinding(settings.rotation, "invertedY");

	folder = pane.addFolder({ title: "Translation", expanded: false });

	folder.addBinding(settings.translation, "enabled").on("change", (e) => {

		if(params.orbitEnabled) {

			// Prevent translation when auto-orbiting.
			settings.translation.enabled = false;

		}

	});

	folder.addBinding(settings.translation, "axisWeights", {
		x: { min: 0, max: 1, step: 1 },
		y: { min: 0, max: 1, step: 1 },
		z: { min: 0, max: 1, step: 1 }
	});

	folder = pane.addFolder({ title: "Zooming", expanded: false });
	folder.addBinding(settings.zoom, "enabled");
	folder.addBinding(settings.zoom, "inverted");
	folder.addBinding(settings.zoom, "minDistance", { min: 0.1, max: 1, step: 0.01 });
	folder.addBinding(settings.zoom, "maxDistance", { min: 1, max: 10, step: 0.01 });

	pane.addButton({ title: "save as JSON" }).on("click", () => {

		const settingsURL = URL.createObjectURL(settings.toBlob());
		const a = document.createElement("a");
		a.setAttribute("href", settingsURL);
		a.setAttribute("download", "spatial-controls.json");
		a.click();
		URL.revokeObjectURL(settingsURL);

	});

	pane.addBinding(params, "orbitEnabled", { label: "orbit" }).on("change", (e) => {

		settings.translation.enabled = !e.value;
		timer.reset();

	});

	pane.addBinding(params, "constraintEnabled", { label: "constrain" }).on("change", (e) => {

		boxHelper.visible = e.value;

		if(e.value) {

			controls.constraints.add(boxConstraint);

		} else {

			controls.constraints.delete(boxConstraint);

		}

	});

	// Debug Keys

	document.addEventListener("keyup", (event: KeyboardEvent) => {

		const p = new Vector3();
		const v = new Vector3();
		const tp = container.querySelector(".tp");

		switch(event.key) {

			case "h":
				event.preventDefault();
				tp?.classList.toggle("hidden");
				break;

			case "c":
				console.log("Camera position", p.copy(controls.position));
				console.log("World direction", controls.getViewDirection(v));
				console.log("Target position", p.clone().add(v));
				break;

			case "i":
				console.log(renderer.info);
				break;

		}

	});

	// Resize Handler

	function onResize() {

		const width = container.clientWidth, height = container.clientHeight;
		camera.aspect = width / height;
		camera.fov = calculateVerticalFoV(90, Math.max(camera.aspect, 16 / 9));
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);

	}

	window.addEventListener("resize", onResize);
	onResize();

	// Render Loop

	renderer.setAnimationLoop((timestamp) => {

		if(params.orbitEnabled) {

			orbit(timestamp);

		}

		controls.update(timestamp);
		renderer.render(scene, camera);

	});

}));
