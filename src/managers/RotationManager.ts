import { Matrix4, Quaternion, Spherical, Vector3 } from "three";
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

export class RotationManager {

	/**
	 * The position that will be modified.
	 */

	private position: Vector3;

	/**
	 * The quaternion that will be modified.
	 */

	private quaternion: Quaternion;

	/**
	 * A target.
	 */

	private target: Vector3;

	/**
	 * The settings.
	 */

	private settings: Settings;

	/**
	 * A spherical coordinate system.
	 */

	private spherical: Spherical;

	/**
	 * Constructs a new rotation manager.
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
	 * Updates the quaternion.
	 *
	 * @return This manager.
	 */

	updateQuaternion(): RotationManager {

		const settings = this.settings;
		const rotation = settings.rotation;

		if(settings.general.orbit) {

			m.lookAt(v.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);

		} else {

			m.lookAt(v.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);

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

		const settings = this.settings;
		const orbit = settings.general.orbit;
		const rotation = settings.rotation;
		const s = this.spherical;

		s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
		s.phi = ((orbit || rotation.invertY) && !(orbit && rotation.invertY)) ? s.phi - phi : s.phi + phi;

		// Restrict theta and phi.
		s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
		s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
		s.theta %= TWO_PI;
		s.makeSafe();

		if(orbit) {

			// Keep the position up-to-date.
			this.position.setFromSpherical(s).add(this.target);

		}

		return this;

	}

	/**
	 * Zooms in or out.
	 *
	 * @param sign - The zoom sign. Possible values are [-1, 0, 1].
	 * @return This manager.
	 */

	zoom(sign: number): RotationManager {

		const settings = this.settings;
		const general = settings.general;
		const sensitivity = settings.sensitivity;
		const zoom = settings.zoom;
		const s = this.spherical;

		if(general.orbit && zoom.enabled) {

			let amount = sign * sensitivity.zoom;

			if(zoom.invert) {

				amount = -amount;

			}

			const min = Math.max(zoom.minDistance, 1e-6);
			const max = Math.min(zoom.maxDistance, Number.POSITIVE_INFINITY);

			s.radius = Math.min(Math.max(s.radius + amount, min), max);
			this.position.setFromSpherical(s).add(this.target);

		}

		return this;

	}

	/**
	 * Updates rotation calculations based on time.
	 *
	 * @param deltaTime - The time since the last update in seconds.
	 */

	update(deltaTime: number): void {}

	/**
	 * Looks at the given point.
	 *
	 * @param point - The target point.
	 * @return This manager.
	 */

	lookAt(point: Vector3): RotationManager {

		const spherical = this.spherical;
		const position = this.position;
		const target = this.target;

		target.copy(point);

		if(this.settings.general.orbit) {

			v.subVectors(position, target);

		} else {

			v.subVectors(target, position).normalize();

		}

		spherical.setFromVector3(v);
		spherical.radius = Math.max(spherical.radius, 1e-6);
		this.updateQuaternion();

		return this;

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getViewDirection(view: Vector3): Vector3 {

		view.setFromSpherical(this.spherical).normalize();

		if(this.settings.general.orbit) {

			view.negate();

		}

		return view;

	}

}
