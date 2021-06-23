import { EventDispatcher } from "three";

/**
 * JSON representation of translation settings.
 *
 * @ignore
 */

export interface TranslationSettingsJSON {

	enabled: boolean;
	sensitivity: number;
	boostMultiplier: number;

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
	 * The translation boost multiplier.
	 */

	private boostMultiplier: number;

	/**
	 * Whether the boost multiplier should be used.
	 */

	private boost: boolean;

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		super();

		this.enabled = true;
		this.sensitivity = 1.0;
		this.boostMultiplier = 2.0;
		this.boost = false;

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
	 * Returns the translation boost multiplier.
	 *
	 * @return The multiplier.
	 */

	getBoostMultiplier() {

		return this.boostMultiplier;

	}

	/**
	 * Sets the translation boost multiplier.
	 *
	 * @param value - The multiplier. Must be >= 1.
	 */

	setBoostMultiplier(value: number) {

		this.boostMultiplier = Math.max(value, 1.0);
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
		this.boostMultiplier = settings.getBoostMultiplier();

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
		this.boostMultiplier = json.boostMultiplier;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
			sensitivity: this.sensitivity,
			boostMultiplier: this.boostMultiplier
		};

	}

}
