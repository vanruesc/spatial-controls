import {
	CubeTextureLoader,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	PolarGridHelper,
	SphereBufferGeometry,
	Texture,
	sRGBEncoding,
	Vector3
} from "three";

import { GUI } from "dat.gui";
import { Demo } from "three-demo";
import { ControlMode, PointerBehaviour, SpatialControls } from "../../../src";

/**
 * A Spatial Controls demo.
 */

export class SpatialControlsDemo extends Demo implements EventListenerObject {

	/**
	 * The controls.
	 */

	private controls: SpatialControls;

	/**
	 * A mesh.
	 */

	private mesh: Mesh;

	/**
	 * Constructs a new demo.
	 */

	constructor() {

		super("spatial-controls");

		this.controls = null;
		this.mesh = null;

	}

	handleEvent(event: Event) {

		const controls = this.controls;
		const keyboardEvent = event as KeyboardEvent;

		if(keyboardEvent.key === "c") {

			console.clear();
			console.log("Position", controls.getPosition());
			console.log("Target", controls.getTarget());
			console.log("View direction", controls.getViewDirection(new Vector3()));

		}

	}

	load(): Promise<void> {

		const assets = this.assets;
		const loadingManager = this.loadingManager;
		const cubeTextureLoader = new CubeTextureLoader(loadingManager);

		const path = "textures/skies/space/";
		const format = ".jpg";
		const urls = [
			path + "px" + format, path + "nx" + format,
			path + "py" + format, path + "ny" + format,
			path + "pz" + format, path + "nz" + format
		];

		return new Promise((resolve, reject) => {

			if(assets.size === 0) {

				loadingManager.onError = reject;
				loadingManager.onLoad = resolve;

				cubeTextureLoader.load(urls, (t) => {

					t.encoding = sRGBEncoding;
					assets.set("sky", t);

				});

			} else {

				resolve();

			}

		});

	}

	initialize(): void {

		const scene = this.scene;
		const assets = this.assets;
		const renderer = this.renderer;

		// Sky

		scene.background = assets.get("sky") as Texture;

		// Camera

		const aspect = window.innerWidth / window.innerHeight;
		const camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
		this.camera = camera;

		// Objects

		const mesh = this.mesh = new Mesh(
			new SphereBufferGeometry(0.01, 16, 16),
			new MeshBasicMaterial({ color: 0xff0000 })
		);

		scene.add(new PolarGridHelper(1, 16, 8, 64, 0x444444, 0x888888));
		scene.add(mesh);

		// Controls

		const controls = new SpatialControls(camera.position, camera.quaternion, renderer.domElement);
		const settings = controls.settings;
		settings.general.setMode(ControlMode.THIRD_PERSON);
		settings.pointer.setBehaviour(PointerBehaviour.DEFAULT);
		settings.zoom.setRange(0.25, 3.0);
		settings.rotation.setSensitivity(2.2);
		settings.translation.setSensitivity(0.25);
		settings.zoom.setSensitivity(0.1);
		this.controls = controls;

		controls.setPosition(0, 0.17, 1);
		controls.setTarget(mesh.position);

		document.addEventListener("keydown", this);

	}

	update(deltaTime: number): void {

		this.controls.update(deltaTime);

	}

	registerOptions(menu: GUI): void {

		const settings = this.controls.settings;
		const mesh = this.mesh;

		const params = {
			general: {
				"mode": settings.general.getMode()
			},
			pointer: {
				"behaviour": settings.pointer.getBehaviour()
			},
			sensitivity: {
				"rotation X": settings.rotation.getSensitivityX(),
				"rotation Y": settings.rotation.getSensitivityY(),
				"translation": settings.translation.getSensitivity(),
				"zoom": settings.zoom.getSensitivity()
			},
			rotation: {
				"min azim. angle": settings.rotation.getMinAzimuthalAngle(),
				"max azim. angle": settings.rotation.getMaxAzimuthalAngle(),
				"min polar angle": settings.rotation.getMinPolarAngle(),
				"max polar angle": settings.rotation.getMaxPolarAngle(),
				"inverted X": settings.rotation.isInvertedX(),
				"inverted Y": settings.rotation.isInvertedY()
			},
			translation: {
				"enabled": settings.translation.isEnabled()
			},
			zoom: {
				"enabled": settings.zoom.isEnabled(),
				"inverted": settings.zoom.isInverted(),
				"min distance": settings.zoom.getMinDistance(),
				"max distance": settings.zoom.getMaxDistance()
			}
		};

		let folder = menu.addFolder("General");
		folder.add(params.general, "mode", ControlMode).onChange((value: ControlMode) => {

			mesh.visible = (value === ControlMode.THIRD_PERSON);
			settings.general.setMode(value);

		});

		folder.open();

		folder = menu.addFolder("Pointer");
		folder.add(params.pointer, "behaviour", PointerBehaviour).onChange(value => settings.pointer.setBehaviour(value));
		folder.open();

		folder = menu.addFolder("Sensitivity");
		folder.add(params.sensitivity, "rotation X", 0.1, 3.0, 0.01).onChange(value => settings.rotation.setSensitivityX(value));
		folder.add(params.sensitivity, "rotation Y", 0.1, 3.0, 0.01).onChange(value => settings.rotation.setSensitivityY(value));
		folder.add(params.sensitivity, "translation", 0.1, 2.0, 0.01).onChange(value => settings.translation.setSensitivity(value));
		folder.add(params.sensitivity, "zoom", 0.01, 3.0, 0.01).onChange(value => settings.zoom.setSensitivity(value));
		folder.open();

		folder = menu.addFolder("Rotation");
		folder.add(params.rotation, "min azim. angle", -Math.PI, 0.0, 0.0001).onChange((value: number) => {

			const angle = (value <= -Math.PI + 1e-6) ? Number.NEGATIVE_INFINITY : value;
			params.rotation["min azim. angle"] = angle;
			settings.rotation.setMinAzimuthalAngle(angle);

		});

		folder.add(params.rotation, "max azim. angle", 0.0, Math.PI, 0.0001).onChange((value: number) => {

			const angle = (value >= Math.PI - 1e-6) ? Number.POSITIVE_INFINITY : value;
			params.rotation["max azim. angle"] = angle;
			settings.rotation.setMaxAzimuthalAngle(angle);

		});

		folder.add(params.rotation, "min polar angle", 0.0, Math.PI, 0.0001).onChange(value => settings.rotation.setMinPolarAngle(value));
		folder.add(params.rotation, "max polar angle", 0.0, Math.PI, 0.0001).onChange(value => settings.rotation.setMaxPolarAngle(value));
		folder.add(params.rotation, "inverted X").onChange(value => settings.rotation.setInvertedX(value));
		folder.add(params.rotation, "inverted Y").onChange(value => settings.rotation.setInvertedY(value));

		folder = menu.addFolder("Translation");
		folder.add(params.translation, "enabled").onChange(value => settings.translation.setEnabled(value));

		folder = menu.addFolder("Zooming");
		folder.add(params.zoom, "enabled").onChange(value => settings.zoom.setEnabled(value));
		folder.add(params.zoom, "inverted").onChange(value => settings.zoom.setInverted(value));
		folder.add(params.zoom, "min distance", 0.1, 1.0, 0.01).onChange(value => settings.zoom.setMinDistance(value));
		folder.add(params.zoom, "max distance", 1.0, 10.0, 0.01).onChange(value => settings.zoom.setMaxDistance(value));

		if(window.innerWidth < 720) {

			menu.close();

		}

	}

	dispose() {

		document.removeEventListener("keydown", this);

	}

}
