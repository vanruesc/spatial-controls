import { EventDispatcher, Vector3 } from "three";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Translation settings.
 *
 * @group Settings
 */

export class TranslationSettings extends EventDispatcher<SettingsEventMap> {

	// #region Backing Data

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * @see {@link sensitivity}
	 */

	private _sensitivity: number;

	/**
	 * @see {@link boostMultiplier}
	 */

	private _boostMultiplier: number;

	/**
	 * @see {@link axisModifier}
	 */

	private _axisWeights: Vector3;

	/**
	 * @see {@link damping}
	 */

	private _damping: number;

	// #endregion

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		super();

		this._enabled = true;
		this._sensitivity = 1.0;
		this._boostMultiplier = 2.0;
		this._axisWeights = new Vector3(1, 1, 1);
		this._damping = 0.0;

	}

	/**
	 * Indicates whether positional translation is enabled.
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		this._enabled = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The translation sensitivity.
	 */

	get sensitivity(): number {

		return this._sensitivity;

	}

	set sensitivity(value: number) {

		this._sensitivity = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The translation boost multiplier.
	 */

	get boostMultiplier(): number {

		return this._boostMultiplier;

	}

	set boostMultiplier(value: number) {

		this._boostMultiplier = Math.max(value, 1.0);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Weights that influence movement along each axis.
	 */

	get axisWeights(): Vector3 {

		return this._axisWeights;

	}

	set axisWeights(value: Vector3) {

		this._axisWeights = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The damping factor. Range is [0.0, +Infinity]. Set to 0 to disable.
	 */

	get damping(): number {

		return this._damping;

	}

	set damping(value: number) {

		this._damping = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given translation settings.
	 *
	 * @param settings - Translation settings.
	 * @return This instance.
	 */

	copy(settings: TranslationSettings): TranslationSettings {

		this.enabled = settings.enabled;
		this.sensitivity = settings.sensitivity;
		this.boostMultiplier = settings.boostMultiplier;
		this.damping = settings.damping;

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

	fromJSON(json: TranslationSettings): TranslationSettings {

		this.enabled = json.enabled;
		this.sensitivity = json.sensitivity;
		this.boostMultiplier = json.boostMultiplier;
		this.damping = json.damping;

		if(json.axisWeights !== undefined) {

			this.axisWeights.copy(json.axisWeights);

		}

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
			sensitivity: this.sensitivity,
			boostMultiplier: this.boostMultiplier,
			axisWeights: this.axisWeights,
			damping: this.damping
		};

	}

}
