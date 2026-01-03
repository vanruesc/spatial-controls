import { BaseEvent, Event, EventDispatcher, Quaternion, Vector3 } from "three";
import { Action } from "../core/Action.js";
import { Direction } from "../core/Direction.js";
import { MILLISECONDS_TO_SECONDS } from "../core/time.js";
import { TransformationData } from "../core/TransformationData.js";
import { Updatable } from "../core/Updatable.js";
import { ActionEvent } from "../events/ActionEvent.js";
import { MovementEvent } from "../events/MovementEvent.js";
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
	 * The target position.
	 */

	private readonly position1: Vector3;

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

	// #region Reusable Events

	/**
	 * A translation change event.
	 */

	private readonly translationEvent: BaseEvent<"translate">;

	/**
	 * A translation start event.
	 */

	private readonly translationStartEvent: BaseEvent<"translationstart">;

	/**
	 * A translation end event.
	 */

	private readonly translationEndEvent: BaseEvent<"translationend">;

	// #endregion

	// #region State

	/**
	 * A timestamp in milliseconds for calculating the elapsed time since the last update.
	 */

	private timestamp: number;

	/**
	 * Determines whether panning is currently enabled.
	 */

	private panning: boolean;

	/**
	 * Determines whether trucking is currently enabled.
	 */

	private trucking: boolean;

	// #endregion

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
		this.settings.addEventListener("change", e => this.handleEvent(e));

		this.velocity0 = new Vector3();
		this.velocity1 = new Vector3();
		this.position1 = new Vector3();

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

		this.translationEvent = { type: "translate" };
		this.translationStartEvent = { type: "translationstart" };
		this.translationEndEvent = { type: "translationend" };

		this.timestamp = 0;
		this.panning = false;
		this.trucking = false;

	}

	// #region Getters

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

	// #endregion

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

	// #region Event Handling

	/**
	 * Handles movement events.
	 *
	 * @param event - An event.
	 */

	private onMove(event: MovementEvent): void {

		if(this.panning) {

			console.log("panning");

		} else if(this.trucking) {

			console.log("trucking");

		}

	}

	/**
	 * Handles `activate` events.
	 *
	 * @param event - An event.
	 */

	private onActivate(event: ActionEvent): void {

		if(this.strategies.has(event.action)) {

			this.strategies.get(event.action)!(true);

		}

	}

	/**
	 * Handles `deactivate` events.
	 *
	 * @param event - An event.
	 */

	private onDeactivate(event: ActionEvent): void {

		if(this.strategies.has(event.action)) {

			this.strategies.get(event.action)!(false);

		}

	}

	/**
	 * Handles setting changes.
	 */

	private onSettingsChange(): void {

		if(!this.settings.translation.enabled) {

			this.resetVelocity();

		}

	}

	handleEvent(event: Event | ActionEvent | MovementEvent): void {

		switch(event.type) {

			case "move":
				this.onMove(event as MovementEvent);
				break;

			case "activate":
				this.onActivate((event as ActionEvent));
				break;

			case "deactivate":
				this.onDeactivate((event as ActionEvent));
				break;

			case "change":
				this.onSettingsChange();
				break;

		}

	}

	// #endregion

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

		this.dispatchEvent(this.translationEvent);

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
