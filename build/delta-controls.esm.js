/**
 * delta-controls v2.1.0 build Mon Mar 02 2020
 * https://github.com/vanruesc/delta-controls
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */
import { Vector3, Matrix4, Spherical, Vector2 } from 'math-ds';

/**
 * An enumeration of control actions.
 *
 * This enum can be used to bind keys to specific control actions.
 *
 * @type {Object}
 * @property {Number} MOVE_FORWARD - Move forward.
 * @property {Number} MOVE_LEFT - Move left.
 * @property {Number} MOVE_BACKWARD - Move backward.
 * @property {Number} MOVE_RIGHT - Move right.
 * @property {Number} MOVE_DOWN - Move down.
 * @property {Number} MOVE_UP - Move up.
 * @property {Number} ZOOM_OUT - Zoom out.
 * @property {Number} ZOOM_IN - Zoom in.
 */

const Action = {

	MOVE_FORWARD: 0,
	MOVE_LEFT: 1,
	MOVE_BACKWARD: 2,
	MOVE_RIGHT: 3,
	MOVE_DOWN: 4,
	MOVE_UP: 5,
	ZOOM_OUT: 6,
	ZOOM_IN: 7

};

/**
 * An enumeration of pointer buttons.
 *
 * @type {Object}
 * @property {Number} MAIN - The main mouse button, usually the left one.
 * @property {Number} AUXILIARY - The auxiliary mouse button, usually the middle one.
 * @property {Number} SECONDARY - The secondary mouse button, usually the right one.
 */

const PointerButton = {

	MAIN: 0,
	AUXILIARY: 1,
	SECONDARY: 2

};

/**
 * Two PI.
 *
 * @type {Number}
 * @private
 */

const TWO_PI = Math.PI * 2;

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v = new Vector3();

/**
 * A matrix.
 *
 * @type {Matrix4}
 * @private
 */

const m = new Matrix4();

/**
 * A rotation manager.
 */

class RotationManager {

	/**
	 * Constructs a new rotation manager.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Quaternion} quaternion - A quaternion.
	 * @param {Vector3} target - A target.
	 * @param {Settings} settings - The settings.
	 */

	constructor(position, quaternion, target, settings) {

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
		 * A target.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.target = target;

		/**
		 * The settings.
		 *
		 * @type {Settings}
		 * @private
		 */

		this.settings = settings;

		/**
		 * A spherical coordinate system.
		 *
		 * @type {Spherical}
		 */

		this.spherical = new Spherical();

	}

	/**
	 * Sets the position.
	 *
	 * @param {Vector3} position - A position.
	 * @return {RotationManager} This manager.
	 */

