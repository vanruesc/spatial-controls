import { EventTarget } from "synthetic-event";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Dolly settings.
 *
 * @group Settings
 */

export class DollySettings extends EventTarget<SettingsEventMap> {

	// #region Backing Data

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * @see {@link inverted}
	 */

	private _inverted: boolean;

	/**
	 * @see {@link minDistance}
	 */

	private _minDistance: number;

	/**
	 * @see {@link maxDistance}
	 */

	private _maxDistance: number;

	/**
	 * @see {@link sensitivity}
	 */

	private _sensitivity: number;

	/**
	 * @see {@link damping}
	 */

	private _damping: number;

	// #endregion

	/**
	 * Constructs new dolly settings.
	 */

	constructor() {

		super();

		this._enabled = true;
		this._inverted = false;
		this._minDistance = 1e-6;
		this._maxDistance = Number.POSITIVE_INFINITY;
		this._sensitivity = 1.0;
		this._damping = 0.0;

	}

	/**
	 * Indicates whether zooming is enabled.
	 *
	 * @defaultValue true
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		this._enabled = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Indicates whether the dolly controls should be inverted.
	 *
	 * @defaultValue false
	 */

	get inverted(): boolean {

		return this._inverted;

	}

	set inverted(value: boolean) {

		this._inverted = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The minimum dolly distance.
	 *
	 * @defaultValue 1e-6
	 */

	get minDistance(): number {

		return this._minDistance;

	}

	set minDistance(value: number) {

		this._minDistance = Math.min(
			Math.max(value, 1e-6),
			Number.POSITIVE_INFINITY
		);

		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The maximum dolly distance.
	 *
	 * @defaultValue {@link Number.POSITIVE_INFINITY}
	 */

	get maxDistance(): number {

		return this._maxDistance;

	}

	set maxDistance(value: number) {

		this._maxDistance = Math.min(
			Math.max(value, this._minDistance),
			Number.POSITIVE_INFINITY
		);

		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Sets the minimum and maximum dolly distance.
	 *
	 * @param min - The minimum distance.
	 * @param max - The maximum distance.
	 */

	setRange(min: number, max: number): void {

		this._minDistance = min;
		this._maxDistance = max;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The dolly sensitivity.
	 *
	 * @defaultValue 1.0
	 */

	get sensitivity(): number {

		return this._sensitivity;

	}

	set sensitivity(value: number) {

		this._sensitivity = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * The damping factor.
	 *
	 * @defaultValue 0.0
	 */

	get damping(): number {

		return this._damping;

	}

	set damping(value: number) {

		this._damping = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given dolly settings.
	 *
	 * @param settings - dolly settings.
	 * @return This instance.
	 */

	copy(settings: DollySettings): this {

		this.enabled = settings.enabled;
		this.inverted = settings.inverted;
		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;
		this.sensitivity = settings.sensitivity;
		this.damping = settings.damping;

		return this;

	}

	/**
	 * Clones this dolly settings instance.
	 *
	 * @return The cloned dolly settings.
	 */

	clone(): DollySettings {

		const clone = new DollySettings();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: string | DollySettings): this {

		if(typeof json === "string") {

			json = JSON.parse(json) as DollySettings;

		}

		this.enabled = json.enabled;
		this.inverted = json.inverted;
		this.minDistance = json.minDistance;
		this.maxDistance = json.maxDistance || Number.POSITIVE_INFINITY;
		this.sensitivity = json.sensitivity;
		this.damping = json.damping;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			enabled: this.enabled,
			inverted: this.inverted,
			minDistance: this.minDistance,
			maxDistance: this.maxDistance,
			sensitivity: this.sensitivity,
			damping: this.damping
		};

	}

}
