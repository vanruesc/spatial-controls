import { EventDispatcher, Quaternion, Vector3 } from "three";
import { BoostStrategy } from "../strategies/BoostStrategy.js";
import { MovementStrategy } from "../strategies/MovementStrategy.js";
import { RotationStrategy } from "../strategies/RotationStrategy.js";
import { Strategy } from "../strategies/Strategy.js";
import { ZoomStrategy } from "../strategies/ZoomStrategy.js";
import { PointerBehaviour } from "../input/PointerBehaviour.js";
import { PointerType } from "../input/PointerType.js";
import { KeyCode } from "../input/KeyCode.js";
import { keyCodeLegacy } from "../input/keyCodeLegacy.js";
import { RotationManager } from "../managers/RotationManager.js";
import { TranslationManager } from "../managers/TranslationManager.js";
import { Settings } from "../settings/Settings.js";
import { Action } from "./Action.js";
import { ControlMode } from "./ControlMode.js";
import { Direction } from "./Direction.js";
import { Disposable } from "./Disposable.js";
import { Updatable } from "./Updatable.js";

const v = new Vector3();

/**
 * Spatial controls for 3D translation and rotation.
 *
 * This class emits events of type {@link EVENT_UPDATE} when the position or quaternion is changed.
 *
 * @group Core
 */

export class SpatialControls extends EventDispatcher implements Disposable, EventListenerObject, Updatable {

	/**
	 * Triggers when the position or quaternion is changed.
	 *
	 * @event
	 */

	static readonly EVENT_UPDATE = "update";

	/**
	 * @see {@link domElement}
	 */

	private _domElement: HTMLElement | null;

	/**
	 * @see {@link position}
	 */

	private _position: Vector3;

	/**
	 * @see {@link quaternion}
	 */

	private _quaternion: Quaternion;

	/**
	 * @see {@link target}
	 */

	private _target: Vector3;

	/**
	 * The previous position.
	 */

	private previousPosition: Vector3;

	/**
	 * The previous quaternion.
	 */

	private previousQuaternion: Quaternion;

	/**
	 * The previous target.
	 */

	private previousTarget: Vector3;

	/**
	 * A rotation manager.
	 */

	private rotationManager: RotationManager;

	/**
	 * A translation manager.
	 */

	private translationManager: TranslationManager;

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
	 * @param domElement - A DOM element. Serves as the primary event target.
	 */

	constructor(position = new Vector3(), quaternion = new Quaternion(), domElement: HTMLElement | null = null) {

		super();

		if(domElement === null && typeof document !== "undefined") {

			this._domElement = document.body;

		} else {

			this._domElement = domElement;

		}

		this._position = position;
		this._quaternion = quaternion;
		this._target = new Vector3();

		this.previousPosition = new Vector3();
		this.previousQuaternion = new Quaternion();
		this.previousTarget = new Vector3();

		const settings = this.settings = new Settings();
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.rotationManager = new RotationManager(position, quaternion, this._target, settings);
		this.translationManager = new TranslationManager(position, quaternion, this._target, settings);
		this.rotationManager.addEventListener(SpatialControls.EVENT_UPDATE, e => this.dispatchEvent(e));
		this.translationManager.addEventListener(SpatialControls.EVENT_UPDATE, e => this.dispatchEvent(e));

		const state = this.translationManager.movementState;

		this.strategies = new Map<Action, Strategy>([
			[Action.MOVE_FORWARD, new MovementStrategy(state, Direction.FORWARD)],
			[Action.MOVE_LEFT, new MovementStrategy(state, Direction.LEFT)],
			[Action.MOVE_BACKWARD, new MovementStrategy(state, Direction.BACKWARD)],
			[Action.MOVE_RIGHT, new MovementStrategy(state, Direction.RIGHT)],
			[Action.MOVE_DOWN, new MovementStrategy(state, Direction.DOWN)],
			[Action.MOVE_UP, new MovementStrategy(state, Direction.UP)],
			[Action.ZOOM_OUT, new ZoomStrategy(this.rotationManager, false)],
			[Action.ZOOM_IN, new ZoomStrategy(this.rotationManager, true)],
			[Action.BOOST, new BoostStrategy(state)],
			[Action.ROTATE, new RotationStrategy(this)]
		]);

		this.dragging = false;
		this._enabled = false;

		if(position !== null && quaternion !== null) {

			// Note: Default mode is first person.
			this._target.set(0, 0, -1).applyQuaternion(this._quaternion);
			this.lookAt(this._target);

			if(domElement !== null) {

				this.enabled = true;

			}

			this.previousPosition.copy(this._position);
			this.previousQuaternion.copy(this._quaternion);
			this.previousTarget.copy(this._target);

		}

	}

	/**
	 * A DOM element. Acts as the primary event target.
	 */

