import { Event, EventDispatcher, Vector2 } from "three";
import { Disposable } from "../core/Disposable.js";
import { MovementEvent } from "../events/MovementEvent.js";
import { Settings } from "../settings/Settings.js";
import { InputManagerEventMap } from "./InputManagerEventMap.js";
import { KeyCode } from "../input/KeyCode.js";
import { PointerBehavior } from "../input/PointerBehavior.js";

const screen = /* @__PURE__ */ new Vector2();

/**
 * An input manager.
 *
 * @group Managers
 */

export class InputManager extends EventDispatcher<InputManagerEventMap>
	implements Disposable, EventListenerObject {

	// #region Backing Data

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	// #endregion

	// #region Input State

	/**
	 * A collection that organizes active pointer events by ID.
	 */

	private readonly pointerEvents: Map<number, PointerEvent>;

	/**
	 * A collection of events that issued a pointer lock request.
	 */

	private readonly pointerLockTriggers: Set<MouseEvent>;

	// #endregion

	// #region Reusable Events

	private readonly movementEvent: MovementEvent;

	// #endregion

	/**
	 * The control settings.
	 */

	readonly settings: Settings;

	/**
	 * Constructs a new input manager.
	 *
	 * @param settings - The settings.
	 */

	constructor(settings = new Settings(), domElement: HTMLElement | null = null) {

		super();

		this._domElement = null;
		this._enabled = false;

		this.pointerEvents = new Map();
		this.pointerLockTriggers = new Set();

		this.movementEvent = {
			type: "move",
			pointerCount: 0,
			x: 0,
			y: 0
		};

		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.domElement = domElement;
		this.enabled = true;

	}

	/**
	 * A DOM element that acts as the primary event target.
	 */

	get domElement() {

		return this._domElement;

	}

	set domElement(value: HTMLElement | null) {

		this.removeEventListeners();
		this._domElement = value;

		if(this.enabled) {

			this.addEventListeners();

		}

	}

	/**
	 * Determines whether the input listeners are currently enabled.
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
			this.resetInputState();

		}

	}

	/**
	 * Indicates whether the pointer is currently locked.
	 */

	get pointerLocked(): boolean {

		return (document.pointerLockElement === this.domElement);

	}

	/**
	 * Registers event listeners.
	 */

	private addEventListeners(): void {

		if(this.domElement === null || typeof document === "undefined") {

			return;

		}

		const domElement = this.domElement;
		domElement.style.touchAction = "none";

		document.addEventListener("pointerlockchange", this);
		document.addEventListener("pointerlockerror", this);
		document.addEventListener("visibilitychange", this);
		document.body.addEventListener("keyup", this);
		document.body.addEventListener("keydown", this);

		domElement.addEventListener("pointermove", this, { passive: true });
		domElement.addEventListener("mousedown", this);
		domElement.addEventListener("mouseup", this);
		domElement.addEventListener("pointerdown", this);
		domElement.addEventListener("pointerup", this);
		domElement.addEventListener("pointercancel", this);
		domElement.addEventListener("wheel", this);
		domElement.addEventListener("contextmenu", this);

	}

	/**
	 * Unregisters event listeners.
	 */

	private removeEventListeners(): void {

		if(this.domElement === null || typeof document === "undefined") {

			return;

		}

		const domElement = this.domElement;
		domElement.style.touchAction = "";

		document.removeEventListener("pointerlockchange", this);
		document.removeEventListener("pointerlockerror", this);
		document.removeEventListener("visibilitychange", this);
		document.body.removeEventListener("keyup", this);
		document.body.removeEventListener("keydown", this);

		domElement.removeEventListener("pointermove", this);
		domElement.removeEventListener("mousedown", this);
		domElement.removeEventListener("mouseup", this);
		domElement.removeEventListener("pointerdown", this);
		domElement.removeEventListener("pointerup", this);
		domElement.removeEventListener("pointercancel", this);
		domElement.removeEventListener("wheel", this);
		domElement.removeEventListener("contextmenu", this);

	}

	/**
	 * Reset the input state.
	 */

	private resetInputState(): void {

		this.pointerEvents.clear();
		this.pointerLockTriggers.clear();
		this.unlockPointer();

		this.dispatchEvent({
			type: "reset"
		});

	}

	/**
	 * Locks the pointer.
	 *
	 * @return A promise that resolves when the pointer has been locked.
	 */

	private async lockPointer(): Promise<void> {

		if(this.domElement?.requestPointerLock === undefined || this.pointerLocked) {

			return;

		}

		try {

			await this.domElement.requestPointerLock();

		} catch(e) {

			console.warn(e);

		}

	}

	/**
	 * Unlocks the pointer.
	 */

	private unlockPointer(): void {

		if(document.exitPointerLock === undefined || !this.pointerLocked) {

			return;

		}

		document.exitPointerLock();

	}

	// #region Event Handling

	/**
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: PointerEvent): void {

		if(this.pointerEvents.has(event.pointerId)) {

			// Refresh the pointer event.
			this.pointerEvents.set(event.pointerId, event);

		} else if(!this.pointerLocked) {

			// No active actions.
			return;

		}

		let { movementX, movementY } = event;

		if(movementX === undefined || movementY === undefined) {

			movementX = event.screenX - screen.x;
			movementY = event.screenY - screen.y;
			screen.set(event.screenX, event.screenY);

		}

		const movementEvent = this.movementEvent;
		movementEvent.x = movementX;
		movementEvent.y = movementY;
		movementEvent.pointerCount = this.pointerEvents.size;
		this.dispatchEvent(movementEvent);

	}

	/**
	 * Handles pointer lock change events.
	 *
	 * @param event - An event.
	 */

	private handlePointerLockChangeEvent(event: Event): void {

		const pointerLocked = this.pointerLocked;

		for(const trigger of this.pointerLockTriggers) {

			this.handleMouseButtonEvent(trigger, pointerLocked);

		}

		if(!pointerLocked) {

			this.pointerLockTriggers.clear();

		}

	}

	/**
	 * Handles mouse events.
	 *
	 * Note: mouse events are used because pointer events don't fire for other mouse buttons while a pointer is active.
	 *
	 * @param event - A mouse event.
	 * @param pressed - Whether the button has been pressed down.
	 */

	private handleMouseEvent(event: MouseEvent, pressed: boolean): void {

		const behavior = this.settings.pointer.getBehavior(event.button);

		if(behavior === PointerBehavior.LOCK) {

			if(pressed) {

				this.pointerLockTriggers.add(event);
				void this.lockPointer();

				if(this.pointerLocked) {

					// Already locked by another pointer: trigger actions now.
					this.handleMouseButtonEvent(event, true);

				}

			}

		} else {

			if(pressed && behavior === PointerBehavior.LOCK_HOLD) {

				void this.lockPointer();

			}

			this.handleMouseButtonEvent(event, pressed);

		}

	}

	/**
	 * Handles pseudo mouse button events triggered by touch/pen events.
	 *
	 * Note: pointer lock doesn't exist for touch/pen input.
	 *
	 * @param event - A mouse event.
	 * @param pressed - Whether the button has been pressed down.
	 */

	private handleMouseButtonEvent(event: MouseEvent, pressed: boolean): void {

		const actions = pressed ?
			this.settings.pointerBindings.matchMouseEvent(event) :
			this.settings.pointerBindings.match(event.button);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		for(const action of actions) {

			this.dispatchEvent({
				type: pressed ? "activate" : "deactivate",
				action
			});

		}

	}

	/**
	 * Handles pointer events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the button has been pressed down.
	 */

	private handlePointerButtonEvent(event: PointerEvent, pressed: boolean): void {

		if(!pressed) {

			this.pointerEvents.delete(event.pointerId);

		} else {

			this.pointerEvents.set(event.pointerId, event);
			screen.set(event.screenX, event.screenY);

			if(!this.pointerLocked && this.settings.pointer.getBehavior(event.button) === PointerBehavior.DEFAULT) {

				// The capture will be implicitly released after a pointerup or pointercancel event.
				this.domElement?.setPointerCapture(event.pointerId);

			}

		}

		if(event.pointerType !== "mouse") {

			// Handle touch/pen events like mouse events.
			this.handleMouseButtonEvent(event, pressed);

			// Prevent native simulated mouse events.
			event.preventDefault();

		}

	}

	/**
	 * Handles contextmenu events.
	 *
	 * @param event - A pointer event.
	 */

	private handleContextMenuEvent(event: PointerEvent): void {

		if(this.settings.pointerBindings.matchMouseEvent(event)?.length !== 0) {

			event.preventDefault();

		}

	}

	/**
	 * Handles wheel events.
	 *
	 * @param event - A wheel event.
	 */

	private handleWheelEvent(event: WheelEvent): void {

		const actions = this.settings.pointerBindings.matchWheelEvent(event);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		event.preventDefault();

		for(const action of actions) {

			this.dispatchEvent({
				type: "activate",
				action
			});

		}

	}

	/**
	 * Handles keyboard events.
	 *
	 * @param event - A keyboard event.
	 * @param pressed - Whether the key has been pressed down.
	 */

	private handleKeyboardEvent(event: KeyboardEvent, pressed: boolean): void {

		const actions = pressed ?
			this.settings.keyBindings.matchKeyboardEvent(event) :
			this.settings.keyBindings.match(event.code as KeyCode);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		event.preventDefault();

		for(const action of actions) {

			this.dispatchEvent({
				type: pressed ? "activate" : "deactivate",
				action
			});

		}

	}

	/**
	 * Handles pointer cancel and leave events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerCancelEvent(event: PointerEvent): void {

		this.resetInputState();

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.resetInputState();

		}

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "pointermove":
				this.handlePointerMoveEvent(event as PointerEvent);
				break;

			case "mousedown":
				this.handleMouseEvent(event as MouseEvent, true);
				break;

			case "mouseup":
				this.handleMouseEvent(event as MouseEvent, false);
				break;

			case "pointerdown":
				this.handlePointerButtonEvent(event as PointerEvent, true);
				break;

			case "pointerup":
				this.handlePointerButtonEvent(event as PointerEvent, false);
				break;

			case "pointercancel":
				this.handlePointerCancelEvent(event as PointerEvent);
				break;

			case "pointerlockchange":
				this.handlePointerLockChangeEvent(event);
				break;

			case "contextmenu":
				this.handleContextMenuEvent(event as PointerEvent);
				break;

			case "wheel":
				this.handleWheelEvent(event as WheelEvent);
				break;

			case "keydown":
				this.handleKeyboardEvent(event as KeyboardEvent, true);
				break;

			case "keyup":
				this.handleKeyboardEvent(event as KeyboardEvent, false);
				break;

			case "visibilitychange":
				this.handleVisibilityChangeEvent();
				break;

		}

	}

	// #endregion

	dispose(): void {

		this.enabled = false;

	}

}
