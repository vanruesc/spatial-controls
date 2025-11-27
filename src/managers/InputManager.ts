import { EventDispatcher, Vector2 } from "three";
import { Disposable } from "../core/Disposable.js";
import { Settings } from "../settings/Settings.js";
import { InputManagerEventMap } from "./InputManagerEventMap.js";
import { KeyCode } from "../input/KeyCode.js";
import { getWheelRotation } from "../input/WheelRotation.js";
import { PointerBehaviour } from "../input/PointerBehaviour.js";

const screen = /* @__PURE__ */ new Vector2();

/**
 * An input manager.
 *
 * @group Managers
 */

export class InputManager extends EventDispatcher<InputManagerEventMap> implements Disposable, EventListenerObject {

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * A collection that organizes active pointer events by ID.
	 */

	private readonly pointerEvents: Map<number, PointerEvent>;

	/**
	 * Indicates whether the user is currently holding the pointer button down.
	 */

	private dragging: boolean;

	/**
	 * The control settings.
	 */

	readonly settings: Settings;

	/**
	 * Constructs a new input manager.
	 *
	 * @param settings - The settings.
	 */

	constructor(settings = new Settings()) {

		super();

		this._domElement = null;
		this._enabled = false;

		this.dragging = false;
		this.pointerEvents = new Map();

		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

	}

	/**
	 * A DOM element. Acts as the primary event target.
	 */

	get domElement() {

		return this._domElement;

	}

	set domElement(value: HTMLElement | null) {

		this._domElement = value;

		const enabled = this.enabled;
		this.removeEventListeners();
		this.enabled = enabled;

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
			this.resetPointerState();

			void this.setPointerLocked(false);

		}

	}

	/**
	 * Adds all necessary event listeners.
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
	 * Removes all event listeners.
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
		domElement.removeEventListener("pointermove", this);
		domElement.removeEventListener("contextmenu", this);

	}

	/**
	 * Reset the current pointer state.
	 */

	private resetPointerState(): void {

		this.pointerEvents.clear();
		this.dragging = false;

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

			if(document.pointerLockElement !== this.domElement) {

				await this.domElement.requestPointerLock();

			}

		} else if(document.exitPointerLock === undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: PointerEvent): void {

		let { movementX, movementY } = event;

		if(movementX === undefined || movementY === undefined) {

			movementX = event.screenX - screen.x;
			movementY = event.screenY - screen.y;
			screen.set(event.screenX, event.screenY);

		}

		//if(settings.pointer.behaviour === PointerBehaviour.LOCK_HOLD && !this.dragging) {
		if(this.rotating) {

			this.dispatchEvent({
				type: "rotate",
				theta: movementX,
				phi: movementY
			});

		}

		if(this.panning) {

			this.dispatchEvent({
				type: "pan",
				deltaX: movementX,
				deltaY: movementY,
				deltaZ: 0.0
			});

		}

	}

	/**
	 * Handles pointer lock for mouse events on desktop.
	 *
	 * @param event - A mouse event.
	 */

	private handlePointerLockEvent(event: MouseEvent, pressed: boolean): void {

		const bindings = this.settings.pointerBindings;

		if(!bindings.has(event.button)) {

			return;

		}

		if(this.settings.pointer.behaviour !== PointerBehaviour.DEFAULT) {

			void this.setPointerLocked();

		}

	}

	/**
	 * Handles mouse button events.
	 *
	 * Note: mousedown/mouseup events are used because pointer events don't fire for each button.
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
	 * Handles pointer button events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the button has been pressed down.
	 */

	private handlePointerButtonEvent(event: PointerEvent, pressed: boolean): void {

		if(event.pointerType !== "mouse") {

			// Handle touch/pen events as mouse events.
			this.handleMouseButtonEvent(event, pressed);
			return;

		}

		if(pressed) {

			if(!this.pointerEvents.has(event.pointerId)) {

				this.pointerEvents.set(event.pointerId, event); // count active rotation triggers? for pointer lock and stuff...
				screen.set(event.screenX, event.screenY);

			}

			if(this.settings.pointer.behaviour === PointerBehaviour.DEFAULT) {

				this.domElement?.setPointerCapture(event.pointerId);

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

		this.resetPointerState();

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.resetPointerState();

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
