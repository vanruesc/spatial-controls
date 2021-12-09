import { EventDispatcher, Quaternion, Vector3 } from "three";
import { BoostStrategy, MovementStrategy, RotationStrategy, Strategy, ZoomStrategy } from "../strategies";
import { PointerBehaviour, PointerType } from "../input";
import { RotationManager, TranslationManager } from "../managers";
import { Settings } from "../settings/Settings";
import { Action } from "./Action";
import { ControlMode } from "./ControlMode";
import { Direction } from "./Direction";
import { Disposable } from "./Disposable";
import { Updatable } from "./Updatable";

const v = new Vector3();

/**
 * Spatial controls for 3D translation and rotation.
 *
 * This class emits "update" events when the position or quaternion is changed.
 */

export class SpatialControls extends EventDispatcher implements Disposable, EventListenerObject, Updatable {

	/**
	 * A DOM element. Acts as the primary event target.
	 */

	private domElement: HTMLElement;

	/**
	 * The position that will be modified.
	 */

	private position: Vector3;

	/**
	 * The quaternion that will be modified.
	 */

	private quaternion: Quaternion;

	/**
	 * The target.
	 */

	private target: Vector3;

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
	 * The internal enabled state.
	 */

	private enabled: boolean;

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

	constructor(position = new Vector3(), quaternion = new Quaternion(), domElement: HTMLElement = null) {

		super();

		if(domElement === null && typeof document !== "undefined") {

			this.domElement = document.body;

		} else {

			this.domElement = domElement;

		}

		this.position = position;
		this.quaternion = quaternion;
		this.target = new Vector3();

		this.previousPosition = new Vector3();
		this.previousQuaternion = new Quaternion();
		this.previousTarget = new Vector3();

		const settings = this.settings = new Settings();
		settings.addEventListener("change", (e: unknown) => this.handleEvent(e as Event));

		this.rotationManager = new RotationManager(position, quaternion, this.target, settings);
		this.translationManager = new TranslationManager(position, quaternion, this.target, settings);
		this.rotationManager.addEventListener("update", e => this.dispatchEvent(e));
		this.translationManager.addEventListener("update", e => this.dispatchEvent(e));

		const state = this.translationManager.getMovementState();

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
		this.enabled = false;

		if(position !== null && quaternion !== null) {

			// Note: Default mode is first person.
			this.target.set(0, 0, -1).applyQuaternion(this.quaternion);
			this.lookAt(this.target);

			if(domElement !== null) {

				this.setEnabled();

			}

			this.previousPosition.copy(this.position);
			this.previousQuaternion.copy(this.quaternion);
			this.previousTarget.copy(this.target);

		}

	}

	/**
	 * Returns the DOM element.
	 *
	 * @return The DOM element.
	 */

	getDomElement(): HTMLElement {

		return this.domElement;

	}

	/**
	 * Sets the DOM element.
	 *
	 * @param domElement - The new DOM element.
	 * @return This instance.
	 */

	setDomElement(domElement: HTMLElement): SpatialControls {

		const enabled = this.enabled;

		if(domElement !== null) {

			if(enabled) {

				this.setEnabled(false);

			}

			this.domElement = domElement;
			this.setEnabled(enabled);

		}

		return this;

	}

	/**
	 * Returns the position.
	 *
	 * @return The position.
	 */

	getPosition(): Vector3 {

		return this.position;

	}

	/**
	 * Sets the position.
	 *
	 * @param x - The X-coordinate, or a new position vector.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	setPosition(x: number | Vector3, y?: number, z?: number): SpatialControls {

		if(x instanceof Vector3) {

			this.position = x;
			this.rotationManager.setPosition(x);
			this.translationManager.setPosition(x);

		} else {

			this.position.set(x, y, z);

		}

		return this;

	}

	/**
	 * Returns the quaternion.
	 *
	 * @return The quaternion.
	 */

