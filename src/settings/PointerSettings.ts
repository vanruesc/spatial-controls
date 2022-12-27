import { EventDispatcher } from "three";
import { PointerBehaviour } from "../input/PointerBehaviour.js";

/**
 * Pointer settings.
 *
 * @group Settings
 */

export class PointerSettings extends EventDispatcher {

	/**
	 * Triggers when the settings are changed.
	 *
	 * @event
	 */

	static readonly EVENT_CHANGE = "change";

	/**
	 * @see {@link behaviour}
	 */

	private _behaviour: PointerBehaviour;

	/**
	 * @see {@link sensitivity}
	 */

	private _sensitivity: number;

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		super();

		this._behaviour = PointerBehaviour.DEFAULT;
		this._sensitivity = 1e-3;

	}

	/**
	 * The pointer behaviour.
	 */

	get behaviour(): PointerBehaviour {

		return this._behaviour;

	}

	set behaviour(value: PointerBehaviour) {

		this._behaviour = value;
		this.dispatchEvent({ type: PointerSettings.EVENT_CHANGE });

	}

	/**
	 * Sets the sensitivity.
	 *
	 * This sensitivity acts as a baseline scale for pointer movement deltas. Default is `1e-3`.
	 */

	get sensitivity(): number {

		return this._sensitivity;

	}

	set sensitivity(value: number) {

		this._sensitivity = value;
		this.dispatchEvent({ type: PointerSettings.EVENT_CHANGE });

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: PointerSettings): PointerSettings {

		this.behaviour = settings.behaviour;
		this.sensitivity = settings.sensitivity;

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

	/**
	 * Copies the given JSON data.
	 *
	 * @param json - The JSON data.
	 * @return This instance.
	 */

	fromJSON(json: PointerSettings): PointerSettings {

		this.behaviour = json.behaviour;
		this.sensitivity = json.sensitivity;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			behaviour: this.behaviour,
			sensitivity: this.sensitivity
		};

	}

}
