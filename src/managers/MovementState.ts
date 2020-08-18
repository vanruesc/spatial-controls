/**
 * A collection of movement flags.
 */

export class MovementState {

	/**
	 * Movement to the left.
	 */

	left: boolean;

	/**
	 * Movement to the right.
	 */

	right: boolean;

	/**
	 * Forward motion.
	 */

	forward: boolean;

	/**
	 * Backward motion.
	 */

	backward: boolean;

	/**
	 * Ascension.
	 */

	up: boolean;

	/**
	 * Descent.
	 */

	down: boolean;

	/**
	 * Constructs a new movement state.
	 */

	constructor() {

		this.reset();

	}

	/**
	 * Resets this state.
	 *
	 * @return This state.
	 */

	reset(): MovementState {

		this.left = false;
		this.right = false;
		this.forward = false;
		this.backward = false;
		this.up = false;
		this.down = false;

		return this;

	}

}