	getQuaternion(): Quaternion {

		return this.quaternion;

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param quaternion - The new quaternion.
	 * @return This instance.
	 */

	setQuaternion(quaternion: Quaternion): SpatialControls {

		this.quaternion = quaternion;
		this.rotationManager.setQuaternion(quaternion);
		this.translationManager.setQuaternion(quaternion);

		return this;

	}

	/**
	 * Returns the target.
	 *
	 * @return The target.
	 */

	getTarget(): Vector3 {

		return this.target;

	}

	/**
	 * Sets the target.
	 *
	 * @param x - The X-coordinate, or a new target vector.
	 * @param y - The Y-coordinate.
	 * @param z - The Z-coordinate.
	 * @return This instance.
	 */

	setTarget(x: number | Vector3, y?: number, z?: number): SpatialControls {

		if(x instanceof Vector3) {

			this.target = x;
			this.rotationManager.setTarget(x);
			this.translationManager.setTarget(x);

		} else {

			this.target.set(x, y, z);

		}

		return this;

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

			this.rotationManager.lookAt(v.set(x, y, z));

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
	 * @return Whether the controls are enabled.
	 */

	isEnabled(): boolean {

		return this.enabled;

	}

	/**
	 * Enables or disables the controls.
	 *
	 * @param enabled - Whether the controls should be enabled or disabled.
	 * @return This instance.
	 */

	setEnabled(enabled = true): SpatialControls {

		const domElement = this.domElement;
		this.translationManager.getMovementState().reset();

		if(enabled && !this.enabled) {

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

		} else if(!enabled && this.enabled) {

			domElement.style.touchAction = null;

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
		this.enabled = enabled;

		return this;

	}

	/**
	 * Copies the given controls.
	 *
	 * @param controls - A controls instance.
	 * @return This instance.
	 */

	copy(controls: SpatialControls): SpatialControls {

		const p = this.position = controls.getPosition();
		const q = this.quaternion = controls.getQuaternion();
		const t = this.target = controls.getTarget();

		this.domElement = controls.getDomElement();
		this.settings.copy(controls.settings);
		this.rotationManager.setPosition(p).setQuaternion(q).setTarget(t);
		this.translationManager.setPosition(p).setQuaternion(q).setTarget(t);

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

			if(document.pointerLockElement !== this.domElement && this.domElement.requestPointerLock !== undefined) {

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

			this.domElement.addEventListener("pointermove", this, { passive: true });

		} else {

			this.domElement.removeEventListener("pointermove", this);

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
		const pointerBehaviour = settings.pointer.getBehaviour();
		const pointerSensitivity = settings.pointer.getSensitivity();
		const rotationManager = this.rotationManager;

		if(pointerBehaviour !== PointerBehaviour.LOCK_HOLD || this.dragging) {

			rotationManager.adjustSpherical(
				event.movementX * pointerSensitivity * rotation.getSensitivityX(),
				event.movementY * pointerSensitivity * rotation.getSensitivityY()
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
		const behaviour = this.settings.pointer.getBehaviour();

		if(bindings.has(event.button)) {

			const action = bindings.get(event.button);

			// Mouse buttons are handled via mousedown/mouseup since pointer events don't fire for each button.
			if(!(event instanceof PointerEvent && event.pointerType === PointerType.MOUSE)) {

				const strategy = this.strategies.get(action);
				strategy.execute(pressed, event);

				if(action === Action.ROTATE) {

					this.dragging = pressed;

				}

			}

			if(event instanceof PointerEvent) {

				if(pressed && behaviour === PointerBehaviour.DEFAULT) {

					this.domElement.setPointerCapture(event.pointerId);

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

		this.domElement.removeEventListener("pointermove", this);

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

		if(keyBindings.has(event.keyCode)) {

			event.preventDefault();
			const strategy = this.strategies.get(keyBindings.get(event.keyCode));
			strategy.execute(pressed);

		}

	}

	/**
	 * Enables or disables controls based on the pointer lock state.
	 */

	private handlePointerLockEvent(): void {

		if(document.pointerLockElement === this.domElement) {

			this.domElement.addEventListener("pointermove", this, { passive: true });

		} else {

			this.domElement.removeEventListener("pointermove", this);

		}

	}

	/**
	 * Cancels active interactions on visibility loss.
	 */

	private handleVisibilityChangeEvent(): void {

		if(document.hidden) {

			this.translationManager.getMovementState().reset();
			this.domElement.removeEventListener("pointermove", this);

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

		if(!settings.translation.isEnabled()) {

			this.translationManager.resetVelocity();

		}

		if(general.getMode() !== general.getPreviousMode()) {

			if(general.getMode() === ControlMode.THIRD_PERSON) {

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

		const mode = this.settings.general.getMode();
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
				target.multiplyScalar(rotationManager.getRadius());
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

		this.setEnabled(false);

	}

}
