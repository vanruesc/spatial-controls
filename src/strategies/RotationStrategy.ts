import { SpatialControls } from "../core";
import { PointerBehaviour } from "../input";
import { Strategy } from "./Strategy";

/**
 * A rotation strategy.
 */

export class RotationStrategy implements Strategy {

	/**
	 * The controls.
	 */

	private controls: SpatialControls;

	/**
	 * Constructs a new rotation strategy.
	 *
	 * @param controls - The controls.
	 */

	constructor(controls: SpatialControls) {

		this.controls = controls;

	}

	execute(flag: boolean, event: Event): void {

		const behaviour = this.controls.settings.pointer.getBehaviour();
		const isMouse = (event.type === "mousedown" || event.type === "mouseup");

		if(isMouse && behaviour !== PointerBehaviour.DEFAULT) {

			this.controls.setPointerLocked();

		} else {

			this.controls.setRotationEnabled(flag);

		}

	}

}
