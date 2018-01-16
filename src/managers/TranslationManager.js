import { Vector3 } from "math-ds";
import { MovementState } from "./MovementState.js";
import * as axes from "../core/axes.js";

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v = new Vector3();

/**
 * A translation manager.
 */

export class TranslationManager {

	/**
	 * Constructs a new translation manager.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Quaternion} quaternion - A quaternion.
	 * @param {Vector3} target - A target.
	 * @param {Settings} settings - The settings.
	 */

	constructor(position, quaternion, target, settings) {

		/**
		 * The position that will be modified.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.position = position;

		/**
		 * The quaternion that will be modified.
		 *
		 * @type {Quaternion}
		 * @private
		 */

		this.quaternion = quaternion;

		/**
		 * A target.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.target = target;

		/**
		 * The settings.
		 *
		 * @type {Settings}
		 * @private
		 */

		this.settings = settings;

		/**
		 * The current movement state.
		 *
		 * @type {MovementState}
		 */

		this.movementState = new MovementState();

	}

	/**
	 * Translates a position by a specific distance along a given axis.
	 *
	 * @private
	 * @param {Vector3} axis - The axis.
	 * @param {Vector3} distance - The distance.
	 */

	translateOnAxis(axis, distance) {

		v.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);

		this.position.add(v);

		if(this.settings.general.orbit) {

			this.target.add(v);

		}

	}

	/**
	 * Modifies the position based on the current movement state and elapsed time.
	 *
	 * @private
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	translate(delta) {

		const sensitivity = this.settings.sensitivity;
		const state = this.movementState;

		const step = delta * sensitivity.translation;

		if(state.backward) {

			this.translateOnAxis(axes.z, step);

		} else if(state.forward) {

			this.translateOnAxis(axes.z, -step);

		}

		if(state.right) {

			this.translateOnAxis(axes.x, step);

		} else if(state.left) {

			this.translateOnAxis(axes.x, -step);

		}

		if(state.up) {

			this.translateOnAxis(axes.y, step);

		} else if(state.down) {

			this.translateOnAxis(axes.y, -step);

		}

	}

	/**
	 * Updates movement calculations based on time.
	 *
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	update(delta) {

		if(this.settings.translation.enabled) {

			this.translate(delta);

		}

	}

	/**
	 * Moves to the given position.
	 *
	 * @param {Vector3} position - The position.
	 * @return {DeltaControls} This instance.
	 */

	moveTo(position) {

		if(this.settings.general.orbit) {

			this.target.copy(position);

		} else {

			this.position.copy(position);

		}

		return this;

	}

}
