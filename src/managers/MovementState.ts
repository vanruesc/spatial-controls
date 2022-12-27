/**
 * A collection of movement flags.
 *
 * @group Managers
 */

export class MovementState {

	/**
	 * Movement to the left.
	 */

	left!: boolean;

	/**
	 * Movement to the right.
	 */

	right!: boolean;

	/**
	 * Forward motion.
	 */

	forward!: boolean;

	/**
	 * Backward motion.
	 */

	backward!: boolean;

	/**
	 * Ascension.
	 */

	up!: boolean;

	/**
	 * Descent.
	 */

	down!: boolean;

	/**
	 * Controls whether backward movement currently has priority.
	 */

	backwardBeforeForward!: boolean;

	/**
	 * Controls whether right movement currently has priority.
	 */

	rightBeforeLeft!: boolean;

	/**
	 * Controls whether up movement currently has priority.
	 */

	upBeforeDown!: boolean;

	/**
	 * Whether the boost multiplier should be used.
	 */

	boost!: boolean;

	/**
	 * Constructs a new movement state.
	 */

	constructor() {

		this.reset();

	}

	/**
	 * Indicates whether any flag is currently active.
	 */

	get active(): boolean {

		return (
			this.forward || this.backward ||
			this.left || this.right ||
			this.up || this.down
		);

	}

	/**
	 * Resets this state.
	 *
	 * @return This state.
	 */

	reset(): this {

		this.left = false;
		this.right = false;
		this.forward = false;
		this.backward = false;
		this.up = false;
		this.down = false;

		this.backwardBeforeForward = false;
		this.rightBeforeLeft = false;
		this.upBeforeDown = false;

		this.boost = false;

		return this;

	}

}
