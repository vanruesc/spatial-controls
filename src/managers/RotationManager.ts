import { BaseEvent, EventDispatcher, Matrix4, Quaternion, Spherical, Vector3 } from "three";
import { ControlMode } from "../core/ControlMode.js";
import { MILLISECONDS_TO_SECONDS } from "../core/time.js";
import { Updatable } from "../core/Updatable.js";
import { ScalarDamper } from "../math/ScalarDamper.js";
import { Settings } from "../settings/Settings.js";
import { ManagerEventMap } from "./ManagerEventMap.js";

const TWO_PI = 2 * Math.PI;
const u = /* @__PURE__ */ new Vector3();
const v = /* @__PURE__ */ new Vector3();
const m = /* @__PURE__ */ new Matrix4();

/**
 * A rotation manager.
 *
 * @group Managers
 */

export class RotationManager extends EventDispatcher<ManagerEventMap> implements Updatable {

	/**
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

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
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * The current spherical coordinates.
	 */

	private readonly spherical0: Spherical;

	/**
	 * The spherical target coordinates.
	 */

	private readonly spherical1: Spherical;

	/**
	 * Scalar dampers.
	 */

	private readonly scalarDampers: readonly ScalarDamper[];

	/**
	 * A timestamp.
	 */

	private timestamp: number;

	/**
	 * A reusable update event.
	 */

	private readonly updateEvent: BaseEvent<"update">;

	/**
	 * Constructs a new rotation manager.
 	 *
 	 * @param position - The position.
 	 * @param quaternion - The quaternion.
 	 * @param target - The target.
 	 * @param settings - The settings.
	 */

	constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings) {

		super();

		this._position = position;
		this._quaternion = quaternion;
		this._target = target;

		this.settings = settings;
		this.spherical0 = new Spherical();
		this.spherical1 = new Spherical();
		this.timestamp = 0;
		this.updateEvent = { type: RotationManager.EVENT_UPDATE };

		this.scalarDampers = Object.freeze([
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		]);

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this._position;

	}

	set position(value: Vector3) {

		this._position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this._quaternion;

	}

	set quaternion(value: Quaternion) {

		this._quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this._target;

	}

	set target(value: Vector3) {

		this._target = value;

	}

	/**
	 * The current radius.
	 */

	get radius(): number {

		return this.spherical0.radius;

	}

	/**
	 * Resets the current velocity.
	 */

	resetVelocity(): void {

		// Stop moving.
		this.spherical1.copy(this.spherical0);

		for(const scalarDamper of this.scalarDampers) {

			scalarDamper.resetVelocity();

		}

	}

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
		const zoom = this.settings.zoom;
		const min = zoom.minDistance;
		const max = zoom.maxDistance;

		s.radius = Math.min(Math.max(s.radius, min), max);

		return this;

	}

	/**
	 * Restricts the spherical system.
	 *
	 * @return This manager.
	 */

	restrictSpherical(): this {

		return this.restrictRadius().restrictAngles();

	}

	/**
	 * Updates the spherical coordinates based on the position and target.
	 *
	 * @return This manager.
	 */

	updateSpherical(): this {

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

	updatePosition(): this {

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

	updateQuaternion(): this {

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

	adjustSpherical(theta: number, phi: number): this {

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
	 * Zooms in or out. Only applies in third person mode.
	 *
	 * @param sign - The zoom sign. Possible values are [-1, 0, 1].
	 * @return This manager.
	 */

	zoom(sign: number): this {

		const s = this.spherical1;
		const settings = this.settings;
		const zoom = settings.zoom;

		if(zoom.enabled && settings.general.mode === ControlMode.THIRD_PERSON) {

			const amount = sign * zoom.sensitivity;
			s.radius = zoom.inverted ? s.radius - amount : s.radius + amount;
			this.restrictRadius();

		}

		return this;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param point - The target point.
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

	update(timestamp: number): void {

		const s0 = this.spherical0;
		const s1 = this.spherical1;

		const equal = (s0.radius === s1.radius && s0.theta === s1.theta && s0.phi === s1.phi);

		if(!equal) {

			const settings = this.settings;
			const scalarDampers = this.scalarDampers;
			const elapsed = (timestamp - this.timestamp) * MILLISECONDS_TO_SECONDS;

			if(settings.rotation.damping > 0.0) {

				const damping = settings.rotation.damping;
				const omega = ScalarDamper.calculateOmega(damping);
				const exp = ScalarDamper.calculateExp(omega, elapsed);

				s0.theta = scalarDampers[0]!.interpolate(s0.theta, s1.theta, damping, omega, exp, elapsed);
				s0.phi = scalarDampers[1]!.interpolate(s0.phi, s1.phi, damping, omega, exp, elapsed);

			} else {

				s0.theta = s1.theta;
				s0.phi = s1.phi;

			}

			if(settings.zoom.damping > 0.0) {

				const damping = settings.zoom.damping;
				const omega = ScalarDamper.calculateOmega(damping);
				const exp = ScalarDamper.calculateExp(omega, elapsed);

				s0.radius = scalarDampers[2]!.interpolate(s0.radius, s1.radius, damping, omega, exp, elapsed);

			} else {

				s0.radius = s1.radius;

			}

			this.updatePosition().updateQuaternion();

		} else {

			// Prevent overflow.

			if(Math.abs(s0.theta) >= TWO_PI) {

				s0.theta %= TWO_PI;
				s1.theta %= TWO_PI;

			}

			if(Math.abs(s0.phi) >= TWO_PI) {

				s0.phi %= TWO_PI;
				s1.phi %= TWO_PI;

			}

		}

		this.timestamp = timestamp;

	}

}
