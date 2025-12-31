import { BaseEvent, EventDispatcher, Quaternion, Vector3 } from "three";
import { Action } from "../core/Action.js";
import { Direction } from "../core/Direction.js";
import { MILLISECONDS_TO_SECONDS } from "../core/time.js";
import { TransformationData } from "../core/TransformationData.js";
import { Updatable } from "../core/Updatable.js";
import { ActionEvent } from "../events/ActionEvent.js";
import { ScalarDamper } from "../math/ScalarDamper.js";
import { Settings } from "../settings/Settings.js";
import { MovementState } from "./MovementState.js";
import { TranslationManagerEventMap } from "./TranslationManagerEventMap.js";

const u = /* @__PURE__ */ new Vector3();
const v = /* @__PURE__ */ new Vector3();

/**
 * A manager that handles position changes.
 *
 * @group Managers
 */

export class TranslationManager extends EventDispatcher<TranslationManagerEventMap>
	implements EventListenerObject, Updatable {

	/**
	 * The primary transformation data.
	 */

	private readonly transformation: TransformationData;

	/**
	 * The settings.
	 */

	private readonly settings: Settings;

	/**
	 * The current velocity.
	 */

	private readonly velocity0: Vector3;

	/**
	 * The target velocity.
	 */

	private readonly velocity1: Vector3;

	/**
	 * The movement state.
	 */

	private readonly movementState: MovementState;

	/**
	 * A collection of action strategies.
	 */

	private readonly strategies: Map<string, (x: boolean) => void>;

	/**
	 * Scalar dampers.
	 */

	private readonly scalarDampers: readonly ScalarDamper[];

	/**
	 * A timestamp in milliseconds for calculating the elapsed time since the last update.
	 */

	private timestamp: number;

	/**
	 * A reusable update event.
	 */

	private readonly updateEvent: BaseEvent<"update">;

	/**
	 * Constructs a new translation manager.
	 *
	 * @param settings - The settings.
	 * @param transformation - The transformation data.
	 */

	constructor(settings: Settings, transformation: TransformationData) {

		super();

		this.transformation = transformation;
		this.settings = settings;

		this.velocity0 = new Vector3();
		this.velocity1 = new Vector3();

		const state = new MovementState();
		this.movementState = state;

		this.strategies = new Map<Action, (x: boolean) => void>([
			["move-forward", (x) => state.setActive(Direction.FORWARD, x)],
			["move-left", (x) => state.setActive(Direction.LEFT, x)],
			["move-backward", (x) => state.setActive(Direction.BACKWARD, x)],
			["move-right", (x) => state.setActive(Direction.RIGHT, x)],
			["move-down", (x) => state.setActive(Direction.DOWN, x)],
			["move-up", (x) => state.setActive(Direction.UP, x)],
			["boost", (x) => void (state.boost = x)],
			["pan", (x) => void (this.panning = x)],
			["truck", (x) => void (this.trucking = x)]
		]);

		this.scalarDampers = Object.freeze([
			new ScalarDamper(),
			new ScalarDamper(),
			new ScalarDamper()
		]);

		this.timestamp = 0;
		this.updateEvent = { type: "update" };

	}

	/**
	 * The position.
	 */

	private get position(): Vector3 {

		return this.transformation.position;

	}

	/**
	 * The quaternion.
	 */

	private get quaternion(): Quaternion {

		return this.transformation.quaternion;

	}

	/**
	 * The target.
	 */

	private get target(): Vector3 {

		return this.transformation.target;

	}

	/**
	 * Resets the current velocity.
	 */

	private resetVelocity(): void {

		this.velocity0.setScalar(0);
		this.velocity1.setScalar(0);

		for(const scalarDamper of this.scalarDampers) {

			scalarDamper.resetVelocity();

		}

	}

	/**
	 * Handles action events.
	 *
	 * @param event - An event.
	 * @param activate - True if the action was activated, false if it was deactivated.
	 */

	private onAction(event: ActionEvent, activate: boolean): void {

		if(this.strategies.has(event.action)) {

			this.strategies.get(event.action)!(activate);

		}

	}

	/**
	 * Handles setting changes.
	 */

	private onSettingsChanged(): void {

		if(!this.settings.translation.enabled) {

			this.resetVelocity();

		}

	}

	handleEvent(event: Event | ActionEvent): void {

		switch(event.type) {

			case "activate":
				this.onAction((event as ActionEvent), true);
				break;

			case "deactivate":
				this.onAction((event as ActionEvent), false);
				break;

			case "change":
				this.onSettingsChanged();
				break;

		}

	}

	/**
	 * Changes the position based on the current velocity and elapsed time.
	 *
	 * @param position - The position to translate.
	 * @param velocity - The velocity.
	 * @param elapsed - The time since the last frame in seconds.
	 */

	private translate(position: Vector3, velocity: Vector3, elapsed: number): void {

		const axisWeights = this.settings.translation.axisWeights;
		v.copy(velocity).applyQuaternion(this.quaternion);

		if(axisWeights.x !== 1.0 || axisWeights.y !== 1.0 || axisWeights.z !== 1.0) {

			v.multiply(this.settings.translation.axisWeights);
			v.multiplyScalar(elapsed);

		} else {

			v.multiplyScalar(elapsed);

		}

		position.add(v);

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
		state.toVector3(v1);

		const distance = sensitivity * boost;
		v1.normalize().multiplyScalar(distance);

		const elapsed = (timestamp - this.timestamp) * MILLISECONDS_TO_SECONDS;
		this.timestamp = timestamp;

		if(!v0.equals(v1)) {

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

			if(this.settings.general.mode === "third-person") {

				// Update the target.
				u.copy(this.target);
				this.translate(this.target, v0, elapsed);
				this.target.copy(this.target);

				// Move the position together with the target.
				this.position.add(v.subVectors(this.target, u));

			} else {

				// Update the position.
				u.copy(this.position);
				this.translate(this.position, v0, elapsed);
				this.position.copy(this.position);

			}

		}

	}

}