	setPosition(position) {

		this.position = position;

		return this;

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param {Quaternion} quaternion - A quaternion.
	 * @return {RotationManager} This manager.
	 */

	setQuaternion(quaternion) {

		this.quaternion = quaternion;

		return this;

	}

	/**
	 * Sets the target.
	 *
	 * @param {Vector3} target - A target.
	 * @return {RotationManager} This manager.
	 */

	setTarget(target) {

		this.target = target;

		return this;

	}

	/**
	 * Updates the quaternion.
	 *
	 * @return {RotationManager} This manager.
	 */

	updateQuaternion() {

		const settings = this.settings;
		const rotation = settings.rotation;

		if(settings.general.orbit) {

			m.lookAt(v.subVectors(this.position, this.target), rotation.pivotOffset, rotation.up);

		} else {

			m.lookAt(v.set(0, 0, 0), this.target.setFromSpherical(this.spherical), rotation.up);

		}

		this.quaternion.setFromRotationMatrix(m);

		return this;

	}

	/**
	 * Adjusts the spherical system.
	 *
	 * @param {Number} theta - The angle to add to theta in radians.
	 * @param {Number} phi - The angle to add to phi in radians.
	 * @return {RotationManager} This manager.
	 */

	adjustSpherical(theta, phi) {

		const settings = this.settings;
		const orbit = settings.general.orbit;
		const rotation = settings.rotation;
		const s = this.spherical;

		s.theta = !rotation.invertX ? s.theta - theta : s.theta + theta;
		s.phi = ((orbit || rotation.invertY) && !(orbit && rotation.invertY)) ? s.phi - phi : s.phi + phi;

		// Restrict theta and phi.
		s.theta = Math.min(Math.max(s.theta, rotation.minAzimuthalAngle), rotation.maxAzimuthalAngle);
		s.phi = Math.min(Math.max(s.phi, rotation.minPolarAngle), rotation.maxPolarAngle);
		s.theta %= TWO_PI;
		s.makeSafe();

		if(orbit) {

			// Keep the position up-to-date.
			this.position.setFromSpherical(s).add(this.target);

		}

		return this;

	}

	/**
	 * Zooms in or out.
	 *
	 * @param {Number} sign - The zoom sign. Possible values are [-1, 0, 1].
	 * @return {RotationManager} This manager.
	 */

	zoom(sign) {

		const settings = this.settings;
		const general = settings.general;
		const sensitivity = settings.sensitivity;
		const zoom = settings.zoom;
		const s = this.spherical;

		let amount, min, max;

		if(general.orbit && zoom.enabled) {

			amount = sign * sensitivity.zoom;

			if(zoom.invert) {

				amount = -amount;

			}

			min = Math.max(zoom.minDistance, 1e-6);
			max = Math.min(zoom.maxDistance, Infinity);

			s.radius = Math.min(Math.max(s.radius + amount, min), max);
			this.position.setFromSpherical(s).add(this.target);

		}

		return this;

	}

	/**
	 * Updates rotation calculations based on time.
	 *
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	update(delta) {

	}

	/**
	 * Looks at the given point.
	 *
	 * @param {Vector3} point - The target point.
	 * @return {RotationManager} This manager.
	 */

	lookAt(point) {

		const spherical = this.spherical;
		const position = this.position;
		const target = this.target;

		target.copy(point);

		if(this.settings.general.orbit) {

			v.subVectors(position, target);

		} else {

			v.subVectors(target, position).normalize();

		}

		spherical.setFromVector3(v);
		spherical.radius = Math.max(spherical.radius, 1e-6);
		this.updateQuaternion();

		return this;

	}

	/**
	 * Returns the current view direction.
	 *
	 * @param {Vector3} [view] - A vector to store the direction in. If none is provided, a new vector will be created.
	 * @return {Vector3} The normalized view direction.
	 */

	getViewDirection(view = new Vector3()) {

		view.setFromSpherical(this.spherical).normalize();

		if(this.settings.general.orbit) {

			view.negate();

		}

		return view;

	}

}

/**
 * An collection of movement flags.
 */

class MovementState {

	/**
	 * Constructs a new movement state.
	 */

	constructor() {

		/**
		 * Movement to the left.
		 *
		 * @type {Boolean}
		 */

		this.left = false;

		/**
		 * Movement to the right.
		 *
		 * @type {Boolean}
		 */

		this.right = false;

		/**
		 * Forward motion.
		 *
		 * @type {Boolean}
		 */

		this.forward = false;

		/**
		 * Backward motion.
		 *
		 * @type {Boolean}
		 */

		this.backward = false;

		/**
		 * Ascension.
		 *
		 * @type {Boolean}
		 */

		this.up = false;

		/**
		 * Descent.
		 *
		 * @type {Boolean}
		 */

		this.down = false;

	}

	/**
	 * Resets this state.
	 *
	 * @return {MovementState} This state.
	 */

	reset() {

		this.left = false;
		this.right = false;
		this.forward = false;
		this.backward = false;
		this.up = false;
		this.down = false;

		return this;

	}

}

/**
 * The X-axis.
 *
 * @type {Vector3}
 * @ignore
 */

const x = new Vector3(1, 0, 0);

/**
 * The Y-axis.
 *
 * @type {Vector3}
 * @ignore
 */

const y = new Vector3(0, 1, 0);

/**
 * The Z-axis.
 *
 * @type {Vector3}
 * @ignore
 */

const z = new Vector3(0, 0, 1);

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v$1 = new Vector3();

/**
 * A translation manager.
 */

class TranslationManager {

	/**
	 * Constructs a new translation manager.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Quaternion} quaternion - A quaternion.
	 * @param {Vector3} target - A target.
	 * @param {Settings} settings - The settings.
	 */

	constructor(position, quaternion, target, settings) {

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
		 * A target.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.target = target;

		/**
		 * The settings.
		 *
		 * @type {Settings}
		 * @private
		 */

		this.settings = settings;

		/**
		 * The current movement state.
		 *
		 * @type {MovementState}
		 */

		this.movementState = new MovementState();

	}

	/**
	 * Sets the position.
	 *
	 * @param {Vector3} position - A position.
	 * @return {RotationManager} This manager.
	 */

