import { Event, EventDispatcher } from "three";
import { Action } from "../core/Action.js";
import { Disposable } from "../core/Disposable.js";
import { MovementEvent } from "../events/MovementEvent.js";
import { KeyCode } from "../input/KeyCode.js";
import { PointerBehavior } from "../input/PointerBehavior.js";
import { InputSettings } from "../settings/InputSettings.js";
import { InputManagerEventMap } from "./InputManagerEventMap.js";

const screen = { x: 0, y: 0 };

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
	 * A collection of deferred mouse events that are handled when the pointer lock state changes.
	 */

	private readonly deferredMouseEvents: Set<MouseEvent>;

	/**
	 * A collection of actions that are currently active.
	 */

	private readonly activeActions: Set<Action>;

	// #endregion

	// #region Reusable Events

	private readonly movementEvent: MovementEvent;

	// #endregion

	/**
	 * The settings.
	 */

	readonly settings: InputSettings;

	/**
	 * Constructs a new input manager.
	 *
	 * @param settings - The settings.
	 * @param domElement - The primary DOM element.
	 */

	constructor(settings = new InputSettings(), domElement: HTMLElement | null = null) {

		super();

		this._domElement = null;
		this._enabled = false;

		this.pointerEvents = new Map();
		this.deferredMouseEvents = new Set();
		this.activeActions = new Set();

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
		this.deferredMouseEvents.clear();
		this.activeActions.clear();
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

	private onPointerMove(event: PointerEvent): void {

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
			screen.x = event.screenX;
			screen.y = event.screenY;

		}

		const movementEvent = this.movementEvent;
		const sensitivity = this.settings.pointer.sensitivity;
		movementEvent.x = movementX * sensitivity;
		movementEvent.y = movementY * sensitivity;
		movementEvent.pointerCount = this.pointerEvents.size;
		this.dispatchEvent(movementEvent);

	}

	/**
	 * Handles pointer lock change events.
	 */

	private onPointerLockChange(): void {

		if(this.pointerLocked) {

			for(const event of this.deferredMouseEvents) {

				this.onMouseDown(event);

			}

			return;

		}

		for(const event of this.deferredMouseEvents) {

			this.onMouseUp(event);

		}

		this.deferredMouseEvents.clear();

	}

	/**
	 * Handles `mousedown` events.
	 *
	 * Mouse events are used because pointer events don't fire for other mouse buttons while a pointer is active.
	 *
	 * @param event - A mouse event.
	 */

	private onMouseDownNative(event: MouseEvent): void {

		const behavior = this.settings.pointer.getBehavior(event.button);

		if(behavior === PointerBehavior.LOCK) {

			this.deferredMouseEvents.add(event);
			void this.lockPointer();

			if(this.pointerLocked) {

				// Already locked by another pointer.
				this.onMouseDown(event);

			}

			return;

		}

		if(behavior === PointerBehavior.LOCK_HOLD) {

			void this.lockPointer();

		}

		this.onMouseDown(event);

	}

	/**
	 * Handles `mouseup` events.
	 *
	 * Mouse events are used because pointer events don't fire for other mouse buttons while a pointer is active.
	 *
	 * @param event - A mouse event.
	 */

	private onMouseUpNative(event: MouseEvent): void {

		if(this.settings.pointer.getBehavior(event.button) !== PointerBehavior.LOCK) {

			this.onMouseUp(event);

		}

	}

	/**
	 * Handles `mousedown` events.
	 *
	 * @param event - A mouse event.
	 */

	private onMouseDown(event: MouseEvent): void {

		const actions = this.settings.pointerBindings.matchMouseEvent(event);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		this.dispatchEvent({
			type: "activate",
			action: actions[0]
		});

		this.activeActions.add(actions[0]);

	}

	/**
	 * Handles `mouseup` events.
	 *
	 * @param event - A mouse event.
	 */

	private onMouseUp(event: MouseEvent): void {

		const actions = this.settings.pointerBindings.match(event.button);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		for(const action of actions) {

			if(!this.activeActions.has(action)) {

				continue;

			}

			this.dispatchEvent({
				type: "deactivate",
				action
			});

			this.activeActions.delete(action);

		}

	}

	/**
	 * Handles `pointerdown` events.
	 *
	 * @param event - A pointer event.
	 */

	private onPointerDown(event: PointerEvent): void {

		this.pointerEvents.set(event.pointerId, event);

		screen.x = event.screenX;
		screen.y = event.screenY;

		if(!this.pointerLocked && this.settings.pointer.getBehavior(event.button) === PointerBehavior.DEFAULT) {

			// The capture will be implicitly released after a pointerup or pointercancel event.
			this.domElement?.setPointerCapture(event.pointerId);

		}

		if(event.pointerType !== "mouse") {

			// Handle touch/pen events like mouse events.
			this.onMouseDown(event);

			// Prevent simulated mouse events.
			event.preventDefault();

		}

	}

	/**
	 * Handles `pointerup` events.
	 *
	 * @param event - A pointer event.
	 */

	private onPointerUp(event: PointerEvent): void {

		this.pointerEvents.delete(event.pointerId);

		if(event.pointerType !== "mouse") {

			// Handle touch/pen events like mouse events.
			this.onMouseUp(event);

			// Prevent simulated mouse events.
			event.preventDefault();

		}

	}

	/**
	 * Handles `contextmenu` events.
	 *
	 * @param event - A pointer event.
	 */

	private onContextMenu(event: PointerEvent): void {

		if(this.settings.pointerBindings.matchMouseEvent(event)?.length !== 0) {

			event.preventDefault();

		}

	}

	/**
	 * Handles `wheel` events.
	 *
	 * @param event - A wheel event.
	 */

	private onWheel(event: WheelEvent): void {

		const actions = this.settings.pointerBindings.matchWheelEvent(event);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		event.preventDefault();

		this.dispatchEvent({
			type: "activate",
			action: actions[0]
		});

		this.activeActions.add(actions[0]);

	}

	/**
	 * Handles `keydown` events.
	 *
	 * @param event - A keyboard event.
	 */

	private onKeyDown(event: KeyboardEvent): void {

		if(event.repeat) {

			return;

		}

		const actions = this.settings.keyBindings.matchKeyboardEvent(event);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		event.preventDefault();

		this.dispatchEvent({
			type: "activate",
			action: actions[0]
		});

		this.activeActions.add(actions[0]);

	}

	/**
	 * Handles `keyup` events.
	 *
	 * @param event - A keyboard event.
	 */

	private onKeyUp(event: KeyboardEvent): void {

		const actions = this.settings.keyBindings.match(event.code as KeyCode);

		if(actions === undefined || actions.length === 0) {

			return;

		}

		event.preventDefault();

		for(const action of actions) {

			if(!this.activeActions.has(action)) {

				continue;

			}

			this.dispatchEvent({
				type: "deactivate",
				action
			});

			this.activeActions.delete(action);

		}

	}

	/**
	 * Handles `pointercancel` events.
	 *
	 * @param event - A pointer event.
	 */

	private onPointerCancel(event: PointerEvent): void {

		this.resetInputState();

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private onVisibilityChange(): void {

		if(document.hidden) {

			this.resetInputState();

		}

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "pointermove":
				this.onPointerMove(event as PointerEvent);
				break;

			case "mousedown":
				this.onMouseDownNative(event as MouseEvent);
				break;

			case "mouseup":
				this.onMouseUpNative(event as MouseEvent);
				break;

			case "pointerdown":
				this.onPointerDown(event as PointerEvent);
				break;

			case "pointerup":
				this.onPointerUp(event as PointerEvent);
				break;

			case "pointercancel":
				this.onPointerCancel(event as PointerEvent);
				break;

			case "pointerlockchange":
				this.onPointerLockChange();
				break;

			case "contextmenu":
				this.onContextMenu(event as PointerEvent);
				break;

			case "wheel":
				this.onWheel(event as WheelEvent);
				break;

			case "keydown":
				this.onKeyDown(event as KeyboardEvent);
				break;

			case "keyup":
				this.onKeyUp(event as KeyboardEvent);
				break;

			case "visibilitychange":
				this.onVisibilityChange();
				break;

		}

	}

	// #endregion

	dispose(): void {

		this.enabled = false;

	}

}
