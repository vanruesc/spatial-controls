/**
 * A collection of movement flags.
 *
 * @group Managers
 */

import { Vector3 } from "three";
import { Direction } from "../core/Direction.js";

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
	 * Changes the movement state.
	 *
	 * @param active - Indicates whether the respective movement state should be activated or deactivated.
	 */

	setActive(direction: Direction, active: boolean): void {

		switch(direction) {

			case Direction.BACKWARD:
				this.backward = active;
				this.backwardBeforeForward = active;
				break;

			case Direction.FORWARD:
				this.forward = active;
				this.backwardBeforeForward = !active;
				break;

			case Direction.RIGHT:
				this.right = active;
				this.rightBeforeLeft = active;
				break;

			case Direction.LEFT:
				this.left = active;
				this.rightBeforeLeft = !active;
				break;

			case Direction.UP:
				this.up = active;
				this.upBeforeDown = active;
				break;

			case Direction.DOWN:
				this.down = active;
				this.upBeforeDown = !active;
				break;

		}

	}

	/**
	 * Converts this movement state into a vector.
	 *
	 * @param v - A target vector.
	 * @return The vector.
	 */

	toVector3(v: Vector3): Vector3 {

		v.setScalar(0.0);

		if(!this.active) {

			return v;

		}

		if(this.right && this.left) {

			v.x = this.rightBeforeLeft ? 1 : -1;

		} else if(this.right) {

			v.x = 1;

		} else if(this.left) {

			v.x = -1;

		}

		if(this.up && this.down) {

			v.y = this.upBeforeDown ? 1 : -1;

		} else if(this.up) {

			v.y = 1;

		} else if(this.down) {

			v.y = -1;

		}

		if(this.backward && this.forward) {

			v.z = this.backwardBeforeForward ? 1 : -1;

		} else if(this.backward) {

			v.z = 1;

		} else if(this.forward) {

			v.z = -1;

		}

		return v;

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
