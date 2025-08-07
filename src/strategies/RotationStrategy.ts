import { RotationControls } from "../core/RotationControls.js";
import { PointerBehaviour } from "../input/PointerBehaviour.js";
import { Strategy } from "./Strategy.js";

/**
 * A rotation strategy.
 *
 * @group Strategies
 */

export class RotationStrategy implements Strategy {

	/**
	 * The controls.
	 */

	private readonly controls: RotationControls;

	/**
	 * Constructs a new rotation strategy.
	 *
	 * @param controls - The controls.
	 */

	constructor(controls: RotationControls) {

		this.controls = controls;

	}

	execute(flag: boolean, event: Event): void {

		const behaviour = this.controls.settings.pointer.behaviour;
		const isMouse = (event.type === "mousedown" || event.type === "mouseup");

		if(isMouse && behaviour !== PointerBehaviour.DEFAULT) {

			this.controls.setPointerLocked();

		} else {

			this.controls.setRotationEnabled(flag);

		}

	}

}