	get domElement(): HTMLElement | null {

		return this._domElement;

	}

	set domElement(domElement: HTMLElement | null) {

		const enabled = this.enabled;

		if(domElement !== null) {

			if(enabled) {

				this.enabled = false;

			}

			this._domElement = domElement;
			this.enabled = enabled;

		}

	}

	/**
	 * The position.
	 */

	get position(): Vector3 {

		return this._position;

	}

	set position(value: Vector3) {

		this._position = value;
		this.rotationManager.position = value;
		this.translationManager.position = value;

	}

	/**
	 * The quaternion.
	 */

	get quaternion(): Quaternion {

		return this._quaternion;

	}

	set quaternion(value: Quaternion) {

		this._quaternion = value;
		this.rotationManager.quaternion = value;
		this.translationManager.quaternion = value;

	}

	/**
	 * The target.
	 */

	get target(): Vector3 {

		return this._target;

	}

	set target(value: Vector3) {

		this._target = value;
		this.rotationManager.target = value;
		this.translationManager.target = value;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param x - The X-coordinate, or a point.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	lookAt(x: number | Vector3, y?: number, z?: number): SpatialControls {

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
		this.translationManager.movementState.reset();

		if(value && !this._enabled) {

			domElement.style.touchAction = "none";

			document.addEventListener("pointerlockchange", this);
			document.addEventListener("pointerlockerror", this);
			document.addEventListener("visibilitychange", this);
			document.body.addEventListener("keyup", this);
			document.body.addEventListener("keydown", this);
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
			document.body.removeEventListener("keyup", this);
			document.body.removeEventListener("keydown", this);
			domElement.removeEventListener("mousedown", this);
			domElement.removeEventListener("mouseup", this);
			domElement.removeEventListener("pointerdown", this);
			domElement.removeEventListener("pointerup", this);
			domElement.removeEventListener("pointercancel", this);
			domElement.removeEventListener("wheel", this);
			domElement.removeEventListener("pointermove", this);

		}

		this.translationManager.resetVelocity();
		this.rotationManager.resetVelocity();

		this.setPointerLocked(false);
		this._enabled = value;

	}

	/**
	 * Copies the given controls.
	 *
	 * @param controls - A controls instance.
	 * @return This instance.
	 */

	copy(controls: SpatialControls): SpatialControls {

		const p = this.position = controls.position;
		const q = this.quaternion = controls.quaternion;
		const t = this.target = controls.target;

		this.domElement = controls.domElement;
		this.settings.copy(controls.settings);

		this.rotationManager.position = p;
		this.rotationManager.quaternion = q;
		this.rotationManager.target = t;

		this.translationManager.position = p;
		this.translationManager.quaternion = q;
		this.translationManager.target = t;

		return this.lookAt(t);

	}

	/**
	 * Clones this instance.
	 *
	 * @return The cloned controls.
	 */

	clone(): SpatialControls {

		const clone = new SpatialControls();
		return clone.copy(this);

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

		if(enabled) {

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

			rotationManager.adjustSpherical(
				event.movementX * pointerSensitivity * rotation.sensitivityX,
				event.movementY * pointerSensitivity * rotation.sensitivityY
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

			const action = bindings.get(event.button) as Action;

			// Mouse buttons are handled via mousedown/mouseup since pointer events don't fire for each button.
			if(!(event instanceof PointerEvent && event.pointerType === PointerType.MOUSE)) {

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
	 * Enables or disables controls based on the pointer lock state.
	 */

	private handlePointerLockEvent(): void {

		if(document.pointerLockElement === this.domElement) {

			this.domElement?.addEventListener("pointermove", this, { passive: true });

		} else {

			this.domElement?.removeEventListener("pointermove", this);

		}

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.translationManager.movementState.reset();
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

		if(!settings.translation.enabled) {

			this.translationManager.resetVelocity();

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

		this.previousPosition.copy(this.position);
		this.previousQuaternion.copy(this.quaternion);
		this.previousTarget.copy(this.target);

	}

	/**
	 * Synchronizes the internal state with external changes.
	 */

	private synchronize(): void {

		const mode = this.settings.general.mode;
		const rotationManager = this.rotationManager;

		const previousPosition = this.previousPosition;
		const previousQuaternion = this.previousQuaternion;
		const previousTarget = this.previousTarget;

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

			case "keydown":
				this.handleKeyboardEvent(event as KeyboardEvent, true);
				break;

			case "keyup":
				this.handleKeyboardEvent(event as KeyboardEvent, false);
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

		this.synchronize();

		this.rotationManager.update(timestamp);
		this.translationManager.update(timestamp);

		this.previousPosition.copy(this.position);
		this.previousQuaternion.copy(this.quaternion);
		this.previousTarget.copy(this.target);

	}

	dispose(): void {

		this.enabled = false;

	}

}