	setPosition(position) {

		this.position = position;

		return this;

	}

	/**
	 * Sets the quaternion.
	 *
	 * @param {Quaternion} quaternion - A quaternion.
	 * @return {RotationManager} This manager.
	 */

	setQuaternion(quaternion) {

		this.quaternion = quaternion;

		return this;

	}

	/**
	 * Sets the target.
	 *
	 * @param {Vector3} target - A target.
	 * @return {RotationManager} This manager.
	 */

	setTarget(target) {

		this.target = target;

		return this;

	}

	/**
	 * Translates a position by a specific distance along a given axis.
	 *
	 * @private
	 * @param {Vector3} axis - The axis.
	 * @param {Vector3} distance - The distance.
	 */

	translateOnAxis(axis, distance) {

		v$1.copy(axis).applyQuaternion(this.quaternion).multiplyScalar(distance);

		this.position.add(v$1);

		if(this.settings.general.orbit) {

			this.target.add(v$1);

		}

	}

	/**
	 * Modifies the position based on the current movement state and elapsed time.
	 *
	 * @private
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	translate(delta) {

		const sensitivity = this.settings.sensitivity;
		const state = this.movementState;

		const step = delta * sensitivity.translation;

		if(state.backward) {

			this.translateOnAxis(z, step);

		} else if(state.forward) {

			this.translateOnAxis(z, -step);

		}

		if(state.right) {

			this.translateOnAxis(x, step);

		} else if(state.left) {

			this.translateOnAxis(x, -step);

		}

		if(state.up) {

			this.translateOnAxis(y, step);

		} else if(state.down) {

			this.translateOnAxis(y, -step);

		}

	}

	/**
	 * Updates movement calculations based on time.
	 *
	 * @param {Number} delta - The time since the last update in seconds.
	 */

	update(delta) {

		if(this.settings.translation.enabled) {

			this.translate(delta);

		}

	}

	/**
	 * Moves to the given position.
	 *
	 * @param {Vector3} position - The position.
	 * @return {DeltaControls} This instance.
	 */

