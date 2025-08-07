import { EventDispatcher, Quaternion, Vector3 } from "three";
import { Settings } from "../settings/Settings.js";
import { Constraint } from "./Constraint.js";
import { ControlsEventMap } from "./ControlsEventMap.js";
import { Disposable } from "./Disposable.js";
import { RotationControls } from "./RotationControls.js";
import { TranslationControls } from "./TranslationControls.js";
import { Updatable } from "./Updatable.js";
import { ControlMode } from "./ControlMode.js";

const v = /* @__PURE__ */ new Vector3();

/**
 * Constrains the given vector.
 *
 * @param p - A vector.
 * @param constraints - A collection of constraints.
 * @return The constrained vector.
 */

function applyConstraints(p: Vector3, constraints: Set<Constraint<Vector3>>): Vector3 {

	for(const applyConstraint of constraints) {

		p = applyConstraint(p);

	}

	return p;

}

/**
 * Spatial controls for 3D translation and rotation.
 *
 * This class emits events of type {@link EVENT_UPDATE} when the position or quaternion is changed.
 *
 * @group Core
 */

export class SpatialControls extends EventDispatcher<ControlsEventMap>
	implements Disposable, EventListenerObject, Updatable {

	/**
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

	// #region Backing Data

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * @see {@link position}
	 */

	private _position: Vector3;

	/**
	 * @see {@link quaternion}
	 */

	private _quaternion: Quaternion;

	/**
	 * @see {@link target}
	 */

	private _target: Vector3;

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	// #endregion

	/**
	 * The previous position.
	 */

	private readonly previousPosition: Vector3;

	/**
	 * The previous quaternion.
	 */

	private readonly previousQuaternion: Quaternion;

	/**
	 * The previous target.
	 */

	private readonly previousTarget: Vector3;

	/**
	 * Rotation controls.
	 */

	private readonly rotationControls: RotationControls;

	/**
	 * Translation controls.
	 */

	private readonly translationControls: TranslationControls;

	/**
	 * The control settings.
	 */

	readonly settings: Settings;

	/**
	 * Custom constraints for {@link position} and {@link target}.
	 */

	readonly constraints: Set<Constraint<Vector3>>;

	/**
	 * Constructs new controls.
	 *
	 * @param position - A position.
	 * @param quaternion - A quaternion.
	 * @param domElement - A DOM element. Serves as the primary event target.
	 */

	constructor(position = new Vector3(), quaternion = new Quaternion(), domElement: HTMLElement | null = null) {

		super();

		this._domElement = null;
		this._enabled = false;

		const target = new Vector3();
		this._target = target;
		this._position = position;
		this._quaternion = quaternion;

		this.previousPosition = new Vector3();
		this.previousQuaternion = new Quaternion();
		this.previousTarget = new Vector3();

		const settings = new Settings();
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));
		this.settings = settings;

		this.constraints = new Set<Constraint<Vector3>>();

		this.rotationControls = new RotationControls(position, quaternion, target, settings);
		this.translationControls = new TranslationControls(position, quaternion, target, settings);
		this.rotationControls.addEventListener(SpatialControls.EVENT_UPDATE, e => this.dispatchEvent(e));
		this.translationControls.addEventListener(SpatialControls.EVENT_UPDATE, e => this.dispatchEvent(e));

		if(position !== null && quaternion !== null) {

			// Note: Default mode is first person.
			this._target.set(0, 0, -1).applyQuaternion(this._quaternion);
			this.lookAt(this._target);

			this.domElement = domElement;
			this.enabled = true;

			this.previousPosition.copy(this.position);
			this.previousQuaternion.copy(this.quaternion);
			this.previousTarget.copy(this.target);

		}

	}

	/**
	 * A DOM element. Acts as the primary event target.
	 */

	get domElement(): HTMLElement | null {

		return this._domElement;

	}

	set domElement(value: HTMLElement | null) {

		const enabled = this.enabled;
		this.dispose();

		this._domElement = value;
		this.rotationControls.domElement = value;
		this.enabled = enabled;

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this._position;

	}

	set position(value: Vector3) {

		this._position = value;
		this.rotationControls.position = value;
		this.translationControls.position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this._quaternion;

	}

	set quaternion(value: Quaternion) {

		this._quaternion = value;
		this.rotationControls.quaternion = value;
		this.translationControls.quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this._target;

	}

	set target(value: Vector3) {

		this._target = value;
		this.rotationControls.target = value;
		this.translationControls.target = value;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param x - The X-coordinate, or a point.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	lookAt(x: number | Vector3, y?: number, z?: number): SpatialControls {

		if(x instanceof Vector3) {

			this.rotationControls.lookAt(x);

		} else {

			this.rotationControls.lookAt(v.set(x, y!, z!));

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

		return this.rotationControls.getViewDirection(view);

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

		return this.rotationControls.getProjectedViewDirection(view);

	}

	/**
	 * Indicates whether the controls are enabled.
	 *
	 * Event listeners will be registered or unregistered depending on this flag.
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		this._enabled = value;
		this.rotationControls.enabled = value;
		this.translationControls.enabled = value;

	}

	/**
	 * Copies the given controls.
	 *
	 * @param controls - A controls instance.
	 * @return This instance.
	 */

	copy(controls: SpatialControls): SpatialControls {

		this.position = controls.position;
		this.quaternion = controls.quaternion;
		this.target = controls.target;
		this.domElement = controls.domElement;
		this.settings.copy(controls.settings);

		return this.lookAt(this.target);

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
	 * Synchronizes the internal state with external changes.
	 */

	synchronize(): void {

		this.rotationControls.synchronize(
			this.previousPosition,
			this.previousQuaternion,
			this.previousTarget
		);

	}

	/**
	 * Constrains the given vector.
	 *
	 * @param A vector.
	 * @return The constrained vector.
	 */

	private applyConstraints(): void {

		if(this.constraints.size === 0) {

			return;

		}

		if(this.settings.general.mode === ControlMode.THIRD_PERSON) {

			// Constrain the target.
			v.copy(this.target);
			this.target.copy(applyConstraints(this.target, this.constraints));

			// Move the position together with the target.
			this.position.add(v.subVectors(this.target, v));

		} else {

			// Constrain the position.
			this.position.copy(applyConstraints(this.position, this.constraints));

		}

	}

	/**
	 * Reacts to setting changes.
	 *
	 * @param event - An event.
	 */

	private onSettingsChanged(event: Event): void {

		this.previousPosition.copy(this.position);
		this.previousQuaternion.copy(this.quaternion);
		this.previousTarget.copy(this.target);

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "change":
				this.onSettingsChanged(event);
				break;

		}

	}

	update(timestamp: number): void {

		this.synchronize();

		this.rotationControls.update(timestamp);
		this.translationControls.update(timestamp);

		this.applyConstraints();

		this.previousPosition.copy(this.position);
		this.previousQuaternion.copy(this.quaternion);
		this.previousTarget.copy(this.target);

	}

	dispose(): void {

		this.enabled = false;

	}

}
