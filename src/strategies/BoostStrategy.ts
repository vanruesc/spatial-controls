import { MovementState } from "../managers";
import { Strategy } from "./Strategy";

/**
 * A boost strategy.
 */

export class BoostStrategy implements Strategy {

	/**
	 * A movement state.
	 */

	private movementState: MovementState;

	/**
	 * Constructs a new boost strategy.
	 *
	 * @param movementState - A movement state.
	 */

	constructor(movementState: MovementState) {

		this.movementState = movementState;

	}

	execute(flag: boolean): void {

		this.movementState.boost = flag;

	}

}
