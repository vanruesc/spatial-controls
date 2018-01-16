/**
 * Zoom settings.
 */

export class ZoomSettings {

	/**
	 * Constructs new zoom settings.
	 */

	constructor() {

		/**
		 * Whether zooming is enabled.
		 *
		 * @type {Boolean}
		 */

		this.enabled = true;

		/**
		 * Indicates whether the zoom controls should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invert = false;

		/**
		 * The minimum zoom distance.
		 *
		 * @type {Number}
		 */

		this.minDistance = 1e-6;

		/**
		 * The maximum zoom distance.
		 *
		 * @type {Number}
		 */

		this.maxDistance = Infinity;

	}

	/**
	 * Copies the given zoom settings.
	 *
	 * @param {ZoomSettings} settings - Zoom settings.
	 * @return {ZoomSettings} This instance.
	 */

	copy(settings) {

		this.enabled = settings.enabled;
		this.invert = settings.invert;
		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;

		return this;

	}

	/**
	 * Clones this zoom settings instance.
	 *
	 * @return {ZoomSettings} The cloned zoom settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
