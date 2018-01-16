/**
 * Sensitivity settings.
 */

export class SensitivitySettings {

	/**
	 * Constructs new sensitivity settings.
	 */

	constructor() {

		/**
		 * The rotation sensitivity.
		 *
		 * @type {Number}
		 */

		this.rotation = 0.0025;

		/**
		 * The translation sensitivity.
		 *
		 * @type {Number}
		 */

		this.translation = 1.0;

		/**
		 * The zoom sensitivity.
		 *
		 * @type {Number}
		 */

		this.zoom = 0.1;

	}

	/**
	 * Copies the given sensitivity settings.
	 *
	 * @param {SensitivitySettings} settings - Sensitivity settings.
	 * @return {SensitivitySettings} This instance.
	 */

	copy(settings) {

		this.rotation = settings.rotation;
		this.translation = settings.translation;
		this.zoom = settings.zoom;

		return this;

	}

	/**
	 * Clones these sensitivity settings.
	 *
	 * @return {SensitivitySettings} The cloned sensitivity settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
