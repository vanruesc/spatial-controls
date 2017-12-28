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

		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;
		this.enabled = settings.enabled;

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