	moveTo(position) {

		if(this.settings.general.orbit) {

			this.target.copy(position);

		} else {

			this.position.copy(position);

		}

		return this;

	}

}

/**
 * A handler for the KeyCode Proxy.
 *
 * @type {Object}
 * @private
 */

const KeyCodeHandler = {

	/**
	 * Handles key code lookups.
	 *
	 * @param {Object} target - The KeyCode enumeration.
	 * @param {String} name - A potential key code identifier.
	 * @return {Number} A key code.
	 */

	get(target, name) {

		return (name in target) ?
			target[name] : (name.length === 1) ?
				name.toUpperCase().charCodeAt(0) : undefined;

	}

};

/**
 * An enumeration of key codes.
 *
 * Special keys are listed explicitly. Simple character keys [A-Z] are computed
 * on demand. For instance, `KeyCode.A` will return the key code for the A key.
 *
 * @type {Object}
 * @property {Number} BACKSPACE - Backspace key.
 * @property {Number} TAB - Tab key.
 * @property {Number} ENTER - Enter key.
 * @property {Number} SHIFT - Shift key.
 * @property {Number} CTRL - Control key.
 * @property {Number} ALT - Alt key.
 * @property {Number} PAUSE - Pause key.
 * @property {Number} CAPS_LOCK - Caps lock key.
 * @property {Number} ESCAPE - Escape key.
 * @property {Number} SPACE - Space bar.
 * @property {Number} PAGE_UP - Page up key.
 * @property {Number} PAGE_DOWN - Page down key.
 * @property {Number} END - End key.
 * @property {Number} HOME - Home key.
 * @property {Number} LEFT - Left arrow key.
 * @property {Number} UP - Up arrow key.
 * @property {Number} RIGHT - Right arrow key.
 * @property {Number} DOWN - Down arrow key.
 * @property {Number} INSERT - Insert key.
 * @property {Number} DELETE - Delete key.
 * @property {Number} META_LEFT - Left OS key.
 * @property {Number} META_RIGHT - Right OS key.
 * @property {Number} SELECT - Select key.
 * @property {Number} NUMPAD_0 - Numpad 0 key.
 * @property {Number} NUMPAD_1 - Numpad 1 key.
 * @property {Number} NUMPAD_2 - Numpad 2 key.
 * @property {Number} NUMPAD_3 - Numpad 3 key.
 * @property {Number} NUMPAD_4 - Numpad 4 key.
 * @property {Number} NUMPAD_5 - Numpad 5 key.
 * @property {Number} NUMPAD_6 - Numpad 6 key.
 * @property {Number} NUMPAD_7 - Numpad 7 key.
 * @property {Number} NUMPAD_8 - Numpad 8 key.
 * @property {Number} NUMPAD_9 - Numpad 9 key.
 * @property {Number} MULTIPLY - Multiply key.
 * @property {Number} ADD - Add key.
 * @property {Number} SUBTRACT - Subtract key.
 * @property {Number} DECIMAL_POINT - Decimal point key.
 * @property {Number} DIVIDE - Divide key.
 * @property {Number} F1 - F1 key.
 * @property {Number} F2 - F2 key.
 * @property {Number} F3 - F3 key.
 * @property {Number} F4 - F4 key.
 * @property {Number} F5 - F5 key.
 * @property {Number} F6 - F6 key.
 * @property {Number} F7 - F7 key.
 * @property {Number} F8 - F8 key.
 * @property {Number} F9 - F9 key.
 * @property {Number} F10 - F10 key.
 * @property {Number} F11 - F11 key.
 * @property {Number} F12 - F12 key.
 * @property {Number} NUM_LOCK - Num lock key.
 * @property {Number} SCROLL_LOCK - Scroll lock key.
 * @property {Number} SEMICOLON - Semicolon key.
 * @property {Number} EQUAL_SIGN - Equal sign key.
 * @property {Number} COMMA - Comma key.
 * @property {Number} DASH - Dash key.
 * @property {Number} PERIOD - Period key.
 * @property {Number} FORWARD_SLASH - Forward slash key.
 * @property {Number} GRAVE_ACCENT - Grave accent key.
 * @property {Number} OPEN_BRACKET - Open bracket key.
 * @property {Number} BACK_SLASH - Back slash key.
 * @property {Number} CLOSE_BRACKET - Close bracket key.
 * @property {Number} SINGLE_QUOTE - Single quote key.
 */

const KeyCode = new Proxy({

	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,

	SHIFT: 16,
	CTRL: 17,
	ALT: 18,

	PAUSE: 19,
	CAPS_LOCK: 20,
	ESCAPE: 27,

	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	INSERT: 45,
	DELETE: 46,

	META_LEFT: 91,
	META_RIGHT: 92,
	SELECT: 93,

	NUMPAD_0: 96,
	NUMPAD_1: 97,
	NUMPAD_2: 98,
	NUMPAD_3: 99,
	NUMPAD_4: 100,
	NUMPAD_5: 101,
	NUMPAD_6: 102,
	NUMPAD_7: 103,
	NUMPAD_8: 104,
	NUMPAD_9: 105,
	MULTIPLY: 106,
	ADD: 107,
	SUBTRACT: 109,
	DECIMAL_POINT: 110,
	DIVIDE: 111,

	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,

	NUM_LOCK: 144,
	SCROLL_LOCK: 145,

	SEMICOLON: 186,
	EQUAL_SIGN: 187,
	COMMA: 188,
	DASH: 189,
	PERIOD: 190,
	FORWARD_SLASH: 191,
	GRAVE_ACCENT: 192,

	OPEN_BRACKET: 219,
	BACK_SLASH: 220,
	CLOSE_BRACKET: 221,
	SINGLE_QUOTE: 222

}, KeyCodeHandler);

/**
 * General settings.
 */

class GeneralSettings {

	/**
	 * Constructs new general settings.
	 */

	constructor() {

		/**
		 * Indicates whether third person perspective is active.
		 *
		 * Should not be modified directly. See {@link DeltaControls#setOrbit}.
		 *
		 * @type {Boolean}
		 */

		this.orbit = true;

	}

	/**
	 * Copies the given general settings.
	 *
	 * @param {GeneralSettings} settings - General settings.
	 * @return {GeneralSettings} This instance.
	 */

	copy(settings) {

		this.orbit = settings.orbit;

		return this;

	}

	/**
	 * Clones this general settings instance.
	 *
	 * @return {GeneralSettings} The cloned general settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Key bindings.
 */

class KeyBindings {

	/**
	 * Constructs new key bindings.
	 */

	constructor() {

		/**
		 * The default key bindings.
		 *
		 * @type {Map}
		 */

		this.defaultActions = new Map();

		/**
		 * The current key bindings.
		 *
		 * @type {Map}
		 */

		this.actions = new Map();

	}

