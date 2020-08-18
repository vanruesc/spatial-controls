/**
 * Translation settings.
 */

export class TranslationSettings {

	/**
	 * Whether positional translation is enabled.
	 */

	enabled: boolean;

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		this.enabled = true;

	}

	/**
	 * Copies the given translation settings.
	 *
	 * @param settings - Translation settings.
	 * @return This instance.
	 */

	copy(settings: TranslationSettings): TranslationSettings {

		this.enabled = settings.enabled;
		return this;

	}

	/**
	 * Clones this translation settings instance.
	 *
	 * @return The cloned translation settings.
	 */

	clone(): TranslationSettings {

		const clone = new TranslationSettings();
		return clone.copy(this);

	}

}
