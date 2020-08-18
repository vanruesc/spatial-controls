import {
	CubeTextureLoader,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	PolarGridHelper,
	SphereBufferGeometry,
	Texture,
	sRGBEncoding
} from "three";

import { GUI } from "dat.gui";
import { Demo } from "three-demo";
import { SpatialControls } from "../../../src";

/**
 * A Spatial Controls demo.
 */

export class SpatialControlsDemo extends Demo {

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

		super("delta-controls");

		this.controls = null;
		this.mesh = null;

	}

	/**
	 * Loads scene assets.
	 *
	 * @return A promise that resolves when all assets have been loaded.
	 */

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

	/**
	 * Creates the scene.
	 */

	initialize(): void {

		const scene = this.scene;
		const assets = this.assets;
		const renderer = this.renderer;

		// Sky.

		scene.background = assets.get("sky") as Texture;

		// Camera.

		const aspect = window.innerWidth / window.innerHeight;
		const camera = new PerspectiveCamera(50, aspect, 0.1, 1000);
		camera.position.set(4, 1, 4).normalize();
		this.camera = camera;

		// Controls.

		const controls = new SpatialControls(camera.position, camera.quaternion, renderer.domElement);
		controls.lookAt(scene.position);
		controls.settings.zoom.minDistance = 0.25;
		controls.settings.zoom.maxDistance = 3.0;
		controls.settings.sensitivity.rotationX = 2.2;
		controls.settings.sensitivity.rotationY = 2.2;
		controls.settings.sensitivity.translation = 0.25;
		controls.settings.sensitivity.zoom = 0.1;
		controls.settings.pointer.lock = false;
		this.controls = controls;

		// Objects.

		const gridHelper = new PolarGridHelper(1, 16, 8, 64, 0x444444, 0x888888);
		scene.add(gridHelper);

		const mesh = new Mesh(
			new SphereBufferGeometry(0.01, 16, 16),
			new MeshBasicMaterial({ color: 0xff0000 })
		);

		this.mesh = mesh;
		controls.setTarget(mesh.position);
		scene.add(mesh);

	}

	/**
	 * Renders this demo.
	 *
	 * @param deltaTime - The time since the last update in seconds.
	 */

	render(deltaTime: number): void {

		this.controls.update(deltaTime);
		super.render(deltaTime);

	}

	/**
	 * Registers configuration options.
	 *
	 * @param menu - A menu.
	 */

	registerOptions(menu: GUI): void {

		const controls = this.controls;
		const mesh = this.mesh;

		const params = {
			orbit: controls.settings.general.orbit
		};

		let folder;

		folder = menu.addFolder("General");

		folder.add(params, "orbit").onChange(() => {

			mesh.visible = params.orbit;
			controls.setOrbitEnabled(params.orbit);

		});

		folder.open();

		folder = menu.addFolder("Pointer Behaviour");
		folder.add(controls.settings.pointer, "hold");
		folder.add(controls.settings.pointer, "lock");
		folder.open();

		folder = menu.addFolder("Sensitivity");
		folder.add(controls.settings.sensitivity, "rotationX").min(0.1).max(3.0).step(0.01);
		folder.add(controls.settings.sensitivity, "rotationY").min(0.1).max(3.0).step(0.01);
		folder.add(controls.settings.sensitivity, "translation").min(0.1).max(2.0).step(0.01);
		folder.add(controls.settings.sensitivity, "zoom").min(0.01).max(3.0).step(0.01);
		folder.open();

		folder = menu.addFolder("Rotation");

		folder.add(controls.settings.rotation, "minAzimuthalAngle").min(-Math.PI).max(0.0).step(0.0001).onChange(() => {

			if(controls.settings.rotation.minAzimuthalAngle <= -Math.PI + 1e-6) {

				controls.settings.rotation.minAzimuthalAngle = Number.NEGATIVE_INFINITY;

			}

		});

		folder.add(controls.settings.rotation, "maxAzimuthalAngle").min(0.0).max(Math.PI).step(0.0001).onChange(() => {

			if(controls.settings.rotation.maxAzimuthalAngle >= Math.PI - 1e-6) {

				controls.settings.rotation.maxAzimuthalAngle = Number.POSITIVE_INFINITY;

			}

		});

		folder.add(controls.settings.rotation, "minPolarAngle").min(0.0).max(Math.PI).step(0.0001);
		folder.add(controls.settings.rotation, "maxPolarAngle").min(0.0).max(Math.PI).step(0.0001);
		folder.add(controls.settings.rotation, "invertX");
		folder.add(controls.settings.rotation, "invertY");

		folder = menu.addFolder("Translation");
		folder.add(controls.settings.translation, "enabled");

		folder = menu.addFolder("Zooming");
		folder.add(controls.settings.zoom, "enabled");
		folder.add(controls.settings.zoom, "invert");
		folder.add(controls.settings.zoom, "minDistance").min(0.1).max(1.0).step(0.01);
		folder.add(controls.settings.zoom, "maxDistance").min(1.0).max(10.0).step(0.01);

	}

}
