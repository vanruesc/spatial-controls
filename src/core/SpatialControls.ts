import { Event, EventTarget } from "synthetic-event";
import { Quaternion, Vector3 } from "three";
import { CollisionManager } from "../managers/CollisionManager.js";
import { CollisionManagerEventMap } from "../managers/CollisionManagerEventMap.js";
import { InputManager } from "../managers/InputManager.js";
import { RotationManager } from "../managers/RotationManager.js";
import { RotationManagerEventMap } from "../managers/RotationManagerEventMap.js";
import { TranslationManager } from "../managers/TranslationManager.js";
import { TranslationManagerEventMap } from "../managers/TranslationManagerEventMap.js";
import { Settings } from "../settings/Settings.js";
import { Constraint } from "./Constraint.js";
import { Disposable } from "./Disposable.js";
import { Spatial } from "./Spatial.js";
import { TransformationData } from "./TransformationData.js";
import { Updatable } from "./Updatable.js";

const v = /* @__PURE__ */ new Vector3();

/**
 * SpatialControls events.
 */

export type SpatialControlsEventMap = (
	RotationManagerEventMap &
	TranslationManagerEventMap &
	CollisionManagerEventMap
);

/**
 * SpatialControls options.
 */

export interface SpatialControlsOptions {

	/**
	 * The entity that will be transformed by these controls.
	 */

	spatial?: Spatial | null;

	/**
	 * The DOM element that acts as the primary event target.
	 */

	domElement?: HTMLElement | null;

}

/**
 * Spatial controls for 3D translation and rotation.
 *
 * @group Core
 */

export class SpatialControls extends EventTarget<SpatialControlsEventMap>
	implements Disposable, EventListenerObject, Updatable {

	/**
	 * The primary transformation data.
	 */

	private readonly transformation: TransformationData;

	/**
	 * The previous transformation data.
	 */

	private readonly previousTransformation: TransformationData;

	// #region Managers

	/**
	 * Handles user input.
	 */

	private readonly inputManager: InputManager;

	/**
	 * Handles rotational updates.
	 */

	private readonly rotationManager: RotationManager;

	/**
	 * Handles positional updates.
	 */

	private readonly translationManager: TranslationManager;

	/**
	 * Handles collisions and constraints.
	 */

	private readonly collisionManager: CollisionManager;

	// #endregion

	/**
	 * The control settings.
	 */

	readonly settings: Settings;

	/**
	 * Constructs new controls.
	 *
	 * @param options - The options.
	 */

	constructor({ spatial = null, domElement = null }: SpatialControlsOptions = {}) {

		super();

		const transformation = TransformationData.from(spatial);
		transformation.target.set(0, 0, -1).applyQuaternion(transformation.quaternion);
		this.transformation = transformation;
		this.previousTransformation = new TransformationData(transformation);

		const settings = new Settings();
		settings.addEventListener("change", this);
		this.settings = settings;

		const inputManager = new InputManager(settings.input, domElement);
		this.inputManager = inputManager;

		const rotationManager = new RotationManager(settings, transformation);
		inputManager.addEventListener("move", rotationManager);
		inputManager.addEventListener("activate", rotationManager);
		inputManager.addEventListener("deactivate", rotationManager);
		inputManager.addEventListener("reset", rotationManager);
		this.rotationManager = rotationManager;

		const translationManager = new TranslationManager(settings, transformation);
		inputManager.addEventListener("move", translationManager);
		inputManager.addEventListener("activate", translationManager);
		inputManager.addEventListener("deactivate", translationManager);
		inputManager.addEventListener("reset", translationManager);
		this.translationManager = translationManager;

		const collisionManager = new CollisionManager(settings, transformation);
		this.collisionManager = collisionManager;

		// Propagate events.
		rotationManager.addEventListener("rotate", e => this.dispatchEvent(e));
		rotationManager.addEventListener("rotationstart", e => this.dispatchEvent(e));
		rotationManager.addEventListener("rotationend", e => this.dispatchEvent(e));
		translationManager.addEventListener("translate", e => this.dispatchEvent(e));
		translationManager.addEventListener("translationstart", e => this.dispatchEvent(e));
		translationManager.addEventListener("translationend", e => this.dispatchEvent(e));
		collisionManager.addEventListener("constrain", e => this.dispatchEvent(e));
		collisionManager.addEventListener("collision", e => this.dispatchEvent(e));

	}

	/**
	 * A DOM element that acts as the primary event target.
	 */

	get domElement(): HTMLElement | null {

		return this.inputManager.domElement;

	}

	set domElement(value: HTMLElement | null) {

		this.inputManager.domElement = value;

	}

	/**
	 * Determines whether the controls are enabled.
	 *
	 * Event listeners will be registered or unregistered depending on this flag.
	 */

	get enabled(): boolean {

		return this.inputManager.enabled;

	}

	set enabled(value: boolean) {

		this.inputManager.enabled = value;

	}

	/**
	 * The spatial data to control.
	 */

	get spatial(): Spatial {

		return this.transformation;

	}

	set spatial(value: Spatial) {

		this.transformation.spatial = value;

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this.transformation.position;

	}

	set position(value: Vector3) {

		this.transformation.position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this.transformation.quaternion;

	}

	set quaternion(value: Quaternion) {

		this.transformation.quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this.transformation.target;

	}

	set target(value: Vector3) {

		this.transformation.target = value;

	}

	/**
	 * Custom constraints for the {@link position} and {@link target}.
	 */

	get constraints(): Set<Constraint<Vector3>> {

		return this.collisionManager.constraints;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param x - The X-coordinate, or a point.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	lookAt(x: number | Vector3, y?: number, z?: number): this {

		if(x instanceof Vector3) {

			this.rotationManager.lookAt(x);

		} else {

			this.rotationManager.lookAt(v.set(x, y!, z!));

		}

		return this;

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getViewDirection(view: Vector3): Vector3 {

		return this.rotationManager.getViewDirection(view);

	}

	/**
	 * Returns the projected view direction.
	 *
	 * The projected direction will be reached if there are no further rotation adjustments. If damping is disabled,
	 * the vector will be equal to the direction returned by {@link getViewDirection}.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getProjectedViewDirection(view: Vector3): Vector3 {

		return this.rotationManager.getProjectedViewDirection(view);

	}

	/**
	 * Copies the given controls.
	 *
	 * @param controls - A controls instance.
	 * @return This instance.
	 */

	copy(controls: SpatialControls): SpatialControls {

		this.domElement = controls.domElement;
		this.transformation.copy(controls.transformation);
		this.settings.copy(controls.settings);

		return this;

	}

	/**
	 * Clones this instance.
	 *
	 * @return The cloned controls.
	 */

	clone(): SpatialControls {

		const clone = new SpatialControls();
		return clone.copy(this);

	}

	/**
	 * Handles setting changes.
	 *
	 * @param event - An event.
	 */

	private onSettingsChanged(event: Event): void {

		this.previousTransformation.copy(this.transformation);

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "change":
				this.onSettingsChanged(event);
				break;

		}

	}

	/**
	 * Synchronizes the internal state with external changes.
	 */

	private synchronize(): void {

		this.rotationManager.synchronize(this.previousTransformation);

	}

	update(timestamp: number): void {

		if(!this.enabled) {

			return;

		}

		this.synchronize();

		this.rotationManager.update(timestamp);
		this.translationManager.update(timestamp);
		this.collisionManager.update(timestamp);

		this.previousTransformation.copy(this.transformation);

	}

	dispose(): void {

		this.inputManager.dispose();

	}

}
