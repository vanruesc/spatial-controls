import { Matrix4, Quaternion, Spherical, Vector3 } from "three";
import { ControlMode, Updatable } from "../core";
import { Settings } from "../settings";

/**
 * Two PI.
 *
 * @ignore
 */

const TWO_PI = Math.PI * 2;

/**
 * A vector.
 *
 * @ignore
 */

const v = new Vector3();

/**
 * A matrix.
 *
 * @ignore
 */

const m = new Matrix4();

/**
 * A rotation manager.
 */

export class RotationManager implements Updatable {

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
	 * The spherical coordinate system.
	 */

	private spherical: Spherical;

	/**
	 * Constructs a new rotation manager.
 	 *
 	 * @param position - The position.
 	 * @param quaternion - The quaternion.
 	 * @param target - The target.
 	 * @param settings - The settings.
	 */

	constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings) {

		this.position = position;
		this.quaternion = quaternion;
		this.target = target;
		this.settings = settings;
		this.spherical = new Spherical();

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
	 * Restricts the spherical angles.
	 *
	 * @return This manager.
	 */

	private restrictAngles(): RotationManager {

		const s = this.spherical;
		const rotation = this.settings.rotation;

		const thetaMin = rotation.getMinAzimuthalAngle();
		const thetaMax = rotation.getMaxAzimuthalAngle();
		const phiMin = rotation.getMinPolarAngle();
		const phiMax = rotation.getMaxPolarAngle();

		s.theta = Math.min(Math.max(s.theta, thetaMin), thetaMax);
		s.phi = Math.min(Math.max(s.phi, phiMin), phiMax);
		s.theta %= TWO_PI;
		s.makeSafe();

		return this;

	}

	/**
	 * Restricts the spherical radius.
	 *
	 * @return This manager.
	 */

	private restrictRadius(): RotationManager {

		const s = this.spherical;
		const zoom = this.settings.zoom;
		const min = zoom.getMinDistance();
		const max = zoom.getMaxDistance();

		s.radius = Math.min(Math.max(s.radius, min), max);

		return this;

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

			v.subVectors(this.position, this.target);

		} else {

			v.subVectors(this.target, this.position).normalize();

		}

		this.spherical.setFromVector3(v);

		return this.restrictSpherical();

	}

	/**
	 * Updates the position based on the spherical coordinates.
	 *
	 * @return This manager.
	 */

	updatePosition(): RotationManager {

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			// Construct the position using the spherical coordinates and the target.
			this.position.setFromSpherical(this.spherical).add(this.target);

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
		const up = rotation.getUpVector();

		if(settings.general.getMode() === ControlMode.THIRD_PERSON) {

			m.lookAt(v.subVectors(this.position, target), rotation.getPivotOffset(), up);

		} else {

			m.lookAt(v.set(0, 0, 0), target.setFromSpherical(this.spherical), up);

		}

		this.quaternion.setFromRotationMatrix(m);

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

		const s = this.spherical;
		const settings = this.settings;
		const rotation = settings.rotation;
		const invertedY = rotation.isInvertedY();
		const orbit = (settings.general.getMode() === ControlMode.THIRD_PERSON);

		s.theta = !rotation.isInvertedX() ? s.theta - theta : s.theta + theta;
		s.phi = ((orbit || invertedY) && !(orbit && invertedY)) ? s.phi - phi : s.phi + phi;

		return this.restrictAngles().updatePosition();

	}

	/**
	 * Zooms in or out.
	 *
	 * @param sign - The zoom sign. Possible values are [-1, 0, 1].
	 * @return This manager.
	 */

	zoom(sign: number): RotationManager {

		const s = this.spherical;
		const settings = this.settings;
		const zoom = settings.zoom;
		const orbit = (settings.general.getMode() === ControlMode.THIRD_PERSON);

		if(zoom.isEnabled() && orbit) {

			const amount = sign * zoom.getSensitivity();
			s.radius = zoom.isInverted() ? s.radius - amount : s.radius + amount;
			this.restrictRadius().position.setFromSpherical(s).add(this.target);

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

		this.target.copy(point);

		return this.updateSpherical().updateQuaternion();

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getViewDirection(view: Vector3): Vector3 {

		const orbit = (this.settings.general.getMode() === ControlMode.THIRD_PERSON);
		view.setFromSpherical(this.spherical).normalize();

		return orbit ? view.negate() : view;

	}

	update(deltaTime: number): void {}

}
