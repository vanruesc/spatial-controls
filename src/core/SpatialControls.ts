import { Quaternion, Vector2, Vector3 } from "three";
import { Disposable } from "./Disposable";
import { PointerButton } from "../input/PointerButton";
import { RotationManager, TranslationManager } from "../managers";
import { Settings } from "../settings/Settings";
import { Direction, MovementStrategy, Strategy, ZoomStrategy } from "../strategies";
import { Action } from "./Action";

/**
 * Spatial controls for 3D translation and rotation.
 */

export class SpatialControls implements Disposable, EventListenerObject {

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
	 * The control settings.
	 */

	settings: Settings;

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
	 * A screen position.
	 */

	private lastScreenPosition: Vector2;

	/**
	 * Indicates whether the user is currently holding the pointer button down.
	 */

	private dragging: boolean;

	/**
	 * The internal enabled state.
	 */

	private enabled: boolean;

	/**
	 * Constructs new controls.
	 *
	 * @param position - A position.
	 * @param quaternion - A quaternion.
	 * @param domElement - A DOM element. Acts as the primary event target.
	 */

	constructor(position: Vector3 = null, quaternion: Quaternion = null, domElement: HTMLElement = document.body) {

		this.domElement = domElement;

		this.position = position;
		this.quaternion = quaternion;
		this.target = new Vector3();

		this.settings = new Settings();
		this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);
		this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);

		const movementState = this.translationManager.movementState;

		this.strategies = new Map<Action, Strategy>([
			[Action.MOVE_FORWARD, new MovementStrategy(movementState, Direction.FORWARD)],
			[Action.MOVE_LEFT, new MovementStrategy(movementState, Direction.LEFT)],
			[Action.MOVE_BACKWARD, new MovementStrategy(movementState, Direction.BACKWARD)],
			[Action.MOVE_RIGHT, new MovementStrategy(movementState, Direction.RIGHT)],
			[Action.MOVE_DOWN, new MovementStrategy(movementState, Direction.DOWN)],
			[Action.MOVE_UP, new MovementStrategy(movementState, Direction.UP)],
			[Action.ZOOM_OUT, new ZoomStrategy(this.rotationManager, false)],
			[Action.ZOOM_IN, new ZoomStrategy(this.rotationManager, true)]
		]);

		this.lastScreenPosition = new Vector2();
		this.dragging = false;
		this.enabled = false;

		if(position !== null && quaternion !== null) {

			this.lookAt(this.target);

			if(domElement !== null) {

				this.setEnabled();

			}

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
	 * Sets the position vector.
	 *
	 * @param position - The new position vector.
	 * @return This instance.
	 */

	setPosition(position: Vector3): SpatialControls {

		this.position = position;
		this.rotationManager.setPosition(position);
		this.translationManager.setPosition(position);

		return this.lookAt(this.target);

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

		return this.lookAt(this.target);

	}

	/**
	 * Returns the current target.
	 *
	 * @param target - A vector to store the target in.
	 * @return The target.
	 */

	getTarget(target: Vector3): Vector3 {

		target.copy(this.target);

		if(!this.settings.general.orbit) {

			// The target is relative to the position.
			target.add(this.position);

		}

		return target;

	}

	/**
	 * Sets the target.
	 *
	 * @param target - The new target.
	 * @return This instance.
	 */

	setTarget(target: Vector3): SpatialControls {

		this.target = target;
		this.rotationManager.setTarget(target);
		this.translationManager.setTarget(target);

		return this.lookAt(this.target);

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
	 * Changes the control mode to first or third person perspective.
	 *
	 * @param orbit - Whether the third person perspective should be enabled.
	 * @return This instance.
	 */

	setOrbitEnabled(orbit: boolean): SpatialControls {

		const general = this.settings.general;

		if(general.orbit !== orbit) {

			this.getTarget(this.target);
			general.orbit = orbit;
			this.lookAt(this.target);

		}

		return this;

	}

	/**
	 * Copies the given controls.
	 *
	 * @param controls - A controls instance.
	 * @return This instance.
	 */

	copy(controls: SpatialControls): SpatialControls {

		this.domElement = controls.getDomElement();
		this.position = controls.getPosition();
		this.quaternion = controls.getQuaternion();
		this.target = controls.getTarget(new Vector3());

		this.settings.copy(controls.settings);

		this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
		this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);

		return this.lookAt(this.target);

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
	 * Handles pointer move events.
	 *
	 * @param event - A pointer event.
	 */

	private handlePointerMoveEvent(event: MouseEvent): void {

		const settings = this.settings;
		const pointer = settings.pointer;
		const sensitivity = settings.sensitivity;
		const rotationManager = this.rotationManager;
		const lastScreenPosition = this.lastScreenPosition;

		if(document.pointerLockElement === this.domElement) {

			if(!pointer.hold || this.dragging) {

				rotationManager.adjustSpherical(
					event.movementX * 0.001 * sensitivity.rotationX,
					event.movementY * 0.001 * sensitivity.rotationY
				).updateQuaternion();

			}

		} else {

			// Compensate for inconsistent web APIs.
			const movementX = event.screenX - lastScreenPosition.x;
			const movementY = event.screenY - lastScreenPosition.y;

			lastScreenPosition.set(event.screenX, event.screenY);

			rotationManager.adjustSpherical(
				movementX * 0.001 * sensitivity.rotationX,
				movementY * 0.001 * sensitivity.rotationY
			).updateQuaternion();

		}

	}

	/**
	 * Handles touch move events.
	 *
	 * @param event - A touch event.
	 */

	private handleTouchMoveEvent(event: TouchEvent): void {

		const sensitivity = this.settings.sensitivity;
		const rotationManager = this.rotationManager;
		const lastScreenPosition = this.lastScreenPosition;
		const touch = event.touches[0];

		// Compensate for inconsistent web APIs.
		const movementX = touch.screenX - lastScreenPosition.x;
		const movementY = touch.screenY - lastScreenPosition.y;

		lastScreenPosition.set(touch.screenX, touch.screenY);

		// Don't produce a mouse move event.
		event.preventDefault();

		rotationManager.adjustSpherical(
			movementX * 0.001 * sensitivity.rotationX,
			movementY * 0.001 * sensitivity.rotationY
		).updateQuaternion();

	}

	/**
	 * Handles main pointer button events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the pointer button has been pressed down.
	 */

	private handleMainPointerButton(event: PointerEvent, pressed: boolean): void {

		this.dragging = pressed;

		if(this.settings.pointer.lock) {

			this.setPointerLocked();

		} else {

			if(pressed) {

				this.lastScreenPosition.set(event.screenX, event.screenY);
				this.domElement.addEventListener("mousemove", this);

			} else {

				this.domElement.removeEventListener("mousemove", this);

			}

		}

	}

	/**
	 * Handles auxiliary pointer button events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the pointer button has been pressed down.
	 */

	private handleAuxiliaryPointerButton(event: PointerEvent, pressed: boolean): void {}

	/**
	 * Handles secondary pointer button events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the pointer button has been pressed down.
	 */

	private handleSecondaryPointerButton(event: PointerEvent, pressed: boolean): void {}

	/**
	 * Handles pointer events.
	 *
	 * @param event - A pointer event.
	 * @param pressed - Whether the pointer button has been pressed down.
	 */

	private handlePointerButtonEvent(event: PointerEvent, pressed: boolean): void {

		event.preventDefault();

		switch(event.button) {

			case PointerButton.MAIN:
				this.handleMainPointerButton(event, pressed);
				break;

			case PointerButton.AUXILIARY:
				this.handleAuxiliaryPointerButton(event, pressed);
				break;

			case PointerButton.SECONDARY:
				this.handleSecondaryPointerButton(event, pressed);
				break;

		}

	}

	/**
	 * Handles touch start and end events.
	 *
	 * @param event - A touch event.
	 * @param start - Whether the event is a touch start event.
	 */

	private handleTouchEvent(event: TouchEvent, start: boolean): void {

		const touch = event.touches[0];

		// Don't produce mouse events.
		event.preventDefault();

		if(start) {

			this.lastScreenPosition.set(touch.screenX, touch.screenY);
			this.domElement.addEventListener("touchmove", this);

		} else {

			this.domElement.removeEventListener("touchmove", this);

		}

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

			this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);

		}

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

		if(document.pointerLockElement === this.domElement) {

			this.domElement.addEventListener("mousemove", this);

		} else {

			this.domElement.removeEventListener("mousemove", this);

		}

	}

	/**
	 * Handles events.
	 *
	 * @param event - An event.
	 */

	handleEvent(event: Event): void {

		switch(event.type) {

			case "mousemove":
				this.handlePointerMoveEvent(event as PointerEvent);
				break;

			case "touchmove":
				this.handleTouchMoveEvent(event as TouchEvent);
				break;

			case "mousedown":
				this.handlePointerButtonEvent(event as PointerEvent, true);
				break;

			case "mouseup":
				this.handlePointerButtonEvent(event as PointerEvent, false);
				break;

			case "touchstart":
				this.handleTouchEvent(event as TouchEvent, true);
				break;

			case "touchend":
				this.handleTouchEvent(event as TouchEvent, false);
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

		}

	}

	/**
	 * Updates movement and rotation calculations based on time.
	 *
	 * @param {number} deltaTime - The time since the last update in seconds.
	 */

	update(deltaTime: number): void {

		this.rotationManager.update(deltaTime);
		this.translationManager.update(deltaTime);

	}

	/**
	 * Moves to the given position.
	 *
	 * @param position - The position.
	 * @return This instance.
	 */

	moveTo(position: Vector3): SpatialControls {

		this.translationManager.moveTo(position);
		return this;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param point - The target point.
	 * @return This instance.
	 */

	lookAt(point: Vector3): SpatialControls {

		this.rotationManager.lookAt(point);
		return this;

	}

	/**
	 * Locks or unlocks the pointer.
	 *
	 * @param locked - Whether the pointer should be locked.
	 */

	private setPointerLocked(locked = true): void {

		if(locked) {

			if(document.pointerLockElement !== this.domElement &&
				this.domElement.requestPointerLock !== undefined) {

				this.domElement.requestPointerLock();

			}

		} else if(document.exitPointerLock !== undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Enables or disables the controls.
	 *
	 * @param enabled - Whether the controls should be enabled or disabled.
	 * @return This instance.
	 */

	setEnabled(enabled = true): SpatialControls {

		const domElement = this.domElement;

		this.translationManager.movementState.reset();

		if(enabled && !this.enabled) {

			document.addEventListener("pointerlockchange", this);
			document.body.addEventListener("keyup", this);
			document.body.addEventListener("keydown", this);
			domElement.addEventListener("mousedown", this);
			domElement.addEventListener("mouseup", this);
			domElement.addEventListener("touchstart", this);
			domElement.addEventListener("touchend", this);
			domElement.addEventListener("wheel", this);

		} else if(!enabled && this.enabled) {

			document.removeEventListener("pointerlockchange", this);
			document.body.removeEventListener("keyup", this);
			document.body.removeEventListener("keydown", this);
			domElement.removeEventListener("mousedown", this);
			domElement.removeEventListener("mouseup", this);
			domElement.removeEventListener("touchstart", this);
			domElement.removeEventListener("touchend", this);
			domElement.removeEventListener("wheel", this);
			domElement.removeEventListener("mousemove", this);
			domElement.removeEventListener("touchmove", this);

		}

		this.setPointerLocked(false);
		this.enabled = enabled;

		return this;

	}

	dispose(): void {

		this.setEnabled(false);

	}

}
