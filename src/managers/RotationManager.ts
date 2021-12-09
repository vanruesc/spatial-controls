import { Event as Event3, EventDispatcher, Matrix4, Quaternion, Spherical, Vector3 } from "three";
import { MILLISECONDS_TO_SECONDS } from "../core/time";
import { ControlMode, Updatable } from "../core";
import { ScalarDamper } from "../math";
import { Settings } from "../settings";

const TWO_PI = Math.PI * 2;
const u = new Vector3();
const v = new Vector3();
const m = new Matrix4();

/**
 * A rotation manager.
 */

export class RotationManager extends EventDispatcher implements Updatable {

	/**
	 * The position that will be modified.
	 */

	private position: Vector3;

	/**
	 * The quaternion that will be modified.
	 */

	private quaternion: Quaternion;

	/**
	 * The target.
	 */

	private target: Vector3;

	/**
	 * The settings.
	 */

	private settings: Settings;

	/**
	 * The current spherical coordinates.
	 */

	private spherical0: Spherical;

	/**
	 * The spherical target coordinates.
	 */

	private spherical1: Spherical;

	/**
	 * Scalar dampers.
	 */

	private scalarDampers: ScalarDamper[];

	/**
	 * A timestamp.
	 */

	private timestamp: number;

	/**
	 * A reusable update event.
	 */

	private updateEvent: Event3;

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

		this.position = position;
		this.quaternion = quaternion;
		this.target = target;
		this.settings = settings;
		this.spherical0 = new Spherical();
		this.spherical1 = new Spherical();
		this.timestamp = 0;
		this.updateEvent = { type: "update" };

		this.scalarDampers = [
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		];

	}

	/**
	 * Sets the position.
	 *
	 * @param position - A position.
	 * @return This manager.
	 */

	setPosition(position: Vector3): RotationManager {

		this.position = position;
		return this;

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param quaternion - A quaternion.
	 * @return This manager.
	 */

	setQuaternion(quaternion: Quaternion): RotationManager {

		this.quaternion = quaternion;
		return this;

	}

	/**
	 * Sets the target.
	 *
	 * @param target - A target.
	 * @return This manager.
	 */

	setTarget(target: Vector3): RotationManager {

		this.target = target;
		return this;

	}

	/**
	 * Resets the current velocity.
	 *
	 * @return This manager.
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

	private restrictAngles(): RotationManager {

		const s = this.spherical1;
		const rotation = this.settings.rotation;

		const thetaMin = rotation.getMinAzimuthalAngle();
		const thetaMax = rotation.getMaxAzimuthalAngle();
		const phiMin = rotation.getMinPolarAngle();
		const phiMax = rotation.getMaxPolarAngle();

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

	private restrictRadius(): RotationManager {

		const s = this.spherical1;
		const zoom = this.settings.zoom;
		const min = zoom.getMinDistance();
		const max = zoom.getMaxDistance();

		s.radius = Math.min(Math.max(s.radius, min), max);

		return this;

	}

	/**
	 * Returns the current radius.
	 *
	 * @return The radius.
	 */

	getRadius(): number {

		return this.spherical0.radius;

	}

	/**
	 * Restricts the spherical system.
	 *
	 * @return This manager.
	 */

	restrictSpherical(): RotationManager {

		return this.restrictRadius().restrictAngles();

	}

	/**
	 * Updates the spherical coordinates based on the position and target.
	 *
	 * @return This manager.
	 */

	updateSpherical(): RotationManager {

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			const pivotOffset = this.settings.rotation.getPivotOffset();
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

	updatePosition(): RotationManager {

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			// Construct the position using the spherical coordinates and the target.
			const pivotOffset = this.settings.rotation.getPivotOffset();
			this.position.setFromSpherical(this.spherical0).add(this.target).add(pivotOffset);

		}

		return this;

	}

	/**
	 * Updates the quaternion.
	 *
	 * @return This manager.
	 */

	updateQuaternion(): RotationManager {

		const settings = this.settings;
		const rotation = settings.rotation;
		const target = this.target;
		const up = u.copy(rotation.getUpVector());
		const phi = this.spherical0.phi % TWO_PI;

		if((phi < 0.0 && phi > -Math.PI) || (phi > Math.PI && phi < TWO_PI)) {

			// The orientation is currently upside down.
			up.negate();

		}

		if(settings.general.getMode() === ControlMode.THIRD_PERSON) {

			m.lookAt(v.subVectors(this.position, target), rotation.getPivotOffset(), up);

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

	adjustSpherical(theta: number, phi: number): RotationManager {

		const s = this.spherical1;
		const settings = this.settings;
		const rotation = settings.rotation;
		const invertedY = rotation.isInvertedY();
		const orbit = (settings.general.getMode() === ControlMode.THIRD_PERSON);
		const orbitXorInvertedY = ((orbit || invertedY) && !(orbit && invertedY));

		s.theta = !rotation.isInvertedX() ? s.theta - theta : s.theta + theta;
		s.phi = orbitXorInvertedY ? s.phi - phi : s.phi + phi;

		return this.restrictAngles();

	}

	/**
	 * Zooms in or out. Only applies in third person mode.
	 *
	 * @param sign - The zoom sign. Possible values are [-1, 0, 1].
	 * @return This manager.
	 */

	zoom(sign: number): RotationManager {

		const s = this.spherical1;
		const settings = this.settings;
		const zoom = settings.zoom;

		if(zoom.isEnabled() && settings.general.getMode() === ControlMode.THIRD_PERSON) {

			const amount = sign * zoom.getSensitivity();
			s.radius = zoom.isInverted() ? s.radius - amount : s.radius + amount;
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

	lookAt(point: Vector3): RotationManager {

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			this.target.copy(point);

		} else {

			this.target.subVectors(point, this.position).normalize();

		}

		return this.updateSpherical().updateQuaternion();

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getViewDirection(view: Vector3): Vector3 {

		const settings = this.settings;
		const orbit = (settings.general.getMode() === ControlMode.THIRD_PERSON);
		view.setFromSpherical(this.spherical0).normalize();

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

			if(settings.rotation.getDamping() > 0.0) {

				const damping = settings.rotation.getDamping();
				const omega = ScalarDamper.calculateOmega(damping);
				const exp = ScalarDamper.calculateExp(omega, elapsed);

				s0.theta = scalarDampers[0].interpolate(s0.theta, s1.theta, damping, omega, exp, elapsed);
				s0.phi = scalarDampers[1].interpolate(s0.phi, s1.phi, damping, omega, exp, elapsed);

			} else {

				s0.theta = s1.theta;
				s0.phi = s1.phi;

			}

			if(settings.zoom.getDamping() > 0.0) {

				const damping = settings.zoom.getDamping();
				const omega = ScalarDamper.calculateOmega(damping);
				const exp = ScalarDamper.calculateExp(omega, elapsed);

				s0.radius = scalarDampers[2].interpolate(s0.radius, s1.radius, damping, omega, exp, elapsed);

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
