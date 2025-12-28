import { BaseEvent, EventDispatcher, Matrix4, Quaternion, Spherical, Vector3 } from "three";
import { Action } from "../core/Action.js";
import { ControlMode } from "../core/ControlMode.js";
import { MILLISECONDS_TO_SECONDS } from "../core/time.js";
import { TransformationData } from "../core/TransformationData.js";
import { Updatable } from "../core/Updatable.js";
import { ActionEvent } from "../events/ActionEvent.js";
import { MovementEvent } from "../events/MovementEvent.js";
import { SphericalRotationEvent } from "../events/SphericalRotationEvent.js";
import { ScalarDamper } from "../math/ScalarDamper.js";
import { Settings } from "../settings/Settings.js";
import { RotationManagerEventMap } from "./RotationManagerEventMap.js";

const TWO_PI = 2 * Math.PI;
const u = /* @__PURE__ */ new Vector3();
const v = /* @__PURE__ */ new Vector3();
const m = /* @__PURE__ */ new Matrix4();

/**
 * A manager that handles rotation changes.
 *
 * @group Managers
 */

export class RotationManager extends EventDispatcher<RotationManagerEventMap>
	implements EventListenerObject, Updatable {

	/**
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * The primary transformation data.
	 */

	private readonly transformation: TransformationData;

	/**
	 * The current spherical coordinates.
	 */

	private readonly spherical0: Spherical;

	/**
	 * The spherical target coordinates.
	 */

	private readonly spherical1: Spherical;

	/**
	 * A collection of action strategies.
	 */

	private readonly strategies: Map<Action, (x: boolean) => void>;

	/**
	 * Scalar dampers.
	 */

	private readonly scalarDampers: readonly ScalarDamper[];

	// #region Reusable Events

	/**
	 * An update event.
	 */

	private readonly updateEvent: BaseEvent<"update">;

	/**
	 * A rotation event.
	 */

	private readonly rotationEvent: SphericalRotationEvent;

	// #endregion

	// #region State

	/**
	 * A timestamp in milliseconds for calculating the elapsed time since the last update.
	 */

	private timestamp: number;

	/**
	 * Determines whether the rotation is currently being changed.
	 */

	private rotating: boolean;

	// #endregion

	/**
	 * Constructs a new rotation manager.
 	 *
	 * @param settings - The settings.
	 * @param transformation - The transformation data.
	 */

	constructor(settings: Settings, transformation: TransformationData) {

		super();

		this.transformation = transformation;
		this.settings = settings;

		this.spherical0 = new Spherical();
		this.spherical1 = new Spherical();

		this.strategies = new Map<Action, (x: boolean) => void>([
			[Action.DOLLY_IN, () => this.dollyIn()],
			[Action.DOLLY_OUT, () => this.dollyOut()],
			[Action.ROTATE, (x) => void (this.rotating = x)]
		]);

		this.scalarDampers = Object.freeze([
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		]);

		this.updateEvent = { type: "update" };
		this.rotationEvent = { type: "rotate", theta: 0, phi: 0 };

		this.timestamp = 0;
		this.rotating = false;

	}

	// #region Getters

	/**
	 * The position.
	 */

	private get position(): Vector3 {

		return this.transformation.position;

	}

	/**
	 * The quaternion.
	 */

	private get quaternion(): Quaternion {

		return this.transformation.quaternion;

	}

	/**
	 * The target.
	 */

	private get target(): Vector3 {

		return this.transformation.target;

	}

	/**
	 * The current radius.
	 */

	private get radius(): number {

		return this.spherical0.radius;

	}

	// #endregion

	/**
	 * Restricts the spherical angles.
	 *
	 * @return This manager.
	 */

	private restrictAngles(): this {

		const s = this.spherical1;
		const rotation = this.settings.rotation;

		const thetaMin = rotation.minAzimuthalAngle;
		const thetaMax = rotation.maxAzimuthalAngle;
		const phiMin = rotation.minPolarAngle;
		const phiMax = rotation.maxPolarAngle;

		s.theta = Math.min(Math.max(s.theta, thetaMin), thetaMax);
		s.phi = Math.min(Math.max(s.phi, phiMin), phiMax);

		if(s.phi === 0.0 || s.phi === Math.PI) {

			s.makeSafe();

		}

		return this;

	}

	/**
	 * Restricts the spherical radius.
	 *
	 * @return This manager.
	 */

	private restrictRadius(): this {

		const s = this.spherical1;
		const settings = this.settings;
		const min = settings.dolly.minDistance;
		const max = settings.dolly.maxDistance;

		s.radius = Math.min(Math.max(s.radius, min), max);

		return this;

	}

	/**
	 * Restricts the spherical system.
	 *
	 * @return This manager.
	 */

	private restrictSpherical(): this {

		return this.restrictRadius().restrictAngles();

	}

	/**
	 * Updates the spherical coordinates based on the position and target.
	 *
	 * @return This manager.
	 */

	private updateSpherical(): this {

		if(this.settings.general.mode === ControlMode.THIRD_PERSON) {

			const pivotOffset = this.settings.rotation.pivotOffset;
			v.subVectors(u.subVectors(this.position, pivotOffset), this.target);
			this.spherical1.setFromVector3(v);

		} else {

			this.spherical1.setFromVector3(this.target);

		}

		this.restrictSpherical();
		this.spherical0.copy(this.spherical1);

		return this;

	}

	/**
	 * Updates the position based on the spherical coordinates.
	 *
	 * @return This manager.
	 */

	private updatePosition(): this {

		if(this.settings.general.mode === ControlMode.THIRD_PERSON) {

			// Construct the position using spherical0 and the target.
			const pivotOffset = this.settings.rotation.pivotOffset;
			this.position.setFromSpherical(this.spherical0).add(this.target).add(pivotOffset);

		}

		return this;

	}

	/**
	 * Updates the quaternion.
	 *
	 * @return This manager.
	 */

	private updateQuaternion(): this {

		const settings = this.settings;
		const rotation = settings.rotation;
		const target = this.target;
		const up = u.copy(rotation.up);
		const phi = this.spherical0.phi % TWO_PI;

		if((phi < 0.0 && phi > -Math.PI) || (phi > Math.PI && phi < TWO_PI)) {

			// The current orientation is upside down.
			up.negate();

		}

		if(settings.general.mode === ControlMode.THIRD_PERSON) {

			m.lookAt(v.subVectors(this.position, target), rotation.pivotOffset, up);

		} else {

			m.lookAt(v.set(0, 0, 0), target.setFromSpherical(this.spherical0), up);

		}

		this.quaternion.setFromRotationMatrix(m);
		this.dispatchEvent(this.updateEvent);

		return this;

	}

	/**
	 * Adjusts the spherical system.
	 *
	 * @param theta - The angle to add to theta in radians.
	 * @param phi - The angle to add to phi in radians.
	 * @return This manager.
	 */

	private adjustSpherical(theta: number, phi: number): this {

		const s = this.spherical1;
		const settings = this.settings;
		const rotation = settings.rotation;
		const invertedY = rotation.invertedY;
		const orbit = (settings.general.mode === ControlMode.THIRD_PERSON);
		const orbitXorInvertedY = ((orbit || invertedY) && !(orbit && invertedY));

		s.theta = rotation.invertedX ? s.theta + theta : s.theta - theta;
		s.phi = orbitXorInvertedY ? s.phi - phi : s.phi + phi;

		return this.restrictAngles();

	}

	/**
	 * Dollies in or out. Only applies in third person mode.
	 *
	 * @param sign - The normalized direction. Possible values are [-1, 1].
	 * @return This manager.
	 */

	private dolly(sign: number): this {

		const s = this.spherical1;
		const settings = this.settings;
		const dolly = settings.dolly;

		if(dolly.enabled && settings.general.mode === ControlMode.THIRD_PERSON) {

			const amount = sign * dolly.sensitivity;
			s.radius = dolly.inverted ? s.radius - amount : s.radius + amount;
			this.restrictRadius();

		}

		return this;

	}

	/**
	 * Dollies in by one step. Only applies in third person mode.
	 *
	 * The step size is defined by the dolly sensitivity.
	 *
	 * @return This manager.
	 */

	private dollyIn(): this {

		return this.dolly(-1);

	}

	/**
	 * Dollies out by one step. Only applies in third person mode.
	 *
	 * The step size is defined by the dolly sensitivity.
	 *
	 * @return This manager.
	 */

	private dollyOut(): this {

		return this.dolly(1);

	}

	/**
	 * Resets the current velocity.
	 */

	private reset(): void {

		// Reset the target coordinates.
		this.spherical1.copy(this.spherical0);

		for(const scalarDamper of this.scalarDampers) {

			scalarDamper.resetVelocity();

		}

		this.rotating = false;

	}

	/**
	 * Adjusts the rotation to look at the given point.
	 *
	 * @param point - A point.
	 * @return This manager.
	 */

	lookAt(point: Vector3): this {

		if(this.settings.general.mode === ControlMode.THIRD_PERSON) {

			this.target.copy(point).sub(this.settings.rotation.pivotOffset);

		} else {

			this.target.subVectors(point, this.position).normalize();

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

		const orbit = (this.settings.general.mode === ControlMode.THIRD_PERSON);
		view.setFromSpherical(this.spherical0).normalize();

		return orbit ? view.negate() : view;

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

		const orbit = (this.settings.general.mode === ControlMode.THIRD_PERSON);
		view.setFromSpherical(this.spherical1).normalize();

		return orbit ? view.negate() : view;

	}

	// #region Event Handling

	/**
	 * Handles action events.
	 *
	 * @param event - An event.
	 * @param activate - True if the action was activated, false if it was deactivated.
	 */

	private onAction(event: ActionEvent, activate: boolean): void {

		if(this.strategies.has(event.action)) {

			this.strategies.get(event.action)!(activate);

		}

	}

	/**
	 * Handles movement events.
	 *
	 * @param event - An event.
	 */

	private onMove(event: MovementEvent): void {

		if(!this.rotating) {

			return;

		}

		const settings = this.settings;

		this.adjustSpherical(
			event.x * settings.pointer.sensitivity * settings.rotation.sensitivityX,
			event.y * settings.pointer.sensitivity * settings.rotation.sensitivityY
		);

	}

	/**
	 * Handles setting changes.
	 *
	 * @param event - An event.
	 */

	private onSettingsChanged(event: BaseEvent): void {

		const settings = this.settings;
		const general = settings.general;

		if(!settings.rotation.enabled) {

			this.reset();

		}

		if(general.mode !== general.previousMode) {

			if(general.mode === ControlMode.THIRD_PERSON) {

				// Switch to third person.
				v.copy(this.target);
				this.target.copy(this.position);
				this.position.sub(v);

			} else {

				// Switch to first person.
				this.position.copy(this.target);
				this.target.set(0, 0, -1).applyQuaternion(this.quaternion);

			}

			this.updateSpherical();

		} else {

			this.restrictSpherical();

		}

		this.updatePosition().updateQuaternion();

	}

	handleEvent(event: BaseEvent | ActionEvent | MovementEvent): void {

		switch(event.type) {

			case "move":
				this.onMove(event as MovementEvent);
				break;

			case "activate":
				this.onAction(event as ActionEvent, true);
				break;

			case "deactivate":
				this.onAction(event as ActionEvent, false);
				break;

			case "change":
				this.onSettingsChanged(event);
				break;

			case "reset":
				this.reset();
				break;

		}

	}

	// #endregion

	/**
	 * Synchronizes the internal state with external changes.
	 *
	 * @param previousPosition - The previous position.
	 * @param previousQuaternion - The previous quaternion.
	 * @param previousTarget - The previous target.
	 */

	synchronize(previousTransformation: TransformationData): void {

		const mode = this.settings.general.mode;
		const position = this.position;
		const quaternion = this.quaternion;
		const target = this.target;

		if(!previousTransformation.quaternion.equals(quaternion)) {

			if(mode === ControlMode.THIRD_PERSON) {

				target.set(0, 0, -1).applyQuaternion(quaternion);
				target.multiplyScalar(this.radius);
				target.add(position);

			} else {

				target.set(0, 0, -1).applyQuaternion(quaternion);

			}

			this.updateSpherical();

		} else if(!previousTransformation.target.equals(target)) {

			if(!previousTransformation.position.equals(position)) {

				this.updateSpherical().updateQuaternion();

			} else {

				if(mode === ControlMode.THIRD_PERSON) {

					this.updatePosition();

				} else {

					this.updateSpherical().updateQuaternion();

				}

			}

		} else if(!previousTransformation.position.equals(position)) {

			if(mode === ControlMode.THIRD_PERSON) {

				this.updateSpherical().updateQuaternion();

			}

		}

	}

	/**
	 * Keeps the spherical coordinates within the range [0, 2Pi].
	 *
	 * @return This instance.
	 */

	private preventRotationOverflow(): this {

		const s0 = this.spherical0;
		const s1 = this.spherical1;

		if(Math.abs(s0.theta) >= TWO_PI) {

			s0.theta %= TWO_PI;
			s1.theta %= TWO_PI;

		}

		if(Math.abs(s0.phi) >= TWO_PI) {

			s0.phi %= TWO_PI;
			s1.phi %= TWO_PI;

		}

		return this;

	}

	/**
	 * Updates the rotation.
	 *
	 * @param elapsed - The time since the last update in seconds.
	 * @return This instance.
	 */

	private updateRotation(elapsed: number): this {

		const s0 = this.spherical0;
		const s1 = this.spherical1;

		if(s0.theta === s1.theta && s0.phi === s1.phi) {

			return this;

		}

		if(this.settings.rotation.damping > 0.0) {

			const damping = this.settings.rotation.damping;
			const omega = ScalarDamper.calculateOmega(damping);
			const exp = ScalarDamper.calculateExp(omega, elapsed);

			s0.theta = this.scalarDampers[0].interpolate(s0.theta, s1.theta, damping, omega, exp, elapsed);
			s0.phi = this.scalarDampers[1].interpolate(s0.phi, s1.phi, damping, omega, exp, elapsed);

		} else {

			s0.theta = s1.theta;
			s0.phi = s1.phi;

		}

		return this.preventRotationOverflow();

	}

	/**
	 * Updates the radius.
	 *
	 * @param elapsed - The time since the last update in seconds.
	 * @return This instance.
	 */

	private updateRadius(elapsed: number): this {

		const s0 = this.spherical0;
		const s1 = this.spherical1;

		if(s0.radius === s1.radius) {

			return this;

		}

		if(this.settings.dolly.damping > 0.0) {

			const damping = this.settings.dolly.damping;
			const omega = ScalarDamper.calculateOmega(damping);
			const exp = ScalarDamper.calculateExp(omega, elapsed);

			s0.radius = this.scalarDampers[2].interpolate(s0.radius, s1.radius, damping, omega, exp, elapsed);

		} else {

			s0.radius = s1.radius;

		}

		return this;

	}

	update(timestamp: number): void {

		const elapsed = (timestamp - this.timestamp) * MILLISECONDS_TO_SECONDS;
		this.timestamp = timestamp;

		this.updateRotation(elapsed)
			.updateRadius(elapsed)
			.updatePosition()
			.updateQuaternion();

	}

}
