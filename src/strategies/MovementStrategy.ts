import { Direction } from "../core/Direction.js";
import { MovementState } from "../managers/MovementState.js";
import { Strategy } from "./Strategy.js";

/**
 * A movement strategy.
 *
 * @group Strategies
 */

export class MovementStrategy implements Strategy {

	/**
	 * A movement state.
	 */

	private movementState: MovementState;

	/**
	 * A direction.
	 */

	private direction: Direction;

	/**
	 * Constructs a new movement strategy.
	 *
	 * @param movementState - A movement state.
	 * @param direction - A direction.
	 */

	constructor(movementState: MovementState, direction: Direction) {

		this.movementState = movementState;
		this.direction = direction;

	}

	execute(flag: boolean): void {

		const state = this.movementState;

		switch(this.direction) {

			case Direction.BACKWARD:
				state.backward = flag;
				state.backwardBeforeForward = flag;
				break;

			case Direction.FORWARD:
				state.forward = flag;
				state.backwardBeforeForward = !flag;
				break;

			case Direction.RIGHT:
				state.right = flag;
				state.rightBeforeLeft = flag;
				break;

			case Direction.LEFT:
				state.left = flag;
				state.rightBeforeLeft = !flag;
				break;

			case Direction.UP:
				state.up = flag;
				state.upBeforeDown = flag;
				break;

			case Direction.DOWN:
				state.down = flag;
				state.upBeforeDown = !flag;
				break;

		}

	}

}
