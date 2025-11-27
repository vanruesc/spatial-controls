import { EventDispatcher, Quaternion, Vector3 } from "three";
import { KeyCode } from "../input/KeyCode.js";
import { TranslationManager } from "../managers/TranslationManager.js";
import { Settings } from "../settings/Settings.js";
import { BoostStrategy } from "../strategies/BoostStrategy.js";
import { MovementStrategy } from "../strategies/MovementStrategy.js";
import { Strategy } from "../strategies/Strategy.js";
import { Action } from "./Action.js";
import { ControlsEventMap } from "./ControlsEventMap.js";
import { Direction } from "./Direction.js";
import { Disposable } from "./Disposable.js";
import { Updatable } from "./Updatable.js";

/**
 * 3D translation controls.
 *
 * This class emits events of type {@link EVENT_UPDATE} when the position is changed.
 *
 * @group Core
 */

export class TranslationControls extends EventDispatcher<ControlsEventMap>
	implements Disposable, EventListenerObject, Updatable {

	/**
	 * A translation manager.
	 */

	private readonly translationManager: TranslationManager;

	/**
	 * A map that links actions to specific strategies.
	 */

	private readonly strategies: Map<Action, Strategy>;

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
	 */

	constructor(
		position = new Vector3(),
		quaternion = new Quaternion(),
		target = new Vector3(),
		settings = new Settings()
	) {

		super();

		this._enabled = false;
		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.translationManager = new TranslationManager(position, quaternion, target, settings);
		this.translationManager.addEventListener("update", e => this.dispatchEvent(e));

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

		if(value === this.enabled) {

			return;

		}

		this._enabled = value;

		if(value) {

			this.addEventListeners();

		} else {

			this.removeEventListeners();
			this.translationManager.movementState.reset();
			this.translationManager.resetVelocity();

		}

	}

	/**
	 * Adds all necessary event listeners.
	 */

	private addEventListeners(): void {

		if(typeof document === "undefined") {

			return;

		}

		document.addEventListener("visibilitychange", this);
		document.body.addEventListener("keyup", this);
		document.body.addEventListener("keydown", this);

	}

	/**
	 * Removes all event listeners.
	 */

	private removeEventListeners(): void {

		if(typeof document === "undefined") {

			return;

		}

		document.removeEventListener("visibilitychange", this);
		document.body.removeEventListener("keyup", this);
		document.body.removeEventListener("keydown", this);

	}

	/**
	 * Handles keyboard events.
	 *
	 * @param event - A keyboard event.
	 * @param pressed - Whether the key has been pressed down.
	 */

	private handleKeyboardEvent(event: KeyboardEvent, pressed: boolean): void {
console.log(event.code);
		if(event.repeat) {

			return;

		}

		const bindings = this.settings.keyBindings;
		const code = event.code as KeyCode;

		if(bindings.has(code)) {

			event.preventDefault();

			for(const action of bindings.match(event)!) {

				this.strategies.get(action)?.execute(pressed);

			}

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
