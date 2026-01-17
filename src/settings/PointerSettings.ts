import { EventTarget } from "synthetic-event";
import { PointerBehavior } from "../input/PointerBehavior.js";
import { PointerButton } from "../input/PointerButton.js";
import { SettingsEventMap } from "./SettingsEventMap.js";

/**
 * Pointer settings.
 *
 * @group Settings
 */

export class PointerSettings extends EventTarget<SettingsEventMap> {

	// #region Backing Data

	/**
	 * @see {@link sensitivity}
	 */

	private _sensitivity: number;

	/**
	 * @see {@link behavior}
	 */

	private _behavior: Map<PointerButton, PointerBehavior>;

	// #endregion

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		super();

		this._sensitivity = 1e-3;
		this._behavior = new Map();

	}

	/**
	 * Sets the sensitivity.
	 *
	 * This sensitivity acts as a baseline scale for pointer movement deltas.
	 *
	 * @defaultValue 1e-3
	 */

	get sensitivity(): number {

		return this._sensitivity;

	}

	set sensitivity(value: number) {

		this._sensitivity = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Defines the locking behavior of pointer behavior.
	 *
	 * All pointers use {@link PointerBehavior.DEFAULT} by default.
	 *
	 * @see {@link setBehavior} for changing the pointer behavior.
	 */

	private get behavior(): ReadonlyMap<PointerButton, PointerBehavior> {

		return this._behavior;

	}

	private set behavior(value: Map<PointerButton, PointerBehavior>) {

		this._behavior = value;

	}

	/**
	 * Returns the pointer behavior for a specific button.
	 *
	 * @param button - A pointer button.
	 * @return The behavior.
	 */

	getBehavior(button: PointerButton): PointerBehavior {

		return this._behavior.get(button) ?? PointerBehavior.DEFAULT;

	}

	/**
	 * Sets the pointer behavior for a specific button.
	 *
	 * @param button - The button.
	 * @param behavior - The behavior.
	 */

	setBehavior(button: PointerButton, behavior: PointerBehavior): void {

		this._behavior.set(button, behavior);
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: PointerSettings): PointerSettings {

		this.behavior = new Map(settings.behavior);
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

	fromJSON(json: string | PointerSettings): PointerSettings {

		if(typeof json === "string") {

			json = JSON.parse(json) as PointerSettings;

		}

		this.behavior = new Map(json.behavior);
		this.sensitivity = json.sensitivity;

		return this;

	}

	toJSON(): Record<string, unknown> {

		return {
			behaviour: Array.from(this.behavior.entries()),
			sensitivity: this.sensitivity
		};

	}

}
