import { Vector3 } from "math-ds";
import * as axes from "../core/axes.js";

/**
 * Rotation settings.
 */

export class RotationSettings {

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		/**
		 * The up vector. Must be normalized.
		 *
		 * @type {Vector3}
		 */

		this.up = new Vector3();
		this.up.copy(axes.y);

		/**
		 * A pivot offset. Only affects third person orbiting.
		 *
		 * @type {Vector3}
		 */

		this.pivotOffset = new Vector3();

		/**
		 * The minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minAzimuthalAngle = -Infinity;

		/**
		 * The maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxAzimuthalAngle = Infinity;

		/**
		 * The minimum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minPolarAngle = 0.0;

		/**
		 * The maximum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxPolarAngle = Math.PI;

		/**
		 * Indicates whether the horizontal rotation should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invertX = false;

		/**
		 * Indicates whether the vertical rotation should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invertY = false;

	}

	/**
	 * Copies the given rotation settings.
	 *
	 * @param {RotationSettings} settings - Rotation settings.
	 * @return {RotationSettings} This instance.
	 */

	copy(settings) {

		this.up.copy(settings.up);
		this.pivotOffset.copy(settings.pivotOffset);

		this.minAzimuthalAngle = (settings.minAzimuthalAngle !== null) ? settings.minAzimuthalAngle : -Infinity;
		this.maxAzimuthalAngle = (settings.maxAzimuthalAngle !== null) ? settings.maxAzimuthalAngle : Infinity;

		this.minPolarAngle = settings.minPolarAngle;
		this.maxPolarAngle = settings.maxPolarAngle;

		this.invertX = settings.invertX;
		this.invertY = settings.invertY;

		return this;

	}

	/**
	 * Clones this rotation settings instance.
	 *
	 * @return {RotationSettings} The cloned rotation settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
