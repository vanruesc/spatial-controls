import { Strategy } from "./Strategy.js";

/**
 * A movement strategy.
 */

export class MovementStrategy extends Strategy {

	/**
	 * Constructs a new movement strategy.
	 *
	 * @param {MovementState} movementState - A movement state.
	 * @param {Direction} direction - A direction.
	 */

	constructor(movementState, direction) {

		super();

		/**
		 * A movement state.
		 *
		 * @type {MovementState}
		 * @private
		 */

		this.movementState = movementState;

		/**
		 * A direction.
		 *
		 * @type {Direction}
		 * @private
		 */

		this.direction = direction;

	}

	/**
	 * Executes this strategy.
	 *
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		const state = this.movementState;

		switch(this.direction) {

			case Direction.FORWARD:
				state.forward = flag;
				break;

			case Direction.LEFT:
				state.left = flag;
				break;

			case Direction.BACKWARD:
				state.backward = flag;
				break;

			case Direction.RIGHT:
				state.right = flag;
				break;

			case Direction.DOWN:
				state.down = flag;
				break;

			case Direction.UP:
				state.up = flag;
				break;

		}

	}

}
/**
 * An enumeration of movement directions.
 *
 * @type {Object}
 * @property {Number} FORWARD - Move forward.
 * @property {Number} LEFT - Move left.
 * @property {Number} BACKWARD - Move backward.
 * @property {Number} RIGHT - Move right.
 * @property {Number} DOWN - Move down.
 * @property {Number} UP - Move up.
 */

export const Direction = {

	FORWARD: 0,
	LEFT: 1,
	BACKWARD: 2,
	RIGHT: 3,
	DOWN: 4,
	UP: 5

};
