import { MovementState } from "../managers/MovementState.js";
import { Strategy } from "./Strategy.js";

/**
 * A boost strategy.
 *
 * @group Strategies
 */

export class BoostStrategy implements Strategy {

	/**
	 * A movement state.
	 */

	private readonly movementState: MovementState;

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
