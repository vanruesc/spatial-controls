import { EventDispatcher, Quaternion, Vector2, Vector3 } from "three";
import { RotationStrategy } from "../strategies/RotationStrategy.js";
import { Strategy } from "../strategies/Strategy.js";
import { ZoomStrategy } from "../strategies/ZoomStrategy.js";
import { PointerBehaviour } from "../input/PointerBehaviour.js";
import { PointerType } from "../input/PointerType.js";
import { RotationManager } from "../managers/RotationManager.js";
import { Settings } from "../settings/Settings.js";
import { Action } from "./Action.js";
import { ControlMode } from "./ControlMode.js";
import { ControlsEventMap } from "./ControlsEventMap.js";
import { Disposable } from "./Disposable.js";
import { Updatable } from "./Updatable.js";

const v = /* @__PURE__ */ new Vector3();
const p = /* @__PURE__ */ new Vector2();

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
	 * Triggers when the quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * A rotation manager.
	 */

	private rotationManager: RotationManager;

	/**
	 * A map that links actions to specific strategies.
	 */

	private strategies: Map<Action, Strategy>;

	/**
	 * Indicates whether the user is currently holding the pointer button down.
	 */

	private dragging: boolean;

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
		this.dragging = false;

		this.settings = settings;
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.rotationManager = new RotationManager(position, quaternion, target, settings);
		this.rotationManager.addEventListener(RotationControls.EVENT_UPDATE, e => this.dispatchEvent(e));

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

			this.rotationManager.lookAt(v.set(x, y as number, z as number));

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
	 * Indicates whether the controls are enabled.
	 *
	 * Event listeners will be registered or unregistered depending on this flag.
	 */

	get enabled(): boolean {

		return this._enabled;

	}

	set enabled(value: boolean) {

		if(this.domElement === null) {

			return;

		}

		const domElement = this.domElement;

		if(value && !this._enabled) {

			domElement.style.touchAction = "none";

			document.addEventListener("pointerlockchange", this);
			document.addEventListener("pointerlockerror", this);
			document.addEventListener("visibilitychange", this);
			domElement.addEventListener("mousedown", this);
			domElement.addEventListener("mouseup", this);
			domElement.addEventListener("pointerdown", this);
			domElement.addEventListener("pointerup", this);
			domElement.addEventListener("pointercancel", this);
			domElement.addEventListener("wheel", this, { passive: true });

		} else if(!value && this._enabled) {

			domElement.style.touchAction = "";

			document.removeEventListener("pointerlockchange", this);
			document.removeEventListener("pointerlockerror", this);
			document.removeEventListener("visibilitychange", this);
			domElement.removeEventListener("mousedown", this);
			domElement.removeEventListener("mouseup", this);
			domElement.removeEventListener("pointerdown", this);
			domElement.removeEventListener("pointerup", this);
			domElement.removeEventListener("pointercancel", this);
			domElement.removeEventListener("wheel", this);
			domElement.removeEventListener("pointermove", this);

		}

		this.rotationManager.resetVelocity();
		this.setPointerLocked(false);
		this._enabled = value;

	}

	/**
	 * Locks or unlocks the pointer.
	 *
	 * @param locked - Whether the pointer should be locked.
	 */

	setPointerLocked(locked = true): void {

		if(locked) {

			if(document.pointerLockElement !== this.domElement && this.domElement?.requestPointerLock !== undefined) {

				this.domElement.requestPointerLock();

			}

		} else if(document.exitPointerLock !== undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Enables or disables the rotation mode.
	 *
	 * @param pressed - Whether the rotation mode should be activated.
	 */

	setRotationEnabled(enabled: boolean): void {

		if(this.settings.rotation.enabled && enabled) {

			this.domElement?.addEventListener("pointermove", this, { passive: true });

		} else {

			this.domElement?.removeEventListener("pointermove", this);

		}

	}

	/**
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: PointerEvent): void {

		const settings = this.settings;
		const rotation = settings.rotation;
		const pointerBehaviour = settings.pointer.behaviour;
		const pointerSensitivity = settings.pointer.sensitivity;
		const rotationManager = this.rotationManager;

		if(pointerBehaviour !== PointerBehaviour.LOCK_HOLD || this.dragging) {

			let { movementX, movementY } = event;

			if(movementX === undefined || movementY === undefined) {

				// Webkit (Safari, Chrome) on iOS doesn't support movementX/Y for PointerEvents.
				// Note: clientX/Y is always 0 when the pointer is locked, but mobile devices don't have pointer lock.
				movementX = event.clientX - p.x;
				movementY = event.clientY - p.y;
				p.set(event.clientX, event.clientY);

			}

			rotationManager.adjustSpherical(
				movementX * pointerSensitivity * rotation.sensitivityX,
				movementY * pointerSensitivity * rotation.sensitivityY
			);

		}

	}

	/**
	 * Handles pointer button events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the pointer button has been pressed down.
	 */

	private handlePointerButtonEvent(event: PointerEvent, pressed: boolean): void {

		const bindings = this.settings.pointerBindings;
		const behaviour = this.settings.pointer.behaviour;

		if(bindings.has(event.button)) {

			p.set(event.clientX, event.clientY);

			const action = bindings.get(event.button) as Action;

			// Mouse buttons are handled via mousedown/mouseup since pointer events don't fire for each button.
			if(!(event instanceof PointerEvent && event.pointerType === PointerType.MOUSE as string)) {

				const strategy = this.strategies.get(action);
				strategy?.execute(pressed, event);

				if(action === Action.ROTATE) {

					this.dragging = pressed;

				}

			}

			if(event instanceof PointerEvent) {

				if(pressed && behaviour === PointerBehaviour.DEFAULT) {

					this.domElement?.setPointerCapture(event.pointerId);

				}

			}

		}

	}

	/**
	 * Handles pointer cancel and leave events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerCancelEvent(event: PointerEvent): void {

		this.domElement?.removeEventListener("pointermove", this);

	}

	/**
	 * Handles wheel events.
	 *
	 * @param event - A wheel event.
	 */

	private handleWheelEvent(event: WheelEvent): void {

		this.rotationManager.zoom(Math.sign(event.deltaY));

	}

	/**
	 * Enables or disables controls based on the pointer lock state.
	 */

	private handlePointerLockEvent(): void {

		this.setRotationEnabled(document.pointerLockElement === this.domElement);

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.domElement?.removeEventListener("pointermove", this);

		}

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

			this.rotationManager.resetVelocity();

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

			case "pointerdown":
			case "mousedown":
				this.handlePointerButtonEvent(event as PointerEvent, true);
				break;

			case "pointerup":
			case "mouseup":
				this.handlePointerButtonEvent(event as PointerEvent, false);
				break;

			case "pointercancel":
				this.handlePointerCancelEvent(event as PointerEvent);
				break;

			case "wheel":
				this.handleWheelEvent(event as WheelEvent);
				break;

			case "pointerlockchange":
				this.handlePointerLockEvent();
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

		this.rotationManager.update(timestamp);

	}

	dispose(): void {

		this.enabled = false;

	}

}
