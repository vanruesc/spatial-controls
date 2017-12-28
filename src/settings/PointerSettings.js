/**
 * Pointer settings.
 */

export class PointerSettings {

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		/**
		 * Whether the pointer buttons must be held down to have an effect.
		 *
		 * @type {Boolean}
		 */

		this.hold = false;

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param {PointerSettings} settings - Pointer settings.
	 * @return {PointerSettings} This instance.
	 */

	copy(settings) {

		this.hold = settings.hold;

		return this;

	}

	/**
	 * Clones this pointer settings instance.
	 *
	 * @return {PointerSettings} The cloned pointer settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
