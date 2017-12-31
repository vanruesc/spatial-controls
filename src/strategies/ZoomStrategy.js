import { Strategy } from "./Strategy.js";

/**
 * A zoom strategy.
 */

export class ZoomStrategy extends Strategy {

	/**
	 * Constructs a new zoom strategy.
	 *
	 * @param {RotationManager} rotationManager - A rotation manager.
	 * @param {Boolean} zoomIn - Whether this strategy should zoom in.
	 */

	constructor(rotationManager, zoomIn) {

		super();

		/**
		 * A rotation manager.
		 *
		 * @type {RotationManager}
		 * @private
		 */

		this.rotationManager = rotationManager;

		/**
		 * Whether this strategy should zoom in.
		 *
		 * @type {Boolean}
		 * @private
		 */

		this.zoomIn = zoomIn;

	}

	/**
	 * Executes this strategy.
	 *
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		// Only act on key down events.
		if(flag) {

			this.rotationManager.zoom(this.zoomIn ? -1 : 1);

		}

	}

}