	/**
	 * Resets the current bindings to match the default bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	reset() {

		this.actions = new Map(this.defaultActions);

		return this;

	}

	/**
	 * Establishes default key bindings and resets the current bindings.
	 *
	 * @param {Map} actions - A map of actions. Each key must be a key code and each value must be a number.
	 * @return {KeyBindings} This key bindings instance.
	 */

	setDefault(actions) {

		this.defaultActions = actions;

		return this.reset();

	}

	/**
	 * Copies the given key bindings, including the default bindings.
	 *
	 * @param {KeyBindings} keyBindings - Key bindings.
	 * @return {KeyBindings} This key bindings instance.
	 */

	copy(keyBindings) {

		this.defaultActions = new Map(keyBindings.defaultActions);
		this.actions = new Map(keyBindings.actions);

		return this;

	}

	/**
	 * Clears the default key bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	clearDefault() {

		this.defaultActions.clear();

		return this;

	}

	/**
	 * Clears the current key bindings.
	 *
	 * @return {KeyBindings} This key bindings instance.
	 */

	clear() {

		this.actions.clear();

		return this;

	}

	/**
	 * Clones these key bindings.
	 *
	 * @return {KeyBindings} The cloned key bindings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

	/**
	 * Checks if the given key is bound to an action.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Boolean} Whether the given key is bound to an action.
	 */

	has(keyCode) {

		return this.actions.has(keyCode);

	}

	/**
	 * Returns the action that is bound to the given key.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Number} The action, or undefined if the key is not bound to any action.
	 */

	get(keyCode) {

		return this.actions.get(keyCode);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @param {Number} action - An action.
	 * @return {KeyBindings} This instance.
	 */

	set(keyCode, action) {

		this.actions.set(keyCode, action);

		return this;

	}

	/**
	 * Unbinds a key.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @return {Boolean} Whether the key bindings existed or not.
	 */

	delete(keyCode) {

		return this.actions.delete(keyCode);

	}

	/**
	 * Creates a plain representation of this instance.
	 *
	 * @return {String} The plain representation.
	 */

	toJSON() {

		return {
			defaultActions: [...this.defaultActions],
			actions: [...this.actions]
		};

	}

}

/**
 * Pointer settings.
 */

class PointerSettings {

	/**
	 * Constructs new pointer settings.
	 */

	constructor() {

		/**
		 * Whether the pointer buttons must be held down to have an effect.
		 *
		 * This setting only applies when the pointer is locked.
		 *
		 * @type {Boolean}
		 */

		this.hold = false;

		/**
		 * Whether the pointer should be locked on click events.
		 *
		 * @type {Boolean}
		 */

		this.lock = true;

	}

	/**
	 * Copies the given pointer settings.
	 *
	 * @param {PointerSettings} settings - Pointer settings.
	 * @return {PointerSettings} This instance.
	 */

	copy(settings) {

		this.hold = settings.hold;
		this.lock = settings.lock;

		return this;

	}

	/**
	 * Clones this pointer settings instance.
	 *
	 * @return {PointerSettings} The cloned pointer settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Rotation settings.
 */

class RotationSettings {

	/**
	 * Constructs new rotation settings.
	 */

