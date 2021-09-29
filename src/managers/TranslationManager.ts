import {
	Event as Event3,
	EventDispatcher,
	Quaternion,
	Vector3
} from "three";

import { MovementState } from "./MovementState";
import { ControlMode } from "../core";
import { Settings } from "../settings";
import { ScalarDamper } from "../math";
import { Updatable } from "../core";
import { MILLISECONDS_TO_SECONDS } from "../core/time";
import * as axes from "../core/axes";

const v = new Vector3();

/**
 * A translation manager.
 */

export class TranslationManager extends EventDispatcher implements Updatable {

	/**
	 * The current position.
	 */

	private position: Vector3;

	/**
	 * The quaternion.
	 */

	private quaternion: Quaternion;

	/**
	 * The current target.
	 */

	private target: Vector3;

	/**
	 * The settings.
	 */

	private settings: Settings;

	/**
	 * The current movement state.
	 */

	private movementState: MovementState;

	/**
	 * The current velocity.
	 */

	private velocity0: Vector3;

	/**
	 * The target velocity.
	 */

	private velocity1: Vector3;

	/**
	 * Scalar dampers.
	 */

	private scalarDampers: ScalarDamper[];

	/**
	 * A timestamp.
	 */

	private timestamp: number;

	/**
	 * A reusable update event.
	 */

	private updateEvent: Event3;

	/**
	 * Constructs a new translation manager.
	 *
	 * @param position - The position.
	 * @param quaternion - The quaternion.
	 * @param target - The target.
	 * @param settings - The settings.
	 */

	constructor(position: Vector3, quaternion: Quaternion, target: Vector3,
		settings: Settings) {

		super();

		this.position = position;
		this.quaternion = quaternion;
		this.target = target;
		this.settings = settings;
		this.movementState = new MovementState();
		this.velocity0 = new Vector3();
		this.velocity1 = new Vector3();
		this.timestamp = 0;
		this.updateEvent = { type: "update" };

		this.scalarDampers = [
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		];

	}

	/**
	 * Returns the movement state.
	 *
	 * @return The movement state.
	 */

	getMovementState(): MovementState {

		return this.movementState;

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
	 * Resets the current velocity.
	 *
	 * @return This manager.
	 */

	resetVelocity(): void {

		this.velocity0.set(0, 0, 0);
		this.velocity1.set(0, 0, 0);

		for(const scalarDamper of this.scalarDampers) {

			scalarDamper.resetVelocity();

		}

	}

	/**
	 * Translates a position by a specific distance along a given axis.
	 *
	 * @param axis - The axis.
	 * @param distance - The distance.
	 */

	private translateOnAxis(axis: Vector3, distance: number): void {

		v.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
		this.position.add(v);

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			// Move the target together with the position.
			this.target.add(v);

		}

	}

	/**
	 * Modifies the position based on the current movement state and elapsed time.
	 */

	private translate(): void {

		const v = this.velocity0;

		if(v.z !== 0.0) {

			this.translateOnAxis(axes.z, v.z);

		}

		if(v.y !== 0.0) {

			this.translateOnAxis(axes.y, v.y);

		}

		if(v.x !== 0.0) {

			this.translateOnAxis(axes.x, v.x);

		}

		this.dispatchEvent(this.updateEvent);

	}

	/**
	 * Moves to the given position.
	 *
	 * @param p - The position.
	 * @return This instance.
	 */

	moveTo(position: Vector3): TranslationManager {

		if(this.settings.general.getMode() === ControlMode.THIRD_PERSON) {

			v.subVectors(position, this.target);
			this.target.copy(position);
			this.position.add(v);

		} else {

			this.position.copy(position);

		}

		this.dispatchEvent(this.updateEvent);

		return this;

	}

	update(timestamp: number): void {

		const settings = this.settings;

		if(settings.translation.isEnabled()) {

			const state = this.movementState;
			const translation = this.settings.translation;
			const boost = state.boost ? translation.getBoostMultiplier() : 1.0;
			const sensitivity = translation.getSensitivity();
			const scalarDampers = this.scalarDampers;

			const v0 = this.velocity0;
			const v1 = this.velocity1;

			const elapsed = (timestamp - this.timestamp) * MILLISECONDS_TO_SECONDS;
			const speed = elapsed * sensitivity * boost;

			v1.setScalar(0.0);

			if(state.active) {

				if(state.backward && state.forward) {

					v1.z = state.backwardBeforeForward ? speed : -speed;

				} else if(state.backward) {

					v1.z = speed;

				} else if(state.forward) {

					v1.z = -speed;

				}

				if(state.right && state.left) {

					v1.x = state.rightBeforeLeft ? speed : -speed;

				} else if(state.right) {

					v1.x = speed;

				} else if(state.left) {

					v1.x = -speed;

				}

				if(state.up && state.down) {

					v1.y = state.upBeforeDown ? speed : -speed;

				} else if(state.up) {

					v1.y = speed;

				} else if(state.down) {

					v1.y = -speed;

				}

			}

			if(!v0.equals(v1)) {

				if(translation.getDamping() > 0.0) {

					const damping = translation.getDamping();
					const omega = ScalarDamper.calculateOmega(damping);
					const exp = ScalarDamper.calculateExp(damping, omega, elapsed);

					v0.x = scalarDampers[0]
						.interpolate(v0.x, v1.x, damping, omega, exp, elapsed);

					v0.y = scalarDampers[1]
						.interpolate(v0.y, v1.y, damping, omega, exp, elapsed);

					v0.z = scalarDampers[2]
						.interpolate(v0.z, v1.z, damping, omega, exp, elapsed);

				} else {

					v0.copy(v1);

				}

				this.translate();

			}

		}

		this.timestamp = timestamp;

	}

}
