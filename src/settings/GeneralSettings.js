/**
 * General settings.
 */

export class GeneralSettings {

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		/**
		 * Indicates whether third person perspective is active.
		 *
		 * Should not be modified directly. See {@link DeltaControls#setOrbit}.
		 *
		 * @type {Boolean}
		 */

		this.orbit = true;

	}

	/**
	 * Copies the given general settings.
	 *
	 * @param {GeneralSettings} settings - General settings.
	 * @return {GeneralSettings} This instance.
	 */

	copy(settings) {

		this.orbit = settings.orbit;

		return this;

	}

	/**
	 * Clones this general settings instance.
	 *
	 * @return {GeneralSettings} The cloned general settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
