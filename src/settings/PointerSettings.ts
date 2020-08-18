/**
 * Pointer settings.
 */

export class PointerSettings {

	/**
	 * Whether the pointer buttons must be held down to have an effect.
	 *
	 * This setting only applies when the pointer is locked.
	 */

	hold: boolean;

	/**
	 * Whether the pointer should be locked on click events.
	 */

	lock: boolean;

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		this.hold = false;
		this.lock = true;

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: PointerSettings): PointerSettings {

		this.hold = settings.hold;
		this.lock = settings.lock;

		return this;

	}

	/**
	 * Clones this pointer settings instance.
	 *
	 * @return The cloned pointer settings.
	 */

	clone(): PointerSettings {

		const clone = new PointerSettings();
		return clone.copy(this);

	}

}