	constructor() {

		/**
		 * The up vector. Must be normalized.
		 *
		 * @type {Vector3}
		 */

		this.up = new Vector3();
		this.up.copy(y);

		/**
		 * A pivot offset. Only affects third person orbiting.
		 *
		 * @type {Vector3}
		 */

		this.pivotOffset = new Vector3();

		/**
		 * The minimum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minAzimuthalAngle = -Infinity;

		/**
		 * The maximum azimuthal angle in radians. Range: [-Math.PI, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxAzimuthalAngle = Infinity;

		/**
		 * The minimum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.minPolarAngle = 0.0;

		/**
		 * The maximum polar angle in radians. Range: [0, Math.PI].
		 *
		 * @type {Number}
		 */

		this.maxPolarAngle = Math.PI;

		/**
		 * Indicates whether the horizontal rotation should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invertX = false;

		/**
		 * Indicates whether the vertical rotation should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invertY = false;

	}

	/**
	 * Copies the given rotation settings.
	 *
	 * @param {RotationSettings} settings - Rotation settings.
	 * @return {RotationSettings} This instance.
	 */

	copy(settings) {

		this.up.copy(settings.up);
		this.pivotOffset.copy(settings.pivotOffset);

		this.minAzimuthalAngle = (settings.minAzimuthalAngle !== null) ? settings.minAzimuthalAngle : -Infinity;
		this.maxAzimuthalAngle = (settings.maxAzimuthalAngle !== null) ? settings.maxAzimuthalAngle : Infinity;

		this.minPolarAngle = settings.minPolarAngle;
		this.maxPolarAngle = settings.maxPolarAngle;

		this.invertX = settings.invertX;
		this.invertY = settings.invertY;

		return this;

	}

	/**
	 * Clones this rotation settings instance.
	 *
	 * @return {RotationSettings} The cloned rotation settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Sensitivity settings.
 */

class SensitivitySettings {

	/**
	 * Constructs new sensitivity settings.
	 */

	constructor() {

		/**
		 * The rotation sensitivity.
		 *
		 * @type {Number}
		 */

		this.rotation = 0.0025;

		/**
		 * The translation sensitivity.
		 *
		 * @type {Number}
		 */

		this.translation = 1.0;

		/**
		 * The zoom sensitivity.
		 *
		 * @type {Number}
		 */

		this.zoom = 0.1;

	}

	/**
	 * Copies the given sensitivity settings.
	 *
	 * @param {SensitivitySettings} settings - Sensitivity settings.
	 * @return {SensitivitySettings} This instance.
	 */

	copy(settings) {

		this.rotation = settings.rotation;
		this.translation = settings.translation;
		this.zoom = settings.zoom;

		return this;

	}

	/**
	 * Clones these sensitivity settings.
	 *
	 * @return {SensitivitySettings} The cloned sensitivity settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Translation settings.
 */

class TranslationSettings {

	/**
	 * Constructs new translation settings.
	 */

	constructor() {

		/**
		 * Whether positional translation is enabled.
		 *
		 * @type {Boolean}
		 */

		this.enabled = true;

	}

	/**
	 * Copies the given translation settings.
	 *
	 * @param {TranslationSettings} settings - Translation settings.
	 * @return {TranslationSettings} This instance.
	 */

	copy(settings) {

		this.enabled = settings.enabled;

		return this;

	}

	/**
	 * Clones this translation settings instance.
	 *
	 * @return {TranslationSettings} The cloned translation settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Zoom settings.
 */

class ZoomSettings {

	/**
	 * Constructs new zoom settings.
	 */

	constructor() {

		/**
		 * Whether zooming is enabled.
		 *
		 * @type {Boolean}
		 */

		this.enabled = true;

		/**
		 * Indicates whether the zoom controls should be inverted.
		 *
		 * @type {Boolean}
		 */

		this.invert = false;

		/**
		 * The minimum zoom distance.
		 *
		 * @type {Number}
		 */

		this.minDistance = 1e-6;

		/**
		 * The maximum zoom distance.
		 *
		 * @type {Number}
		 */

		this.maxDistance = Infinity;

	}

	/**
	 * Copies the given zoom settings.
	 *
	 * @param {ZoomSettings} settings - Zoom settings.
	 * @return {ZoomSettings} This instance.
	 */

	copy(settings) {

		this.enabled = settings.enabled;
		this.invert = settings.invert;
		this.minDistance = settings.minDistance;
		this.maxDistance = settings.maxDistance;

		return this;

	}

	/**
	 * Clones this zoom settings instance.
	 *
	 * @return {ZoomSettings} The cloned zoom settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}

/**
 * Control settings.
 */

class Settings {

	/**
	 * Constructs new settings.
	 */

	constructor() {

		/**
		 * General settings.
		 *
		 * @type {GeneralSettings}
		 */

		this.general = new GeneralSettings();

		/**
		 * Key bindings.
		 *
		 * @type {KeyBindings}
		 */

		this.keyBindings = new KeyBindings();
		this.keyBindings.setDefault(new Map([

			[KeyCode.W, Action.MOVE_FORWARD],
			[KeyCode.UP, Action.MOVE_FORWARD],

			[KeyCode.A, Action.MOVE_LEFT],
			[KeyCode.LEFT, Action.MOVE_LEFT],

			[KeyCode.S, Action.MOVE_BACKWARD],
			[KeyCode.DOWN, Action.MOVE_BACKWARD],

			[KeyCode.D, Action.MOVE_RIGHT],
			[KeyCode.RIGHT, Action.MOVE_RIGHT],

			[KeyCode.X, Action.MOVE_DOWN],
			[KeyCode.SPACE, Action.MOVE_UP],

			[KeyCode.PAGE_DOWN, Action.ZOOM_OUT],
			[KeyCode.PAGE_UP, Action.ZOOM_IN]

		]));

		/**
		 * Pointer settings.
		 *
		 * @type {PointerSettings}
		 */

		this.pointer = new PointerSettings();

		/**
		 * Rotation settings.
		 *
		 * @type {RotationSettings}
		 */

		this.rotation = new RotationSettings();

		/**
		 * Sensitivity settings.
		 *
		 * @type {SensitivitySettings}
		 */

		this.sensitivity = new SensitivitySettings();

		/**
		 * Translation settings.
		 *
		 * @type {TranslationSettings}
		 */

		this.translation = new TranslationSettings();

		/**
		 * Zoom settings.
		 *
		 * @type {ZoomSettings}
		 */

		this.zoom = new ZoomSettings();

	}

	/**
	 * Copies the given settings.
	 *
	 * @param {Settings} settings - Settings.
	 * @return {Settings} This instance.
	 */

	copy(settings) {

		this.general.copy(settings.general);
		this.keyBindings.copy(settings.keyBindings);
		this.pointer.copy(settings.pointer);
		this.rotation.copy(settings.rotation);
		this.sensitivity.copy(settings.sensitivity);
		this.translation.copy(settings.translation);
		this.zoom.copy(settings.zoom);

		return this;

	}

	/**
	 * Clones these settings.
	 *
	 * @return {Settings} The cloned settings.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

	/**
	 * Saves the current settings in the form of a JSON blob.
	 *
	 * @return {DOMString} A URL to the exported settings.
	 */

	toDataURL() {

		return URL.createObjectURL(new Blob([JSON.stringify(this)], { type: "text/json" }));

	}

}

/**
 * The Strategy interface.
 */

class Strategy {

	/**
	 * Executes this strategy.
	 *
	 * @throws {Error} An error is thrown if the method is not overridden.
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		throw new Error("Strategy#execute method not implemented!");

	}

}

/**
 * A movement strategy.
 */

class MovementStrategy extends Strategy {

	/**
	 * Constructs a new movement strategy.
	 *
	 * @param {MovementState} movementState - A movement state.
	 * @param {Direction} direction - A direction.
	 */

	constructor(movementState, direction) {

		super();

		/**
		 * A movement state.
		 *
		 * @type {MovementState}
		 * @private
		 */

		this.movementState = movementState;

		/**
		 * A direction.
		 *
		 * @type {Direction}
		 * @private
		 */

		this.direction = direction;

	}

	/**
	 * Executes this strategy.
	 *
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		const state = this.movementState;

		switch(this.direction) {

			case Direction.FORWARD:
				state.forward = flag;
				break;

			case Direction.LEFT:
				state.left = flag;
				break;

			case Direction.BACKWARD:
				state.backward = flag;
				break;

			case Direction.RIGHT:
				state.right = flag;
				break;

			case Direction.DOWN:
				state.down = flag;
				break;

			case Direction.UP:
				state.up = flag;
				break;

		}

	}

}
/**
 * An enumeration of movement directions.
 *
 * @type {Object}
 * @property {Number} FORWARD - Move forward.
 * @property {Number} LEFT - Move left.
 * @property {Number} BACKWARD - Move backward.
 * @property {Number} RIGHT - Move right.
 * @property {Number} DOWN - Move down.
 * @property {Number} UP - Move up.
 */

const Direction = {

	FORWARD: 0,
	LEFT: 1,
	BACKWARD: 2,
	RIGHT: 3,
	DOWN: 4,
	UP: 5

};

/**
 * A zoom strategy.
 */

class ZoomStrategy extends Strategy {

	/**
	 * Constructs a new zoom strategy.
	 *
	 * @param {RotationManager} rotationManager - A rotation manager.
	 * @param {Boolean} zoomIn - Whether this strategy should zoom in.
	 */

	constructor(rotationManager, zoomIn) {

		super();

		/**
		 * A rotation manager.
		 *
		 * @type {RotationManager}
		 * @private
		 */

		this.rotationManager = rotationManager;

		/**
		 * Whether this strategy should zoom in.
		 *
		 * @type {Boolean}
		 * @private
		 */

		this.zoomIn = zoomIn;

	}

	/**
	 * Executes this strategy.
	 *
	 * @param {Boolean} flag - A flag.
	 */

	execute(flag) {

		// Only act on key down events.
		if(flag) {

			this.rotationManager.zoom(this.zoomIn ? -1 : 1);

		}

	}

}

/**
 * Movement controls driven by user input.
 *
 * @implements {Disposable}
 * @implements {EventListener}
 */

class DeltaControls {

	/**
	 * Constructs new controls.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Quaternion} quaternion - A quaternion.
	 * @param {HTMLElement} [dom=document.body] - A DOM element. Acts as the primary event target.
	 */

	constructor(position = null, quaternion = null, dom = document.body) {

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

		if(position !== null && quaternion !== null) {

			this.lookAt(this.target);

			if(dom !== null) {

				this.setEnabled();

			}

		}

	}

	/**
	 * Returns the DOM element.
	 *
	 * @return {HTMLElement} The DOM element.
	 */

	getDom() {

		return this.dom;

	}

	/**
	 * Returns the position.
	 *
	 * @return {Vector3} The position.
	 */

	getPosition() {

		return this.position;

	}

	/**
	 * Returns the quaternion.
	 *
	 * @return {Quaternion} The quaternion.
	 */

	getQuaternion() {

		return this.quaternion;

	}

	/**
	 * Returns the current target.
	 *
	 * @param {Vector3} [target] - A vector to store the target in. If none is provided, a new one will be created.
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
	 * Returns the current view direction.
	 *
	 * @param {Vector3} [view] - A vector to store the direction in. If none is provided, a new one will be created.
	 * @return {Vector3} The normalized view direction.
	 */

	getViewDirection(view = new Vector3()) {

		return this.rotationManager.getViewDirection(view);

	}

	/**
	 * Sets the DOM element.
	 *
	 * @param {HTMLElement} dom - The new DOM element.
	 * @return {DeltaControls} This instance.
	 */

	setDom(dom) {

		const enabled = this.enabled;

		if(dom !== null) {

			if(enabled) {

				this.setEnabled(false);

			}

			this.dom = dom;
			this.setEnabled(enabled);

		}

		return this;

	}

	/**
	 * Sets the position vector.
	 *
	 * @param {Vector3} position - The new position vector.
	 * @return {DeltaControls} This instance.
	 */

	setPosition(position) {

		this.position = position;
		this.rotationManager.setPosition(position);
		this.translationManager.setPosition(position);

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
		this.rotationManager.setQuaternion(quaternion);
		this.translationManager.setQuaternion(quaternion);

		return this.lookAt(this.target);

	}

	/**
	 * Sets the target.
	 *
	 * @param {Vector3} target - The new target.
	 * @return {DeltaControls} This instance.
	 */

	setTarget(target) {

		this.target = target;
		this.rotationManager.setTarget(target);
		this.translationManager.setTarget(target);

		return this.lookAt(this.target);

	}

	/**
	 * Changes the control mode to first or third person perspective.
	 *
	 * @param {Boolean} orbit - Whether the third person perspective should be enabled.
	 * @return {DeltaControls} This instance.
	 */

	setOrbitEnabled(orbit) {

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
	 * @param {DeltaControls} controls - A controls instance.
	 * @return {DeltaControls} This instance.
	 */

	copy(controls) {

		this.dom = controls.getDom();
		this.position = controls.getPosition();
		this.quaternion = controls.getQuaternion();
		this.target = controls.getTarget();

		this.settings.copy(controls.settings);

		this.rotationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);
		this.translationManager.setPosition(this.position).setQuaternion(this.quaternion).setTarget(this.target);

		return this.lookAt(this.target);

	}

	/**
	 * Clones this instance.
	 *
	 * @return {DeltaControls} the cloned controls.
	 */

	clone() {

		return new this.constructor().copy(this);

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

		this.rotationManager.zoom(Math.sign(event.deltaY));

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
	 * @return {DeltaControls} This instance.
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

		return this;

	}

	/**
	 * Removes all event listeners and unlocks the pointer.
	 */

	dispose() {

		this.setEnabled(false);

	}

}

export { Action, DeltaControls, Direction, GeneralSettings, KeyBindings, KeyCode, MovementState, MovementStrategy, PointerButton, PointerSettings, RotationManager, RotationSettings, SensitivitySettings, Settings, Strategy, TranslationManager, TranslationSettings, ZoomSettings, ZoomStrategy };
