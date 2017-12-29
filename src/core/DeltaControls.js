import { Vector2, Vector3 } from "math-ds";
import { PointerButton } from "../input/PointerButton.js";
import { RotationManager } from "../managers/RotationManager.js";
import { TranslationManager } from "../managers/TranslationManager.js";
import { Settings } from "../settings/Settings.js";
import { Direction, MovementStrategy } from "../strategies/MovementStrategy.js";
import { ZoomStrategy } from "../strategies/ZoomStrategy.js";
import { Action } from "./Action.js";

/**
 * Movement controls driven by user input.
 *
 * @implements {Disposable}
 * @implements {EventListener}
 */

export class DeltaControls {

	/**
	 * Constructs new controls.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Quaternion} quaternion - A quaternion.
	 * @param {HTMLElement} [dom=document.body] - A DOM element. Acts as the primary event target.
	 */

	constructor(position, quaternion, dom = document.body) {

		/**
		 * A DOM element. Acts as the primary event target.
		 *
		 * @type {HTMLElement}
		 * @private
		 */

		this.dom = dom;

		/**
		 * The position that will be modified.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.position = position;

		/**
		 * The quaternion that will be modified.
		 *
		 * @type {Quaternion}
		 * @private
		 */

		this.quaternion = quaternion;

		/**
		 * The target.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.target = new Vector3();

		/**
		 * The control settings.
		 *
		 * @type {Settings}
		 */

		this.settings = new Settings();

		/**
		 * A rotation manager.
		 *
		 * @type {RotationManager}
		 * @private
		 */

		this.rotationManager = new RotationManager(position, quaternion, this.target, this.settings);

		// Update the orientation right away.
		this.lookAt(this.target);

		/**
		 * A translation manager.
		 *
		 * @type {TranslationManager}
		 * @private
		 */

		this.translationManager = new TranslationManager(position, quaternion, this.target, this.settings);

		/**
		 * A map that links actions to specific strategies.
		 *
		 * @type {Map}
		 * @private
		 */

		this.strategies = ((rotationManager, translationManager) => {

			const state = translationManager.movementState;

			return new Map([

				[Action.MOVE_FORWARD, new MovementStrategy(state, Direction.FORWARD)],
				[Action.MOVE_LEFT, new MovementStrategy(state, Direction.LEFT)],
				[Action.MOVE_BACKWARD, new MovementStrategy(state, Direction.BACKWARD)],
				[Action.MOVE_RIGHT, new MovementStrategy(state, Direction.RIGHT)],
				[Action.MOVE_DOWN, new MovementStrategy(state, Direction.DOWN)],
				[Action.MOVE_UP, new MovementStrategy(state, Direction.UP)],
				[Action.ZOOM_OUT, new ZoomStrategy(rotationManager, false)],
				[Action.ZOOM_IN, new ZoomStrategy(rotationManager, true)]

			]);

		})(this.rotationManager, this.translationManager);

		/**
		 * A screen position.
		 *
		 * @type {Vector2}
		 * @private
		 */

		this.lastScreenPosition = new Vector2();

		/**
		 * Indicates whether the user is currently holding the pointer button down.
		 *
		 * @type {Boolean}
		 * @private
		 */

		this.dragging = false;

		/**
		 * The internal enabled state.
		 *
		 * @type {Boolean}
		 * @private
		 */

		this.enabled = false;

		if(dom !== null) {

			this.setEnabled();

		}

	}

	/**
	 * Handles pointer move events.
	 *
	 * @private
	 * @param {MouseEvent} event - A pointer event.
	 */

	handlePointerMoveEvent(event) {

		const settings = this.settings;
		const pointer = settings.pointer;
		const sensitivity = settings.sensitivity;
		const rotationManager = this.rotationManager;
		const lastScreenPosition = this.lastScreenPosition;

		let movementX, movementY;

		if(document.pointerLockElement === this.dom) {

			if(!pointer.hold || this.dragging) {

				rotationManager.adjustSpherical(
					event.movementX * sensitivity.rotation,
					event.movementY * sensitivity.rotation
				).updateQuaternion();

			}

		} else {

			// Compensate for inconsistent web APIs.
			movementX = event.screenX - lastScreenPosition.x;
			movementY = event.screenY - lastScreenPosition.y;

			lastScreenPosition.set(event.screenX, event.screenY);

			rotationManager.adjustSpherical(
				movementX * sensitivity.rotation,
				movementY * sensitivity.rotation
			).updateQuaternion();

		}

	}

