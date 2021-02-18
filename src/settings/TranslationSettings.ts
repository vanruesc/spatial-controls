import { EventDispatcher } from "three";

/**
 * JSON representation of translation settings.
 *
 * @ignore
 */

export interface TranslationSettingsJSON {

	enabled: boolean;
	sensitivity: number;

}

/**
 * Translation settings.
 */

export class TranslationSettings extends EventDispatcher {

	/**
	 * Whether positional translation is enabled.
	 */

	private enabled: boolean;

	/**
	 * The translation sensitivity.
	 */

	private sensitivity: number;

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		super();

		this.enabled = true;
		this.sensitivity = 1.0;

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
	 * Returns the translation sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getSensitivity() {

		return this.sensitivity;

	}

	/**
	 * Sets the translation sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setSensitivity(value: number) {

		this.sensitivity = value;
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
		this.sensitivity = settings.getSensitivity();

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

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: TranslationSettingsJSON): TranslationSettings {

		this.enabled = json.enabled;
		this.sensitivity = json.sensitivity;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
			sensitivity: this.sensitivity
		};

	}

}
