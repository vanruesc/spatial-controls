import {
	CubeTextureLoader,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	PolarGridHelper,
	SphereBufferGeometry,
	Spherical,
	Texture,
	sRGBEncoding,
	Vector3
} from "three";

import { GUI } from "dat.gui";
import { calculateVerticalFoV, Demo } from "three-demo";
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
	 * Spherical coordinates.
	 */

	private spherical: Spherical;

	/**
	 * Indicates whether the mesh should orbit by itself.
	 */

	private orbitEnabled: boolean;

	/**
	 * Constructs a new demo.
	 */

	constructor() {

		super("spatial-controls");

		this.controls = null;
		this.mesh = null;
		this.spherical = null;
		this.orbitEnabled = false;

	}

	handleEvent(event: Event): void {

		const controls = this.controls;
		const keyboardEvent = event as KeyboardEvent;

		if(keyboardEvent.key === "c") {

			console.clear();
			console.log("Position", controls.getPosition());
			console.log("Target", controls.getTarget());
			console.log("View direction", controls.getViewDirection(new Vector3()));

		}

	}

	override load(): Promise<void> {

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

	override initialize(): void {

		const scene = this.scene;
		const assets = this.assets;
		const renderer = this.renderer;

		// Sky

		scene.background = assets.get("sky") as Texture;

		// Camera

		const aspect = window.innerWidth / window.innerHeight;
		const vFoV = calculateVerticalFoV(90, Math.max(aspect, 16 / 9));
		const camera = new PerspectiveCamera(vFoV, aspect, 0.03, 1000);
		this.camera = camera;

		// Objects

		const mesh = this.mesh = new Mesh(
			new SphereBufferGeometry(0.01, 16, 16),
			new MeshBasicMaterial({ color: 0xff0000 })
		);

		scene.add(new PolarGridHelper(1, 16, 8, 64, 0x444444, 0x888888));
		scene.add(mesh);

		const spherical = new Spherical(0.5, Math.PI / 2, 0);
		this.spherical = spherical;

		// Controls

		const { position, quaternion } = camera;
		const domElement = renderer.domElement;

		const controls = new SpatialControls(position, quaternion, domElement);
		const settings = controls.settings;
		settings.general.setMode(ControlMode.THIRD_PERSON);
		settings.pointer.setBehaviour(PointerBehaviour.DEFAULT);
		settings.zoom.setRange(0.25, 3.0);
		settings.rotation.setSensitivity(2.2);
		settings.rotation.setDamping(0.1);
		settings.translation.setSensitivity(0.25);
		settings.translation.setDamping(0.1);
		settings.zoom.setSensitivity(0.1);
		settings.zoom.setDamping(0.2);
		this.controls = controls;

		controls.setPosition(0, 0.17, 1);
		controls.setTarget(mesh.position);

		document.addEventListener("keydown", this);

	}

	override update(deltaTime: number, timestamp: number): void {

		const controls = this.controls;

		if(this.orbitEnabled) {

			const y = 0.075;
			const s = this.spherical;
			s.theta -= deltaTime * 0.25;
			s.theta %= Math.PI * 2.0;

			if(controls.settings.general.getMode() === ControlMode.THIRD_PERSON) {

				controls.getTarget().setFromSpherical(s);
				controls.getTarget().y = y;

			} else {

				controls.getPosition().setFromSpherical(s);
				controls.getPosition().y = y;

			}

		}

		controls.update(timestamp);

	}

	override registerOptions(menu: GUI): void {

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
				"boost multiplier": settings.translation.getBoostMultiplier(),
				"zoom": settings.zoom.getSensitivity()
			},
			damping: {
				"rotation": settings.rotation.getDamping(),
				"zoom": settings.zoom.getDamping(),
				"translation": settings.translation.getDamping()
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
			},
			save: () => {

				const settingsURL = URL.createObjectURL(settings.toBlob());
				const a = document.createElement("a");
				a.setAttribute("href", settingsURL);
				a.setAttribute("download", "spatial-controls.json");
				a.click();
				URL.revokeObjectURL(settingsURL);

			}
		};

		let folder = menu.addFolder("General");
		folder.add(params.general, "mode", ControlMode)
			.onChange((value: ControlMode) => {

				mesh.visible = (value === ControlMode.THIRD_PERSON);
				settings.general.setMode(value);

			});

		folder.open();

		folder = menu.addFolder("Pointer");
		folder.add(params.pointer, "behaviour", PointerBehaviour)
			.onChange(value => settings.pointer.setBehaviour(value));
		folder.open();

		folder = menu.addFolder("Sensitivity");
		folder.add(params.sensitivity, "rotation X", 0.1, 3.0, 0.01)
			.onChange(value => settings.rotation.setSensitivityX(value));
		folder.add(params.sensitivity, "rotation Y", 0.1, 3.0, 0.01)
			.onChange(value => settings.rotation.setSensitivityY(value));
		folder.add(params.sensitivity, "translation", 0.1, 2.0, 0.01)
			.onChange(value => settings.translation.setSensitivity(value));
		folder.add(params.sensitivity, "boost multiplier", 1.0, 4.0, 0.01)
			.onChange(value => settings.translation.setBoostMultiplier(value));
		folder.add(params.sensitivity, "zoom", 0.01, 3.0, 0.01)
			.onChange(value => settings.zoom.setSensitivity(value));
		folder.open();

		folder = menu.addFolder("Damping");
		folder.add(params.damping, "rotation", 0.0, 1.0, 0.01)
			.onChange(value => settings.rotation.setDamping(value));
		folder.add(params.damping, "zoom", 0.0, 1.0, 0.01)
			.onChange(value => settings.zoom.setDamping(value));
		folder.add(params.damping, "translation", 0.0, 1.0, 0.01)
			.onChange(value => settings.translation.setDamping(value));
		folder.open();

		folder = menu.addFolder("Rotation");

		folder.add(params.rotation, "min azim. angle", -Math.PI, 0.0, 1e-3)
			.onChange((value: number) => {

				const angle = (value <= -Math.PI + 1e-3) ?
					Number.NEGATIVE_INFINITY : value;

				params.rotation["min azim. angle"] = angle;
				settings.rotation.setMinAzimuthalAngle(angle);

			});

		folder.add(params.rotation, "max azim. angle", 0.0, Math.PI, 1e-3)
			.onChange((value: number) => {

				const angle = (value >= Math.PI - 1e-3) ?
					Number.POSITIVE_INFINITY : value;

				params.rotation["max azim. angle"] = angle;
				settings.rotation.setMaxAzimuthalAngle(angle);

			});

		folder.add(params.rotation, "min polar angle", -Math.PI, Math.PI, 1e-3)
			.onChange((value: number) => {

				const angle = (value <= -Math.PI + 1e-3) ?
					Number.NEGATIVE_INFINITY : value;

				params.rotation["min polar angle"] = angle;
				settings.rotation.setMinPolarAngle(angle);

			});

		folder.add(params.rotation, "max polar angle", 0.0, Math.PI * 2, 1e-3)
			.onChange((value: number) => {

				const angle = (value >= Math.PI * 2.0 - 1e-3) ?
					Number.POSITIVE_INFINITY : value;

				params.rotation["max polar angle"] = angle;
				settings.rotation.setMaxPolarAngle(angle);

			});

		folder.add(params.rotation, "inverted X")
			.onChange(value => settings.rotation.setInvertedX(value));
		folder.add(params.rotation, "inverted Y")
			.onChange(value => settings.rotation.setInvertedY(value));

		folder = menu.addFolder("Translation");
		folder.add(params.translation, "enabled").listen()
			.onChange(value => {

				if(!this.orbitEnabled) {

					settings.translation.setEnabled(value);

				} else {

					// Prevent translation.
					params.translation.enabled = false;

				}

			});

		folder = menu.addFolder("Zooming");
		folder.add(params.zoom, "enabled")
			.onChange(value => settings.zoom.setEnabled(value));
		folder.add(params.zoom, "inverted")
			.onChange(value => settings.zoom.setInverted(value));
		folder.add(params.zoom, "min distance", 0.1, 1.0, 0.01)
			.onChange(value => settings.zoom.setMinDistance(value));
		folder.add(params.zoom, "max distance", 1.0, 10.0, 0.01)
			.onChange(value => settings.zoom.setMaxDistance(value));

		menu.add(params, "save");

		menu.add(this, "orbitEnabled").name("orbit").onChange((value: boolean) => {

			params.translation.enabled = !value;
			settings.translation.setEnabled(!value);

			if(!value && params.general.mode === ControlMode.THIRD_PERSON) {

				this.spherical.theta = 0.0;
				this.controls.setTarget(0, 0, 0);

			}

		});

		if(window.innerWidth < 720) {

			menu.close();

		}

	}

	override dispose(): void {

		document.removeEventListener("keydown", this);

	}

}
