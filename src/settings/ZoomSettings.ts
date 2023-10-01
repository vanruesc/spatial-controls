import { EventDispatcher } from "three";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Zoom settings.
 *
 * @group Settings
 */

export class ZoomSettings extends EventDispatcher<SettingsEventMap> {

	/**
	 * Triggers when the settings are changed.
	 *
	 * @event
	 */

	static readonly EVENT_CHANGE = "change";

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

	/**
	 * Constructs new zoom settings.
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
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		this._enabled = value;
		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * Indicates whether the zoom controls should be inverted.
	 */

	get inverted(): boolean {

		return this._inverted;

	}

	set inverted(value: boolean) {

		this._inverted = value;
		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * The minimum zoom distance.
	 */

	get minDistance(): number {

		return this._minDistance;

	}

	set minDistance(value: number) {

		this._minDistance = Math.min(
			Math.max(value, 1e-6),
			Number.POSITIVE_INFINITY
		);

		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * The maximum zoom distance.
	 */

	get maxDistance(): number {

		return this._maxDistance;

	}

	set maxDistance(value: number) {

		this._maxDistance = Math.min(
			Math.max(value, this._minDistance),
			Number.POSITIVE_INFINITY
		);

		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * Sets the minimum and maximum zoom distance.
	 *
	 * @param min - The minimum distance.
	 * @param max - The maximum distance.
	 */

	setRange(min: number, max: number): void {

		this._minDistance = min;
		this._maxDistance = max;
		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * The zoom sensitivity.
	 */

	get sensitivity(): number {

		return this._sensitivity;

	}

	set sensitivity(value: number) {

		this._sensitivity = value;
		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * The damping factor.
	 */

	get damping(): number {

		return this._damping;

	}

	set damping(value: number) {

		this._damping = value;
		this.dispatchEvent({ type: ZoomSettings.EVENT_CHANGE });

	}

	/**
	 * Copies the given zoom settings.
	 *
	 * @param settings - Zoom settings.
	 * @return This instance.
	 */

	copy(settings: ZoomSettings): ZoomSettings {

		this.enabled = settings.enabled;
		this.inverted = settings.inverted;
		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;
		this.sensitivity = settings.sensitivity;
		this.damping = settings.damping;

		return this;

	}

	/**
	 * Clones this zoom settings instance.
	 *
	 * @return The cloned zoom settings.
	 */

	clone(): ZoomSettings {

		const clone = new ZoomSettings();
		return clone.copy(this);

	}

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: ZoomSettings): ZoomSettings {

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
