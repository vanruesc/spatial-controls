import { EventDispatcher } from "three";
import { PointerBehaviour } from "../input";

/**
 * JSON representation of pointer settings.
 *
 * @ignore
 */

export interface PointerSettingsJSON {

	behaviour: PointerBehaviour;
	sensitivity: number;

}

/**
 * Pointer settings.
 */

export class PointerSettings extends EventDispatcher {

	/**
	 * The pointer behaviour.
	 */

	private behaviour: PointerBehaviour;

	/**
	 * The baseline pointer sensitivity.
	 */

	private sensitivity: number;

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		super();

		this.behaviour = PointerBehaviour.DEFAULT;
		this.sensitivity = 1e-3;

	}

	/**
	 * Returns the pointer behaviour.
	 *
	 * @return The pointer behaviour.
	 */

	getBehaviour(): PointerBehaviour {

		return this.behaviour;

	}

	/**
	 * Sets the pointer behaviour.
	 *
	 * @param value - The behaviour.
	 */

	setBehaviour(value: PointerBehaviour): void {

		this.behaviour = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Returns the sensitivity. The default is 1e-3.
	 *
	 * @return The sensitivity.
	 */

	getSensitivity(): number {

		return this.sensitivity;

	}

	/**
	 * Sets the sensitivity.
	 *
	 * This sensitivity acts as a baseline scale for pointer movement deltas.
	 *
	 * @param value - The sensitivity.
	 */

	setSensitivity(value: number): void {

		this.sensitivity = value;
		this.dispatchEvent({ type: "change" });

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: PointerSettings): PointerSettings {

		this.behaviour = settings.getBehaviour();
		this.sensitivity = settings.getSensitivity();

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

	fromJSON(json: PointerSettingsJSON): PointerSettings {

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
