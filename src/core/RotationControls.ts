import { EventDispatcher, Quaternion, Vector2, Vector3 } from "three";
import { KeyCode } from "../input/KeyCode.js";
import { PointerBehaviour } from "../input/PointerBehaviour.js";
import { RotationManager } from "../managers/RotationManager.js";
import { Settings } from "../settings/Settings.js";
import { RotationStrategy } from "../strategies/RotationStrategy.js";
import { Strategy } from "../strategies/Strategy.js";
import { ZoomStrategy } from "../strategies/ZoomStrategy.js";
import { Action } from "./Action.js";
import { ControlMode } from "./ControlMode.js";
import { ControlsEventMap } from "./ControlsEventMap.js";
import { Disposable } from "./Disposable.js";
import { Updatable } from "./Updatable.js";

const v = /* @__PURE__ */ new Vector3();
const screen = /* @__PURE__ */ new Vector2();

/**
 * 3D rotation controls.
 *
 * This class emits events of type {@link EVENT_UPDATE} when the quaternion is changed.
 *
 * @group Core
 */

export class RotationControls extends EventDispatcher<ControlsEventMap>
	implements Disposable, EventListenerObject, Updatable {

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * A rotation manager.
	 */

	private readonly rotationManager: RotationManager;

	/**
	 * A map that links actions to specific strategies.
	 */

	private readonly strategies: Map<Action, Strategy>;

	/**
	 * Indicates whether the rotation mode is currently enabled.
	 */

	private rotationEnabled: boolean;

	/**
	 * @see {@link enabled}
	 */

	private _enabled: boolean;

	/**
	 * The control settings.
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

		this._domElement = null;
		this._enabled = false;
		this.rotationEnabled = false;

		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.rotationManager = new RotationManager(position, quaternion, target, settings);
		this.rotationManager.addEventListener("update", e => this.dispatchEvent(e));

		this.strategies = new Map<Action, Strategy>([
			[Action.ZOOM_OUT, new ZoomStrategy(this.rotationManager, false)],
			[Action.ZOOM_IN, new ZoomStrategy(this.rotationManager, true)],
			[Action.ROTATE, new RotationStrategy(this)]
		]);

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
		this.dispose();
		this.enabled = enabled;

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this.rotationManager.position;

	}

	set position(value: Vector3) {

		this.rotationManager.position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this.rotationManager.quaternion;

	}

	set quaternion(value: Quaternion) {

		this.rotationManager.quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this.rotationManager.target;

	}

	set target(value: Vector3) {

		this.rotationManager.target = value;

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
			this.rotationManager.resetVelocity();
			this.setPointerLocked(false);
			this.resetPointerState();

		}

	}

	/**
	 * Adds all necessary event listeners.
	 */

	private addEventListeners(): void {

		if(typeof document === "undefined") {

			return;

		}

		document.addEventListener("pointerlockchange", this);
		document.addEventListener("pointerlockerror", this);

	}

	/**
	 * Removes all event listeners.
	 */

	private removeEventListeners(): void {

		if(typeof document === "undefined") {

			return;

		}

		document.removeEventListener("pointerlockchange", this);
		document.removeEventListener("pointerlockerror", this);

	}

	/**
	 * Looks at the given point.
	 *
	 * @param x - The X-coordinate, or a point.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	lookAt(x: number | Vector3, y?: number, z?: number): RotationControls {

		if(x instanceof Vector3) {

			this.rotationManager.lookAt(x);

		} else {

			this.rotationManager.lookAt(v.set(x, y!, z!));

		}

		return this;

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getViewDirection(view: Vector3): Vector3 {

		return this.rotationManager.getViewDirection(view);

	}

	/**
	 * Returns the projected view direction.
	 *
	 * The projected direction will be reached if there are no further rotation adjustments. If damping is disabled,
	 * the vector will be equal to the direction returned by {@link getViewDirection}.
	 *
	 * @param view - A vector to store the direction in.
	 * @return The normalized view direction.
	 */

	getProjectedViewDirection(view: Vector3): Vector3 {

		return this.rotationManager.getProjectedViewDirection(view);

	}

	/**
	 * Locks or unlocks the pointer.
	 *
	 * @param value - Whether the pointer should be locked.
	 */

	setPointerLocked(value = true): void {

		if(value) {

			if(document.pointerLockElement !== this.domElement && this.domElement?.requestPointerLock !== undefined) {

				void this.domElement.requestPointerLock();

			}

		} else if(document.exitPointerLock !== undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Enables or disables the rotation mode.
	 *
	 * @param value - Whether the rotation mode should be activated.
	 */

	setRotationEnabled(value: boolean): void {

		this.rotationEnabled = (value && this.settings.rotation.enabled);

	}

	/**
	 * Reset the current pointer state.
	 */

	private resetPointerState(): void {

		this.pointerEvents.clear();
		this.dragging = false;
		this.rotationEnabled = false;

	}

	/**
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: PointerEvent): void {

		const settings = this.settings;
		let { movementX, movementY } = event;

		if(movementX === undefined || movementY === undefined) {

			movementX = event.screenX - screen.x;
			movementY = event.screenY - screen.y;
			screen.set(event.screenX, event.screenY);

		}

		if(this.rotationEnabled) {

			if(settings.pointer.behaviour === PointerBehaviour.LOCK_HOLD && !this.dragging) {

				return;

			}

			this.rotationManager.adjustSpherical(
				movementX * settings.pointer.sensitivity * settings.rotation.sensitivityX,
				movementY * settings.pointer.sensitivity * settings.rotation.sensitivityY
			);

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

		for(const action of bindings.match(event)!) {

			this.strategies.get(action)?.execute(pressed, event);

		}

	}

	/**
	 * Enables or disables controls based on the pointer lock state.
	 */

	private handlePointerLockEvent(): void {

		this.setRotationEnabled(document.pointerLockElement === this.domElement);

	}

	/**
	 * Reacts to setting changes.
	 *
	 * @param event - An event.
	 */

	private onSettingsChanged(event: Event): void {

		const rotationManager = this.rotationManager;
		const settings = this.settings;
		const general = settings.general;

		if(!settings.rotation.enabled) {

			rotationManager.resetVelocity();

		}

		if(general.mode !== general.previousMode) {

			if(general.mode === ControlMode.THIRD_PERSON) {

				// Switch to third person.
				v.copy(this.target);
				this.target.copy(this.position);
				this.position.sub(v);

			} else {

				// Switch to first person.
				this.position.copy(this.target);
				this.target.set(0, 0, -1).applyQuaternion(this.quaternion);

			}

			rotationManager.updateSpherical();

		} else {

			rotationManager.restrictSpherical();

		}

		rotationManager.updatePosition().updateQuaternion();

	}

	/**
	 * Synchronizes the internal state with external changes.
	 *
	 * @param previousPosition - The previous position.
	 * @param previousQuaternion - The previous quaternion.
	 * @param previousTarget - The previous target.
	 */

	synchronize(previousPosition: Vector3, previousQuaternion: Quaternion, previousTarget: Vector3): void {

		const mode = this.settings.general.mode;
		const rotationManager = this.rotationManager;

		const position = this.position;
		const quaternion = this.quaternion;
		const target = this.target;

		if(!previousQuaternion.equals(quaternion)) {

			if(mode === ControlMode.THIRD_PERSON) {

				target.set(0, 0, -1).applyQuaternion(quaternion);
				target.multiplyScalar(rotationManager.radius);
				target.add(position);

			} else {

				target.set(0, 0, -1).applyQuaternion(quaternion);

			}

			rotationManager.updateSpherical();

		} else if(!previousTarget.equals(target)) {

			if(!previousPosition.equals(position)) {

				rotationManager.updateSpherical().updateQuaternion();

			} else {

				if(mode === ControlMode.THIRD_PERSON) {

					rotationManager.updatePosition();

				} else {

					rotationManager.updateSpherical().updateQuaternion();

				}

			}

		} else if(!previousPosition.equals(position)) {

			if(mode === ControlMode.THIRD_PERSON) {

				rotationManager.updateSpherical().updateQuaternion();

			}

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

			case "pointerlockchange":
			case "pointerlockerror":
				this.handlePointerLockEvent();
				break;

			case "keydown":
				this.handleKeyboardEvent(event as KeyboardEvent, true);
				break;

			case "keyup":
				this.handleKeyboardEvent(event as KeyboardEvent, false);
				break;

			case "change":
				this.onSettingsChanged(event);
				break;

		}

	}

	update(timestamp: number): void {

		this.rotationManager.update(timestamp);

	}

	dispose(): void {

		this.enabled = false;

	}

}
