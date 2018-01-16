import {
	AxesHelper,
	CubeTextureLoader,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	SphereBufferGeometry
} from "three";

import { Demo } from "three-demo";
import { DeltaControls } from "../../../src";

/**
 * A Delta Controls demo.
 */

export class DeltaControlsDemo extends Demo {

	/**
	 * Constructs a new demo.
	 */

	constructor() {

		super("delta-controls");

		/**
		 * A mesh.
		 *
		 * @type {Mesh}
		 * @private
		 */

		this.mesh = null;

	}

	/**
	 * Loads scene assets.
	 *
	 * @return {Promise} A promise that will be fulfilled as soon as all assets have been loaded.
	 */

	load() {

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
				loadingManager.onProgress = (item, loaded, total) => {

					if(loaded === total) {

						resolve();

					}

				};

				cubeTextureLoader.load(urls, function(textureCube) {

					assets.set("sky", textureCube);

				});

			} else {

				resolve();

			}

		});

	}

	/**
	 * Creates the scene.
	 */

	initialize() {

		const scene = this.scene;
		const assets = this.assets;
		const renderer = this.composer.renderer;

		// Sky.

		scene.background = assets.get("sky");

		// Camera.

		const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 2000);
		camera.position.set(4, 1, 4).normalize();
		this.camera = camera;

		// Controls.

		const controls = new DeltaControls(camera.position, camera.quaternion, renderer.domElement);
		controls.lookAt(scene.position);
		controls.settings.zoom.minDistance = 0.25;
		controls.settings.zoom.maxDistance = 3.0;
		this.controls = controls;

		// Objects.

		const axesHelper = new AxesHelper();
		axesHelper.scale.set(0.1, 0.1, 0.1);
		scene.add(axesHelper);

		const mesh = new Mesh(
			new SphereBufferGeometry(0.05, 16, 16),
			new MeshBasicMaterial({
				transparent: true,
				wireframe: true,
				opacity: 0.35,
				color: 0xff9600,
				fog: false
			})
		);

		this.mesh = mesh;
		controls.setTarget(mesh.position);
		scene.add(mesh);

	}

	/**
	 * Updates this demo.
	 *
	 * @param {Number} delta - The time since the last frame in seconds.
	 */

	update(delta) {

		this.controls.update(delta);

	}

	/**
	 * Registers configuration options.
	 *
	 * @param {GUI} menu - A menu.
	 */

	registerOptions(menu) {

		const controls = this.controls;
		const mesh = this.mesh;

		const params = {
			orbit: controls.settings.general.orbit
		};

		let folder = menu.addFolder("General");
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
		folder.add(controls.settings.sensitivity, "rotation").min(0.0001).max(0.01).step(0.0001);
		folder.add(controls.settings.sensitivity, "translation").min(0.01).max(5.0).step(0.01);
		folder.add(controls.settings.sensitivity, "zoom").min(0.001).max(1.0).step(0.001);
		folder.open();

		folder = menu.addFolder("Rotation");
		folder.add(controls.settings.rotation, "minAzimuthalAngle").min(-Math.PI).max(Math.PI).step(0.0001);
		folder.add(controls.settings.rotation, "maxAzimuthalAngle").min(-Math.PI).max(Math.PI).step(0.0001);
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
