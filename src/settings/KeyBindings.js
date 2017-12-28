import { Action } from "../core/Action.js";
import { KeyCode } from "../input/KeyCode.js";

/**
 * Key bindings.
 */

export class KeyBindings {

	/**
	 * Constructs new key bindings.
	 */

	constructor() {

		/**
		 * A map, populated with default action bindings.
		 *
		 * @type {Map}
		 */

		this.actions = new Map([

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

		]);

	}

	/**
	 * Copies the given key bindings.
	 *
	 * @param {KeyBindings} keyBindings - Key bindings.
	 * @return {KeyBindings} This key bindings instance.
	 */

	copy(keyBindings) {

		this.actions = new Map(keyBindings.actions);

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
	 * @return {Action} The action, or undefined if the key is not bound to any action.
	 */

	get(keyCode) {

		return this.actions.get(keyCode);

	}

	/**
	 * Binds a key to an action.
	 *
	 * @param {KeyCode} keyCode - A key code.
	 * @param {Action} action - An action.
	 * @return {KeyBindings} This instance.
	 */

	set(keyCode, action) {

		this.actions.set(keyCode);

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

}
