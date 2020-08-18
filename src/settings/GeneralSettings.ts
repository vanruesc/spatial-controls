/**
 * General settings.
 */

export class GeneralSettings {

	/**
	 * Indicates whether third person perspective is active.
	 *
	 * Should not be modified directly. See {@link DeltaControls#setOrbit}.
	 */

	orbit: boolean;

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		this.orbit = true;

	}

	/**
	 * Copies the given general settings.
	 *
	 * @param settings - General settings.
	 * @return This instance.
	 */

	copy(settings: GeneralSettings): GeneralSettings {

		this.orbit = settings.orbit;
		return this;

	}

	/**
	 * Clones this general settings instance.
	 *
	 * @return The cloned general settings.
	 */

	clone(): GeneralSettings {

		const clone = new GeneralSettings();
		return clone.copy(this);

	}

}
