import { Event as Event3, EventDispatcher, Quaternion, Vector3 } from "three";
import { MovementState } from "./MovementState.js";
import { ControlMode } from "../core/ControlMode.js";
import { Settings } from "../settings/Settings.js";
import { ScalarDamper } from "../math/ScalarDamper.js";
import { Updatable } from "../core/Updatable.js";
import { MILLISECONDS_TO_SECONDS } from "../core/time.js";
import * as axes from "../core/axes.js";

const v = new Vector3();

/**
 * A translation manager.
 *
 * @group Managers
 */

export class TranslationManager extends EventDispatcher implements Updatable {

	/**
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

	/**
	 * @see {@link position}
	 */

	private _position: Vector3;

	/**
	 * @see {@link quaternion}
	 */

	private _quaternion: Quaternion;

	/**
	 * @see {@link target}
	 */

	private _target: Vector3;

	/**
	 * The settings.
	 */

	private settings: Settings;

	/**
	 * The movement state.
	 */

	readonly movementState: MovementState;

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

	constructor(position: Vector3, quaternion: Quaternion, target: Vector3, settings: Settings) {

		super();

		this._position = position;
		this._quaternion = quaternion;
		this._target = target;

		this.settings = settings;
		this.movementState = new MovementState();
		this.velocity0 = new Vector3();
		this.velocity1 = new Vector3();
		this.timestamp = 0;
		this.updateEvent = { type: TranslationManager.EVENT_UPDATE };

		this.scalarDampers = [
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		];

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this._position;

	}

	set position(value: Vector3) {

		this._position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this._quaternion;

	}

	set quaternion(value: Quaternion) {

		this._quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this._target;

	}

	set target(value: Vector3) {

		this._target = value;

	}

	/**
	 * Resets the current velocity.
	 */

	resetVelocity(): void {

		this.velocity0.set(0, 0, 0);
		this.velocity1.set(0, 0, 0);

		for(const scalarDamper of this.scalarDampers) {

			scalarDamper.resetVelocity();

		}

	}

	/**
	 * Translates the position along a given axis.
	 *
	 * @param axis - The axis.
	 * @param distance - The distance.
	 */

	private translateOnAxis(axis: Vector3, distance: number): void {

		v.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);
		this.position.add(v);

		if(this.settings.general.mode === ControlMode.THIRD_PERSON) {

			// Move the target together with the position.
			this.target.add(v);

		}

	}

	/**
	 * Changes the position based on the current velocity and elapsed time.
	 *
	 * @param elapsed - The time since the last frame in seconds.
	 */

	private translate(elapsed: number): void {

		const v = this.velocity0;

		if(v.x !== 0.0) {

			this.translateOnAxis(axes.x, v.x * elapsed);

		}

		if(v.y !== 0.0) {

			this.translateOnAxis(axes.y, v.y * elapsed);

		}

		if(v.z !== 0.0) {

			this.translateOnAxis(axes.z, v.z * elapsed);

		}

		this.dispatchEvent(this.updateEvent);

	}

	update(timestamp: number): void {

		const settings = this.settings;

		if(!settings.translation.enabled) {

			this.timestamp = timestamp;
			return;

		}

		const state = this.movementState;
		const translation = this.settings.translation;
		const boost = state.boost ? translation.boostMultiplier : 1.0;
		const sensitivity = translation.sensitivity;
		const scalarDampers = this.scalarDampers;

		const v0 = this.velocity0;
		const v1 = this.velocity1;

		const speed = sensitivity * boost;

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

		const elapsed = (timestamp - this.timestamp) * MILLISECONDS_TO_SECONDS;
		this.timestamp = timestamp;

		if(!v0.equals(v1)) {

			// TODO Calculate new position with v1, apply constraints, adjust v1.

			if(translation.damping > 0.0) {

				const damping = translation.damping;
				const omega = ScalarDamper.calculateOmega(damping);
				const exp = ScalarDamper.calculateExp(omega, elapsed);

				v0.x = scalarDampers[0].interpolate(v0.x, v1.x, damping, omega, exp, elapsed);
				v0.y = scalarDampers[1].interpolate(v0.y, v1.y, damping, omega, exp, elapsed);
				v0.z = scalarDampers[2].interpolate(v0.z, v1.z, damping, omega, exp, elapsed);

			} else {

				v0.copy(v1);

			}

		}

		if(v0.x !== 0.0 || v0.y !== 0.0 || v0.z !== 0.0) {

			this.translate(elapsed);

		}

	}

}
