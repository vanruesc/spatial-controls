import { RotationManager } from "../managers/RotationManager.js";
import { Strategy } from "./Strategy.js";

/**
 * A zoom strategy.
 *
 * @group Strategies
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
