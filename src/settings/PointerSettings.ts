import { EventDispatcher } from "three";
import { PointerBehaviour } from "../core";

/**
 * Pointer settings.
 */

export class PointerSettings extends EventDispatcher {

	/**
	 * The pointer behaviour.
	 */

	private behaviour: PointerBehaviour;

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		super();

		this.behaviour = PointerBehaviour.DEFAULT;

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
	 * Copies the given pointer settings.
	 *
	 * @param settings - Pointer settings.
	 * @return This instance.
	 */

	copy(settings: PointerSettings): PointerSettings {

		this.behaviour = settings.getBehaviour();
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

}
