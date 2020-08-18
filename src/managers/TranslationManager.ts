import { Quaternion, Vector3 } from "three";
import { MovementState } from "./MovementState";
import { Settings } from "../settings";
import * as axes from "../core/axes";

/**
 * A vector.
 *
 * @ignore
 */

const v = new Vector3();

/**
 * A translation manager.
 */

export class TranslationManager {

	/**
	 * The position that will be modified.
	 */

	private position: Vector3;

	/**
	 * The quaternion that will be modified.
	 */

	private quaternion: Quaternion;

	/**
	 * A target.
	 */

	private target: Vector3;

	/**
	 * The settings.
	 */

	private settings: Settings;

	/**
	 * The current movement state.
	 */

	movementState: MovementState;

	/**
	 * Constructs a new translation manager.
	 *
	 * @param position - A position.
	 * @param quaternion - A quaternion.
	 * @param target - A target.
	 * @param settings - The settings.
	 */

	constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings) {

		this.position = position;
		this.quaternion = quaternion;
		this.target = target;
		this.settings = settings;
		this.movementState = new MovementState();

	}

	/**
	 * Sets the position.
	 *
	 * @param position - A position.
	 * @return This manager.
	 */

	setPosition(position: Vector3): TranslationManager {

		this.position = position;
		return this;

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param quaternion - A quaternion.
	 * @return This manager.
	 */

	setQuaternion(quaternion: Quaternion): TranslationManager {

		this.quaternion = quaternion;
		return this;

	}

	/**
	 * Sets the target.
	 *
	 * @param target - A target.
	 * @return This manager.
	 */

	setTarget(target: Vector3): TranslationManager {

		this.target = target;
		return this;

	}

	/**
	 * Translates a position by a specific distance along a given axis.
	 *
	 * @param axis - The axis.
	 * @param distance - The distance.
	 */

	private translateOnAxis(axis: Vector3, distance: number) {

		v.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
		this.position.add(v);

		if(this.settings.general.orbit) {

			this.target.add(v);

		}

	}

	/**
	 * Modifies the position based on the current movement state and elapsed time.
	 *
	 * @param deltaTime - The time since the last update in seconds.
	 */

	private translate(deltaTime: number): void {

		const sensitivity = this.settings.sensitivity;
		const state = this.movementState;

		const step = deltaTime * sensitivity.translation;

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
	 * @param deltaTime - The time since the last update in seconds.
	 */

	update(deltaTime: number): void {

		if(this.settings.translation.enabled) {

			this.translate(deltaTime);

		}

	}

	/**
	 * Moves to the given position.
	 *
	 * @param position - The position.
	 * @return This instance.
	 */

	moveTo(position: Vector3): TranslationManager {

		if(this.settings.general.orbit) {

			this.target.copy(position);

		} else {

			this.position.copy(position);

		}

		return this;

	}

}
