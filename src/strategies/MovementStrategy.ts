import { Direction } from "../core";
import { MovementState } from "../managers";
import { Strategy } from "./Strategy";

/**
 * A movement strategy.
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
