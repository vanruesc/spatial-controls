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
		 * This setting only applies when the pointer is locked.
		 *
		 * @type {Boolean}
		 */

		this.hold = false;

		/**
		 * Whether the pointer should be locked on click events.
		 *
		 * @type {Boolean}
		 */

		this.lock = true;

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param {PointerSettings} settings - Pointer settings.
	 * @return {PointerSettings} This instance.
	 */

	copy(settings) {

		this.hold = settings.hold;
		this.lock = settings.lock;

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
