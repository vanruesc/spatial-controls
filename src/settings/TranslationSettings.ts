import { EventDispatcher } from "three";

/**
 * JSON representation of translation settings.
 *
 * @ignore
 */

export interface TranslationSettingsJSON {

	enabled: boolean;
	boost: boolean;
	sensitivity: number;
	boostSensitivity: number;

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
	 * Whether the boost sensitivity should be used.
	 */

	private boost: boolean;

	/**
	 * The translation sensitivity.
	 */

	private sensitivity: number;

	/**
	 * The translation boost sensitivity.
	 */

	private boostSensitivity: number;

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		super();

		this.enabled = true;
		this.boost = false;
		this.sensitivity = 1.0;
		this.boostSensitivity = 2.0;

	}

	/**
	 * Indicates whether translation is enabled.
	 *
	 * @return Whether translation is enabled.
	 */

	isEnabled(): boolean {

		return this.enabled;

	}

	/**
	 * Enables or disables translation.
	 *
	 * @param value - The value.
	 */

	setEnabled(value: boolean): void {

		this.enabled = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether translation boost is active.
	 *
	 * @return Whether translation is enabled.
	 */

	isBoostActive(): boolean {

		return this.boost;

	}

	/**
	 * Enables or disables translation boost.
	 *
	 * @param value - The value.
	 */

	setBoost(value: boolean): void {

		this.boost = value;
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
	 * Returns the translation boost sensitivity.
	 *
	 * @return The sensitivity.
	 */

	getBoostSensitivity() {

		return this.boostSensitivity;

	}

	/**
	 * Sets the translation boost sensitivity.
	 *
	 * @param value - The sensitivity.
	 */

	setBoostSensitivity(value: number) {

		this.boostSensitivity = value;
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
		this.boost = settings.isBoostActive();
		this.sensitivity = settings.getSensitivity();
		this.boostSensitivity = settings.getBoostSensitivity();

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
		this.boost = json.boost;
		this.sensitivity = json.sensitivity;
		this.boostSensitivity = json.boostSensitivity;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
			boost: this.boost,
			sensitivity: this.sensitivity,
			boostSensitivity: this.boostSensitivity
		};

	}

}
