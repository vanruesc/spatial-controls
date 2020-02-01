/**
 * Translation settings.
 */

export class TranslationSettings {

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		/**
		 * Whether positional translation is enabled.
		 *
		 * @type {Boolean}
		 */

		this.enabled = true;

	}

	/**
	 * Copies the given translation settings.
	 *
	 * @param {TranslationSettings} settings - Translation settings.
	 * @return {TranslationSettings} This instance.
	 */

	copy(settings) {

		this.enabled = settings.enabled;

		return this;

	}

	/**
	 * Clones this translation settings instance.
	 *
	 * @return {TranslationSettings} The cloned translation settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
