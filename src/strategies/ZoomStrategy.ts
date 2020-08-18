import { Strategy } from "./Strategy";
import { RotationManager } from "../managers";

/**
 * A zoom strategy.
 */

export class ZoomStrategy implements Strategy {

	/**
	 * A rotation manager.
	 */

	private rotationManager: RotationManager;

	/**
	 * Indicates whether this zoom strategy should zoom in.
	 */

	private zoomIn: boolean;

	/**
	 * Constructs a new zoom strategy.
	 *
	 * @param rotationManager - A rotation manager.
	 * @param zoomIn - Whether this strategy should zoom in.
	 */

	constructor(rotationManager: RotationManager, zoomIn: boolean) {

		this.rotationManager = rotationManager;
		this.zoomIn = zoomIn;

	}

	execute(flag: boolean): void {

		// Only act on key down events.
		if(flag) {

			this.rotationManager.zoom(this.zoomIn ? -1 : 1);

		}

	}

}
