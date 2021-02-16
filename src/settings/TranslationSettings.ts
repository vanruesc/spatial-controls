import { EventDispatcher } from "three";

/**
 * Translation settings.
 */

export class TranslationSettings extends EventDispatcher {

	/**
	 * Whether positional translation is enabled.
	 */

	private enabled: boolean;

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		super();

		this.enabled = true;

	}

	/**
	 * Indicates whether zooming is enabled.
	 *
	 * @return Whether zooming is enabled.
	 */

	isEnabled(): boolean {

		return this.enabled;

	}

	/**
	 * Enables or disables zooming.
	 *
	 * @param value - The value.
	 */

	setEnabled(value: boolean): void {

		this.enabled = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given translation settings.
	 *
	 * @param settings - Translation settings.
	 * @return This instance.
	 */

	copy(settings: TranslationSettings): TranslationSettings {

		this.enabled = settings.isEnabled();
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
