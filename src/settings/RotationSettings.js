/**
 * Rotation settings.
 */

export class RotationSettings {

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		/**
		 * The minimum azimuth angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minTheta = -Infinity;

		/**
		 * The maximum azimuth angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxTheta = Infinity;

		/**
		 * The minimum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minPhi = 0.0;

		/**
		 * The maximum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxPhi = Math.PI;

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

		this.minTheta = settings.minTheta;
		this.maxTheta = settings.maxTheta;
		this.minPhi = settings.minPhi;
		this.maxPhi = settings.maxPhi;
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