	/**
	 * Handles touch move events.
	 *
	 * @private
	 * @param {TouchEvent} event - A touch event.
	 */

	handleTouchMoveEvent(event) {

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
			movementX * sensitivity.rotation,
			movementY * sensitivity.rotation
		).updateQuaternion();

	}

	/**
	 * Handles main pointer button events.
	 *
	 * @private
	 * @param {MouseEvent} event - A pointer event.
	 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
	 */

	handleMainPointerButton(event, pressed) {

		this.dragging = pressed;

		if(this.settings.pointer.lock) {

			this.setPointerLocked();

		} else {

			if(pressed) {

				this.lastScreenPosition.set(event.screenX, event.screenY);
				this.dom.addEventListener("mousemove", this);

			} else {

				this.dom.removeEventListener("mousemove", this);

			}

		}

	}

	/**
	 * Handles auxiliary pointer button events.
	 *
	 * @private
	 * @param {MouseEvent} event - A pointer event.
	 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
	 */

	handleAuxiliaryPointerButton(event, pressed) {

	}

	/**
	 * Handles secondary pointer button events.
	 *
	 * @private
	 * @param {MouseEvent} event - A pointer event.
	 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
	 */

	handleSecondaryPointerButton(event, pressed) {

	}

	/**
	 * Handles pointer events.
	 *
	 * @private
	 * @param {MouseEvent} event - A pointer event.
	 * @param {Boolean} pressed - Whether the pointer button has been pressed down.
	 */

	handlePointerButtonEvent(event, pressed) {

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
	 * @private
	 * @param {TouchEvent} event - A touch event.
	 * @param {Boolean} start - Whether the event is a touch start event.
	 */

	handleTouchEvent(event, start) {

		const touch = event.touches[0];

		// Don't produce mouse events.
		event.preventDefault();

		if(start) {

			this.lastScreenPosition.set(touch.screenX, touch.screenY);
			this.dom.addEventListener("touchmove", this);

		} else {

			this.dom.removeEventListener("touchmove", this);

		}

	}

	/**
	 * Handles keyboard events.
	 *
	 * @private
	 * @param {KeyboardEvent} event - A keyboard event.
	 * @param {Boolean} pressed - Whether the key has been pressed down.
	 */

	handleKeyboardEvent(event, pressed) {

		const keyBindings = this.settings.keyBindings;

		if(keyBindings.has(event.keyCode)) {

			event.preventDefault();

			this.strategies.get(keyBindings.get(event.keyCode)).execute(pressed);

		}

	}

	/**
	 * Handles wheel events.
	 *
	 * @private
	 * @param {WheelEvent} event - A wheel event.
	 */

	handleWheelEvent(event) {

		this.rotationManager.zoom(event.deltaY);

	}

	/**
	 * Enables or disables controls based on the pointer lock state.
	 *
	 * @private
	 */

	handlePointerLockEvent() {

		if(document.pointerLockElement === this.dom) {

			this.dom.addEventListener("mousemove", this);

		} else {

			this.dom.removeEventListener("mousemove", this);

		}

	}

	/**
	 * Handles events.
	 *
	 * @param {Event} event - An event.
	 */

	handleEvent(event) {

		switch(event.type) {

			case "mousemove":
				this.handlePointerMoveEvent(event);
				break;

			case "touchmove":
				this.handleTouchMoveEvent(event);
				break;

			case "mousedown":
				this.handlePointerButtonEvent(event, true);
				break;

			case "mouseup":
				this.handlePointerButtonEvent(event, false);
				break;

			case "touchstart":
				this.handleTouchEvent(event, true);
				break;

			case "touchend":
				this.handleTouchEvent(event, false);
				break;

			case "keydown":
				this.handleKeyboardEvent(event, true);
				break;

			case "keyup":
				this.handleKeyboardEvent(event, false);
				break;

			case "wheel":
				this.handleWheelEvent(event);
				break;

			case "pointerlockchange":
				this.handlePointerLockEvent();
				break;

		}

	}

	/**
	 * Updates movement and rotation calculations based on time.
	 *
	 * This method should be called before a new frame is rendered.
	 *
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	update(delta) {

		this.rotationManager.update(delta);
		this.translationManager.update(delta);

	}

	/**
	 * Moves to the given position.
	 *
	 * @private
	 * @param {Vector3} position - The position.
	 * @return {DeltaControls} This instance.
	 */

	moveTo(position) {

		this.rotationManager.moveTo(position);

		return this;

	}

	/**
	 * Looks at the given point.
	 *
	 * @param {Vector3} point - The target point.
	 * @return {DeltaControls} This instance.
	 */

	lookAt(point) {

		this.rotationManager.lookAt(point);

		return this;

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param {Vector3} [view] - A vector to store the direction in. If none is provided, a new vector will be created.
	 * @return {Vector3} The normalized view direction.
	 */

	getViewDirection(view = new Vector3()) {

		return this.rotationManager.getViewDirection(view);

	}

	/**
	 * Returns the current target.
	 *
	 * @param {Vector3} [target] - A vector to store the target in. If none is provided, a new vector will be created.
	 * @return {Vector3} The current target.
	 */

	getTarget(target = new Vector3()) {

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
	 * @param {Vector3} target - The new target.
	 * @return {DeltaControls} This instance.
	 */

	setTarget(target) {

		this.target = target;
		this.rotationManager.target = target;
		this.translationManager.target = target;

		return this.lookAt(this.target);

	}

	/**
	 * Sets the position vector.
	 *
	 * @param {Vector3} position - The new position vector.
	 * @return {DeltaControls} This instance.
	 */

	setPosition(position) {

		this.position = position;
		this.rotationManager.position = position;
		this.translationManager.position = position;

		return this.lookAt(this.target);

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param {Quaternion} quaternion - The new quaternion.
	 * @return {DeltaControls} This instance.
	 */

	setQuaternion(quaternion) {

		this.quaternion = quaternion;
		this.rotationManager.quaternion = quaternion;
		this.translationManager.quaternion = quaternion;

		return this.lookAt(this.target);

	}

	/**
	 * Changes the control mode to first or third person perspective.
	 *
	 * @param {Boolean} orbit - Enable third person perspective.
	 * @return {DeltaControls} This instance.
	 */

	setOrbit(orbit) {

		const general = this.settings.general;

		if(general.orbit !== orbit) {

			this.getTarget(this.target);
			general.orbit = orbit;
			this.lookAt(this.target);

		}

		return this;

	}

	/**
	 * Locks or unlocks the pointer.
	 *
	 * @private
	 * @param {Boolean} [locked=true] - Whether the pointer should be locked.
	 */

	setPointerLocked(locked = true) {

		if(locked) {

			if(document.pointerLockElement !== this.dom && this.dom.requestPointerLock !== undefined) {

				this.dom.requestPointerLock();

			}

		} else if(document.exitPointerLock !== undefined) {

			document.exitPointerLock();

		}

	}

	/**
	 * Enables or disables the controls.
	 *
	 * @param {Boolean} [enabled=true] - Whether the controls should be enabled or disabled.
	 */

	setEnabled(enabled = true) {

		const dom = this.dom;

		this.translationManager.movementState.reset();

		if(enabled && !this.enabled) {

			document.addEventListener("pointerlockchange", this);
			document.body.addEventListener("keyup", this);
			document.body.addEventListener("keydown", this);
			dom.addEventListener("mousedown", this);
			dom.addEventListener("mouseup", this);
			dom.addEventListener("touchstart", this);
			dom.addEventListener("touchend", this);
			dom.addEventListener("wheel", this);

		} else if(!enabled && this.enabled) {

			document.removeEventListener("pointerlockchange", this);
			document.body.removeEventListener("keyup", this);
			document.body.removeEventListener("keydown", this);
			dom.removeEventListener("mousedown", this);
			dom.removeEventListener("mouseup", this);
			dom.removeEventListener("touchstart", this);
			dom.removeEventListener("touchend", this);
			dom.removeEventListener("wheel", this);
			dom.removeEventListener("mousemove", this);
			dom.removeEventListener("touchmove", this);

		}

		this.setPointerLocked(false);
		this.enabled = enabled;

	}

	/**
	 * Removes all event listeners and unlocks the pointer.
	 */

	dispose() {

		this.setEnabled(false);

	}

}
