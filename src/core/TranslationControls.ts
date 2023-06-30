import { EventDispatcher, Quaternion, Vector3 } from "three";
import { BoostStrategy } from "../strategies/BoostStrategy.js";
import { MovementStrategy } from "../strategies/MovementStrategy.js";
import { Strategy } from "../strategies/Strategy.js";
import { KeyCode } from "../input/KeyCode.js";
import { keyCodeLegacy } from "../input/keyCodeLegacy.js";
import { TranslationManager } from "../managers/TranslationManager.js";
import { Settings } from "../settings/Settings.js";
import { Action } from "./Action.js";
import { Direction } from "./Direction.js";
import { Disposable } from "./Disposable.js";
import { Updatable } from "./Updatable.js";
import { Constraint } from "./Constraint.js";

/**
 * 3D translation controls.
 *
 * This class emits events of type {@link EVENT_UPDATE} when the position is changed.
 *
 * @group Core
 */

export class TranslationControls extends EventDispatcher implements Disposable, EventListenerObject, Updatable {

	/**
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

	/**
	 * A translation manager.
	 */

	private translationManager: TranslationManager;

	/**
	 * A map that links actions to specific strategies.
	 */

	private strategies: Map<Action, Strategy>;

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * The settings.
	 */

	readonly settings: Settings;

	/**
	 * Constructs new controls.
	 *
	 * @param position - A position.
	 * @param quaternion - A quaternion.
	 * @param target - A target.
	 * @param settings - The settings.
	 * @param constraints - A set of constraints.
	 */

	constructor(
		position = new Vector3(),
		quaternion = new Quaternion(),
		target = new Vector3(),
		settings = new Settings(),
		constraints = new Set<Constraint<Vector3>>()
	) {

		super();

		this._enabled = false;
		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.translationManager = new TranslationManager(position, quaternion, target, settings, constraints);
		this.translationManager.addEventListener(TranslationControls.EVENT_UPDATE, e => this.dispatchEvent(e));

		const state = this.translationManager.movementState;
		this.strategies = new Map<Action, Strategy>([
			[Action.MOVE_FORWARD, new MovementStrategy(state, Direction.FORWARD)],
			[Action.MOVE_LEFT, new MovementStrategy(state, Direction.LEFT)],
			[Action.MOVE_BACKWARD, new MovementStrategy(state, Direction.BACKWARD)],
			[Action.MOVE_RIGHT, new MovementStrategy(state, Direction.RIGHT)],
			[Action.MOVE_DOWN, new MovementStrategy(state, Direction.DOWN)],
			[Action.MOVE_UP, new MovementStrategy(state, Direction.UP)],
			[Action.BOOST, new BoostStrategy(state)]
		]);

	}

	/**
	 * The position.
	 */

	set position(value: Vector3) {

		this.translationManager.position = value;

	}

	/**
	 * The quaternion.
	 */

	set quaternion(value: Quaternion) {

		this.translationManager.quaternion = value;

	}

	/**
	 * The target.
	 */

	set target(value: Vector3) {

		this.translationManager.target = value;

	}

	/**
	 * Indicates whether the controls are enabled.
	 *
	 * Event listeners will be registered or unregistered depending on this flag.
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		if(typeof document === "undefined") {

			return;

		}

		this.translationManager.movementState.reset();

		if(value && !this._enabled) {

			document.addEventListener("visibilitychange", this);
			document.body.addEventListener("keyup", this);
			document.body.addEventListener("keydown", this);

		} else if(!value && this._enabled) {

			document.removeEventListener("visibilitychange", this);
			document.body.removeEventListener("keyup", this);
			document.body.removeEventListener("keydown", this);

		}

		this.translationManager.resetVelocity();
		this._enabled = value;

	}

	/**
	 * Handles keyboard events.
	 *
	 * @param event - A keyboard event.
	 * @param pressed - Whether the key has been pressed down.
	 */

	private handleKeyboardEvent(event: KeyboardEvent, pressed: boolean): void {

		const keyBindings = this.settings.keyBindings;
		const code = event.code !== undefined ? event.code as KeyCode : keyCodeLegacy.get(event.keyCode) as KeyCode;

		if(keyBindings.has(code)) {

			event.preventDefault();
			const strategy = this.strategies.get(keyBindings.get(code) as Action);
			strategy?.execute(pressed);

		}

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.translationManager.movementState.reset();

		}

	}

	/**
	 * Reacts to setting changes.
	 *
	 * @param event - An event.
	 */

	private onSettingsChanged(event: Event): void {

		if(!this.settings.translation.enabled) {

			this.translationManager.resetVelocity();

		}

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "keydown":
				this.handleKeyboardEvent(event as KeyboardEvent, true);
				break;

			case "keyup":
				this.handleKeyboardEvent(event as KeyboardEvent, false);
				break;

			case "visibilitychange":
				this.handleVisibilityChangeEvent();
				break;

			case "change":
				this.onSettingsChanged(event);
				break;

		}

	}

	update(timestamp: number): void {

		this.translationManager.update(timestamp);

	}

	dispose(): void {

		this.enabled = false;

	}

}
