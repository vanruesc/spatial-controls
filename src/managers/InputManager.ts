import { Event, EventDispatcher, Vector2 } from "three";
import { Disposable } from "../core/Disposable.js";
import { MovementEvent } from "../events/MovementEvent.js";
import { Settings } from "../settings/Settings.js";
import { InputManagerEventMap } from "./InputManagerEventMap.js";
import { KeyCode } from "../input/KeyCode.js";
import { getWheelRotation } from "../input/WheelRotation.js";
import { PointerBehavior } from "../input/PointerBehavior.js";

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
	 * The previous screen position.
	 */

	private readonly previousPosition: Vector2;

	/**
	 * The previous screen position.
	 */

	private readonly currentPosition: Vector2;

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
		this.previousPosition = new Vector2();
		this.currentPosition = new Vector2();

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

			void this.setPointerLocked(false);

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
		domElement.addEventListener("wheel", this, { passive: true });
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

		this.dispatchEvent({
			type: "reset"
		});

	}

	/**
	 * Locks or unlocks the pointer.
	 *
	 * @param value - Whether the pointer should be locked.
	 */

	private async setPointerLocked(value = true): Promise<void> {

		if(this.domElement?.requestPointerLock === undefined) {

			return;

		}

		if(value) {

			if(!this.pointerLocked) {

				await this.domElement.requestPointerLock();

			}

		} else if(document.exitPointerLock === undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Calculates the current average pointer position.
	 *
	 * @return The current screen position.
	 */

	private calculateCurrentPosition(): Vector2 {

		const n = this.pointerEvents.size;
		let x = 0;
		let y = 0;

		for(const pointerEvent of this.pointerEvents.values()) {

			x += pointerEvent.screenX;
			y += pointerEvent.screenY;

		}

		if(n > 1) {

			x /= n;
			y /= n;

		}

		return this.currentPosition.set(x, y);

	}

	/**
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: PointerEvent): void {

		const pointerLocked = this.pointerLocked;

		if(!this.pointerEvents.has(event.pointerId) && !pointerLocked) {

			return;

		}

		this.pointerEvents.set(event.pointerId, event);
		let { movementX, movementY } = event;

		if(!pointerLocked) {

			const previousPosition = this.previousPosition;
			const currentPosition = this.calculateCurrentPosition();
			movementX = currentPosition.x - previousPosition.x;
			movementY = currentPosition.y - previousPosition.y;
			previousPosition.copy(currentPosition);

		}

		const movementEvent = this.movementEvent;
		movementEvent.x = movementX;
		movementEvent.y = movementY;
		movementEvent.pointerCount = this.pointerEvents.size;
		this.dispatchEvent(movementEvent);

	}

	/**
	 * Handles mouse button events.
	 *
	 * Note: pointer events don't fire for other mouse buttons while the pointer is active.
	 *
	 * @param event - A mouse event.
	 * @param pressed - Whether the button has been pressed down.
	 */

	private handleMouseButtonEvent(event: MouseEvent, pressed: boolean): void {

		const bindings = this.settings.pointerBindings;

		if(!bindings.has(event.button)) {

			return;

		}

		for(const action of bindings.matchMouseEvent(event)!) {

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

		const isMouse = event.pointerType === "mouse";

		if(!isMouse) {

			// Handle touch/pen events like mouse events.
			this.handleMouseButtonEvent(event, pressed);
			event.preventDefault();

		}

		if(pressed) {

			this.pointerEvents.set(event.pointerId, event);
			this.previousPosition.copy(this.calculateCurrentPosition());

			if(this.settings.pointer.getBehavior(event.button) === PointerBehavior.DEFAULT) {

				// The capture will be implicitly released after a pointerup or pointercancel event.
				this.domElement?.setPointerCapture(event.pointerId);

			} else if(isMouse) {

				void this.setPointerLocked(pressed);

			}

		} else {

			this.pointerEvents.delete(event.pointerId);

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

		const bindings = this.settings.pointerBindings;
		const wheelRotation = getWheelRotation(event);

		if(wheelRotation === undefined || !bindings.has(wheelRotation)) {

			return;

		}

		event.preventDefault();

		for(const action of bindings.matchWheelEvent(event)!) {

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

		const bindings = this.settings.keyBindings;
		const code = event.code as KeyCode;

		if(!bindings.has(code)) {

			return;

		}

		event.preventDefault();

		for(const action of bindings.matchKeyboardEvent(event)!) {

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
				this.handleMouseButtonEvent(event as MouseEvent, true);
				break;

			case "mouseup":
				this.handleMouseButtonEvent(event as MouseEvent, false);
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

	dispose(): void {

		this.enabled = false;

	}

}
